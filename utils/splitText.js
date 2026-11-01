export function splitWords(target, baseClass) {
  const elements = typeof target === 'string' 
    ? Array.from(document.querySelectorAll(target)) 
    : (target instanceof NodeList ? Array.from(target) : [target]);
    
  const allWordElements = [];
  elements.forEach((el) => {
    if (!el) return;
    const text = el.innerText.trim();
    if (!text) return;
    const words = text.split(/\s+/);
    el.innerHTML = words
      .map((word, index) => {
        return `<div class="${baseClass} ${baseClass}${index + 1}" style="display:inline-block;position:relative;">${word}</div>`;
      })
      .join(' ');
    el.querySelectorAll(`.${baseClass}`).forEach((w) => allWordElements.push(w));
  });
  return allWordElements;
}
