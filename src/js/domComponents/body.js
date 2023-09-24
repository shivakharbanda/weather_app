import { createElement } from "../utils"
import { getMainWeatherComponent } from "./mainWeatherComponent"


export function getBody() {
    let appBody = createElement(
        "div", 
        {
            class : "main-body"
        }
    )

    let mainDiv = getMainWeatherComponent()


    appBody.appendChild(mainDiv);

    return appBody
}
