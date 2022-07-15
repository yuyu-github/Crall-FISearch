import { currentTab } from "./tab.js";

export let currentMode = 'file';
export let currentModeEl = null;

export function createModeEl() {
  let types = ['file'];

  for (let mode of types) {
    let typeEl = document.createElement('div');
    typeEl.classList.add('types');
    
    switch (mode) {
      case 'file': {
        
      }
    }

    currentTab.getElementsByClassName('types')[0].appendChild(typeEl);
  }
}

export function setMode(mode) {
  let modeEl = currentTab.querySelector('.types > .' + mode)
  if (modeEl == null) {
    createModeEl();
    setMode(mode);
    return;
  }

  currentModeEl?.classList?.remove?.('displayed')
  modeEl.classList.add('displayed');

  currentMode = mode;
  currentModeEl = modeEl;
}
