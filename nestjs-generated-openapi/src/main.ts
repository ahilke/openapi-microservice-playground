import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

export async function createApp(): Promise<INestApplication> {
    return NestFactory.create(AppModule);
}

async function bootstrap() {
    const app = await createApp();
    await app.listen(9001);
}

bootstrap();
