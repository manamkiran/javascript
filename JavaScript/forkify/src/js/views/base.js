export const elementStrings={
    loader : "loader"
}

export const elements = {
    searchForm : document.querySelector('.search'),
    searchInput : document.querySelector('.search__field'),
    searchResultInput : document.querySelector('.results__list'),
    searchResult : document.querySelector('.results')
}

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw" />
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin',loader);
    console.log(parent);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader)
    {
        loader.parentElement.removeChild(loader);
    }
}