import { Body, Controller, Get, InternalServerErrorException, Param, Post } from "@nestjs/common";

@Controller()
export class TicketController {
    @Post("tickets")
    public createTicket(@Body() body: CreateTicketRequest) {
        if (Math.random() > 0.5) {
            return {
                id: "75f219f9-4267-4f76-86eb-055755b27486",
                ...body,
            };
        } else {
            throw new InternalServerErrorException({
                errorCode: "lost-coin-flip-error",
                message: "Today is not your lucky day.",
            });
        }
    }

    @Get("tickets/:id")
    public getTicket(@Param("id") _id: string) {
        return {
            id: "75f219f9-4267-4f76-86eb-055755b27486",
            title: "Install Kitchen Sink",
            tags: [
                { title: "Kitchen", color: "#f00" },
                { title: "Plumbing", color: "#009" },
            ],
        };
    }
}

interface CreateTicketRequest {
    title: string;
    tags: Array<{ title: string; color: string }>;
}
