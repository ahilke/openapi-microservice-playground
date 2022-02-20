// @ts-nocheck

import gateway from "gql-gateway";

const endpointsList = [{ name: "users", url: "http://localhost:9002/static/openapi.json" }];

gateway({ endpointsList })
    .then((server) => server.listen(5000))
    .then(console.log("Service is now running at port: 5000"))
    .catch((err) => console.log(err));
