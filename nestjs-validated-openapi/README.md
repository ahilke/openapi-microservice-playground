A NestJS service to showcase an OpenAPI-first approach making use of [express-openapi-validator](https://github.com/cdimascio/express-openapi-validator) to validate requests and responses against the OpenAPI specification at runtime.

# Build

```sh
docker build -t nestjs-validated-openapi .
```

# Run

```sh
docker run -p 9002:9002 nestjs-validated-openapi
```

Go to http://localhost:9002/tickets/1
