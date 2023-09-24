import { createElement } from "../utils";

export function getMainWeatherComponent() {
    let mainDiv = createElement(
        "div",
        {
            "class" : "main-weather-component",
            "id": "mainWeatherComponent"
        }
    );

    let locationHead = createElement(
        "h3",
        {
            "class" : "location-name"
        },
        "London"
    );

    let tempHead = createElement(
        "h1",
        {
            "class" : "temp"
        },
        "21°C"
    );

    let forcastHead = createElement(
        "h5",
        {
            "class": "forcast-ele"
        },
        "Broken Clouds"
    )

    let highLowElement = createElement(
        "div",
        {
            "class": "high-low-box"
        }
    );

    let highEle = createElement(
        "p", 
        {
            "class": "high-temp"
        },
        "H : 26°C"
    )

    let lowEle = createElement(
        "p", 
        {
            "class" : "low-twmp"
        },
        "L : 14°C"
    )

    highLowElement.appendChild(highEle);
    highLowElement.appendChild(lowEle);

    mainDiv.appendChild(locationHead);
    mainDiv.appendChild(tempHead);
    mainDiv.appendChild(forcastHead);
    mainDiv.appendChild(highLowElement)

    return mainDiv;

}