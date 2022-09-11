import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { appWindow } from "@tauri-apps/api/window";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { ReactElement, useState } from "react";

import { Selector } from "./Selector";

export function App(): ReactElement {
    const [url, setUrl] = useState<string>("");

    if (url === "") {
        return <Selector setUrl={setUrl} />;
    }

    document.title = url;
    appWindow.setTitle(`GraphQL Desktop - ${url}`);
    const fetcher = createGraphiQLFetcher({
        url,
    });
    return <GraphiQL fetcher={fetcher} />;
}
