import { createElement } from "react";

export default function Cabecalho(props) {
    return (
    <>
        <header>
        <h1>Vite + React / coded by Marii 😚</h1>
        <ul>
            {props.children.map((item, indice) => {
            createElement("li", { key: indice }, item);
            return item;
            })}
        </ul>
        </header>
    </>
    );
}