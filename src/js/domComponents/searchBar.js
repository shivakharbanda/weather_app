import { createElement } from "../utils"
import 'bootstrap-icons/font/bootstrap-icons.css';
export function getSearchBox() {
    let searchDiv = createElement(
        "div", 
        {
            class: "search-box-div",
        }
    )

    let searchBtn = createElement(
        "button",
        {
            "type" : "button",
            "id": "searchBtn",
            "class": "bi bi-search"
        }
    )

   let searchBar = createElement(
    "input",
    {
        "id": "searchBox",
        "placeholder" : "Search Location"

    },
   )

   searchDiv.appendChild(searchBar)
   searchDiv.appendChild(searchBtn)


    
    return searchDiv
}
