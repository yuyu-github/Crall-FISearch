import { currentTab } from "./tab.js";

export let currentMode = 'file';
export let currentModeEl = null;

export function createModeEl() {
  let modes = ['file'];

  for (let mode of modes) {
    let modeEl = document.createElement('div');
    modeEl.classList.add('file');
    
    switch (mode) {
      case 'file': {
        
      }
    }

    currentTab.getElementsByClassName('modes')[0].appendChild(modeEl);
  }
}

export function setMode(mode) {
  let modeEl = currentTab.querySelector('.modes > .' + mode)
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
