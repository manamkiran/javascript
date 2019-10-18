import { elements } from "./base";

const prev = "prev";
const next = "next";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
	elements.searchResultInput.innerHTML = "";
	elements.searchResultPages.innerHTML = "";
};

const limitRecipeTitle = (title, limit = 17) => {
  if (title.length > limit) {
    const newTitle = [];
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length < limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

const renderRecipe = recipe => {
  const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(
                      recipe.title
                    )}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
  elements.searchResultInput.insertAdjacentHTML("beforeend", markup);
};

const createButton = (page, type) =>
  `
    <button class="btn-inline results__btn--${type}" data-goto ='${
    type === prev ? page - 1 : page + 1
  }'>
			<span>Page ${type === prev ? page - 1 : page + 1}</span>
      <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-${
            type === prev ? "left" : "right"
          }"></use>
      </svg>
    </button>
  `;

const renderButtons = (page, numberOfResults, resultsPerPage = 10) => {
  const pages = Math.ceil(numberOfResults / resultsPerPage);

  let button;
  if (page === 1 && pages > 1) {
    button = createButton(page, next);
  } else if (page < pages) {
    button = `
            		${createButton(page, prev)}
                ${createButton(page, next)}
      `;
  } else if (page === pages && pages > 1) {
    button = createButton(page, prev);
  }
  elements.searchResultPages.insertAdjacentHTML("afterbegin", button);
};

export const renderResults = (results, pageNumber = 1, resultsPerPage = 10) => {
  const start = (pageNumber - 1) * resultsPerPage;
  const end = pageNumber * resultsPerPage;
  results.slice(start, end).forEach(renderRecipe);

  renderButtons(pageNumber, results.length, resultsPerPage);
};
