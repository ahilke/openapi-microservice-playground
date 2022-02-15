import { Controller, Get, Param } from "@nestjs/common";

@Controller()
export class UserController {
    @Get("users/:id")
    public getUser(@Param("id") _id: string) {
        return {
            id: "2dce19f8-40af-4ef3-9e44-519df4cfa157",
            firstName: "Terry",
            lastName: "Pratchett",
        };
    }
}
