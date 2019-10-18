// Global app controller
//b472319e24f984eee67c8790b2adddef

import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";
import { basename } from "path";

const state = {};

console.log("Hello");

//renderLoader(elements.searchResult);

const controlSearch = async () => {
  state.search = new Search(searchView.getInput());

  searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searchResult);

  await state.search.getResults();

  clearLoader();
  searchView.renderResults(state.search.result);
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
