export function createElement(type, attributes = {}, content = "") {
    const element = document.createElement(type);

    // Set attributes
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    // Set content if provided
    if (content) {
        element.textContent = content;
    }

    return element;
}
