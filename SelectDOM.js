/**
 *
 * @param {string} cssSelector
 */
function $(cssSelector) {
  if (/(1){1}[\.#]+[a-zA-z0-9].*?/.test(cssSelector)) {
    return document.querySelector(cssSelector.slice(1, cssSelector.length));
  } else if (/[\.#]?[a-zA-z0-9].*?/.test(cssSelector)) {
    return document.querySelectorAll(cssSelector);
  } else {
    throw TypeError("CSS 选择器有问题");
  }
}
