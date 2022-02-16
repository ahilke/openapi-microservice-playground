import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { writeFileSync } from "fs";
import { join } from "path";
import { createApp } from "./main";

async function generateOpenApiJson() {
    const app = await createApp();

    const swaggerConfig = new DocumentBuilder().build();
    const openApi = SwaggerModule.createDocument(app, swaggerConfig, {
        operationIdFactory: (_controllerKey, methodKey) => methodKey,
    });

    const outputPath = join(__dirname, "../dist/openapi.json");
    writeFileSync(outputPath, JSON.stringify(openApi), { encoding: "utf8" });

    process.exit();
}

generateOpenApiJson();
