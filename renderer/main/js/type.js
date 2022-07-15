import { currentTab } from "./tab.js";

export let currentType = 'file';
export let currentTypeEl = null;

export function createTypeEl() {
  let types = ['file'];

  for (let type of types) {
    let typeEl = document.createElement('div');
    typeEl.classList.add(type);
    
    switch (type) {
      case 'file': {
        
      }
    }

    currentTab.getElementsByClassName('types')[0].appendChild(typeEl);
  }
}

export function setType(type) {
  let typeEl = currentTab.querySelector('.types > .' + type)
  if (typeEl == null) {
    createTypeEl();
    setType(type);
    return;
  }

  currentTypeEl?.classList?.remove?.('displayed')
  typeEl.classList.add('displayed');

  currentType = type;
  currentTypeEl = typeEl;
}
