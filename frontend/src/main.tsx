import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/settings";

import { Routers } from "./Routers";

import "./index.css";


render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
