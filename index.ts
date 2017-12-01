let matchesFunc: (selector: string) => boolean = Element.prototype.matches ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        (Element.prototype as any).oMatchesSelector ||
        (Element.prototype as any).mozMatchesSelector;
if (!matchesFunc) {
  matchesFunc = function(selector: string): boolean {
    let matchedElems = document.querySelectorAll(selector);
    for (let q = 0; q < matchedElems.length; ++q) {
      if (matchedElems[q] === this) {
        return true;
      }
    }
    return false;
  };
}

function matches(elem: Element, selector: string): boolean {
  return matchesFunc.call(elem, selector);
}

let closestFunc: (selector: string) => Element|null = Element.prototype.closest || function(selector: string): Element|null {
  let el: Element|null = this;
  while (el) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};

export default function closest(elem: Element|null, selector: string): Element|null {
  return closestFunc.call(elem, selector);
}
