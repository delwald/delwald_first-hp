document.addEventListener('DOMContentLoaded', function() {
  const ta = new TextAnimation('.at_title');
  setTimeout(() => {
      ta.animate();
  }, 1000);
});

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
      return this.chars.reduce((acc, curr) => {
      return `${acc}<span class="char"> ${curr}</span>`;
      }, "");
    }
      animate() {
        this.el.classList.toggle('inview');
    }
}
