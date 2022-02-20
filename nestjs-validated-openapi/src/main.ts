import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { INestApplication } from "@nestjs/common";

export async function createApp(): Promise<INestApplication> {
    return NestFactory.create(AppModule);
}

async function bootstrap() {
    const app = await createApp();
    await app.listen(9002);
}

bootstrap();
