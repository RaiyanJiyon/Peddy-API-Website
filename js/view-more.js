// View more button to pet cards section scroll
const viewMoreBtn = document.getElementById('view-more-btn');
const mainContainer = document.getElementById('main-container');

viewMoreBtn.addEventListener('click', () => {
    mainContainer.scrollIntoView({ behavior: 'smooth' });
})