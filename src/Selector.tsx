import { ReactElement, useEffect, useState } from "react";

import styles from "./Selector.module.css";

const storageKey = "graphiql.latestUrl";

interface Props {
    setUrl(value: string): void;
}

export function Selector({ setUrl }: Props): ReactElement {
    const [text, setText] = useState<string>("https://");

    useEffect(() => {
        const latestUrl = localStorage.getItem(storageKey);
        if (latestUrl) {
            setText(latestUrl);
        }
    }, []);

    return (
        <div className={styles.selector}>
            <input
                className={styles.input}
                type="text"
                value={text}
                onChange={({ target }) => {
                    setText(target.value);
                }}
            />
            <button
                className={styles.button}
                onClick={() => {
                    localStorage.setItem(storageKey, text);
                    setUrl(text);
                }}
            >
                OPEN
            </button>
        </div>
    );
}
