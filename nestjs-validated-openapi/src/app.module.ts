import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as OpenApiValidator from "express-openapi-validator";
import { join } from "path";
import { OpenApiExceptionFilter } from "./filters/openapi-exception.filter";
import { TicketModule } from "./modules/ticket/ticket.module";

@Module({
    imports: [
        TicketModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "dist/static"),
            serveRoot: "/static",
        }),
    ],
    providers: [{ provide: APP_FILTER, useClass: OpenApiExceptionFilter }],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                ...OpenApiValidator.middleware({
                    apiSpec: join(__dirname, "./static/openapi.yaml"),
                    validateRequests: {
                        allowUnknownQueryParameters: true,
                        coerceTypes: false,
                    },
                    validateResponses: true,
                    validateFormats: "full",
                }),
            )
            .exclude("/static/(.*)")
            .forRoutes("*");
    }
}
