import { createElement } from "../utils";
import { getChangeBtn } from "./changeBtn";
import { getSearchBox } from "./searchBar";



export function getHeader() {

    let header = createElement(
        'header', 
        {
            class : "header"
        }
    )
    
    let logoDiv = createElement(
        'div',
        {
            class : 'logoDiv'
        }
    )
    
    let searchDiv = getSearchBox()
    
    let changeBtnDiv = getChangeBtn()
    


    


    header.appendChild(logoDiv)
    header.appendChild(searchDiv)
    header.appendChild(changeBtnDiv)

    
    return header
}
