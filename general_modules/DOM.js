/**
 * tells the program what the user is selecting
 * @param selector
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement
 * | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement |
 * HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement |
 * HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement |
 * HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement
 * | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement
 * | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement |
 * HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement |
 * HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement |
 * HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement |
 * HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement |
 * HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
function get(selector) {
    return document.querySelector(selector);
}

/**
 * takes the user's selection and sets the text to it
 * @param selector
 * @param text
 */
function setText(selector, text) {
    get(selector).textContent = text;
}

/**
 * gets the users selection and sets the value
 * @param selector
 * @param value
 */
function setValue(selector, value) {
    get(selector).value = value;
}

/**
 * gets the user's input value
 * @param selector
 * @returns {string | any | number}
 */
function getValue(selector) {
    return get(selector).value;
}

/**
 * clears the user's selection
 * @param selector
 */
function clear(selector) {
    const elem = get(selector);
    if (elem.value) elem.value = "";
    else elem.textContent = "";
}

/**
 * sets the focus of the curser into the box selected by the user
 * @param selector
 */
function focus(selector) {
    get(selector).focus();
}

/**
 * selects based on user's choice
 * @param selector
 */
function select(selector) {
    get(selector).select();
}

/**
 * makes sure the page is loaded
 * @param func
 */
function load(func) {
    document.addEventListener("DOMContentLoaded", func);
}

/**
 * waits for the user to click on anything
 * @param selector
 * @param func
 */
function addClick(selector, func) {
    get(selector).addEventListener("click", func);
}

/**
 * exports data for use on other files
 */
export {get, setText, setValue, getValue, clear, 
    focus, select, load, addClick};