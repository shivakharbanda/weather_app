import { createElement } from "../utils"
import 'bootstrap-icons/font/bootstrap-icons.css';

export function getChangeBtn() {

    let degreeFer = createElement(
        'span',
        {
            class: "d-f"
        },
        "°F"
    );

    let degreeCel = createElement(
        'span',
        {
            class: "d-c"
        },
        "°C"
    );

    let slash = createElement(
        'span',
        {
            class: "slash"
        },
        "/"
    );
    
    
    

    let changeBtnDiv = createElement(
        'div',
        {
            id : 'changeBtnDiv'
        }
    );
    


    let changeBtn = createElement(
        "button",
        {
            "type" : "button",
            "id": "changeBtn",
        }
    );

    changeBtn.appendChild(degreeCel);
    changeBtn.appendChild(slash);
    changeBtn.appendChild(degreeFer);

    changeBtnDiv.appendChild(changeBtn);
    return changeBtnDiv;
}
