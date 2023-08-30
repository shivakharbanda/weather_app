import { createElement } from "../utils"


export function getBody() {
    let appBody = createElement(
        "div", 
        {
            class : "main-body"
        }
    )

    return appBody
}
