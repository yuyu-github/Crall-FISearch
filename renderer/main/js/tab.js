export let currentTab;
export let currentTabId;

export function createTab() {
  currentTab = document.getElementById('tabs').appendChild(document.createElement('div'));
  currentTabId = new Date().getTime() * Math.floor(Math.random() * 100);
  currentTab.dataset.tabId = currentTabId;

  //検索ボックス・検索ボタンを追加
  let searchArea = document.createElement('div'); //Flexを使うためdivの中に入れる
  searchArea.classList.add('search-area')
  let searchBoxEl = document.createElement('input');
  searchBoxEl.type = 'text';
  searchBoxEl.classList.add('search-box');
  searchArea.appendChild(searchBoxEl);
  let searchButtonEl = document.createElement('button');
  searchButtonEl.innerHTML = '検索';
  searchButtonEl.classList.add('search-button');
  searchArea.appendChild(searchButtonEl)
  currentTab.appendChild(searchArea);

  let modesEl = document.createElement('div');
  modesEl.classList.add('types');
  currentTab.appendChild(modesEl)
}
