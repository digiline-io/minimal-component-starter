'use strict';

class MyComponent extends HTMLElement {
  static get observedAttributes() {
    return ['who'];
  }

  who = 'world';
  
  constructor() {
    super();
  }
  
  attributeChangedCallback(attrName, oldValue, newValue) {
    this[attrName] = newValue;
  }
  
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<h1>Hello, ${this.who}!</h1>`;
  }
  
  disconnectedCallback() { }
}

customElements.define('my-component', MyComponent);