// View more button to pet cards section scroll
const viewMoreBtn = document.getElementById('view-more-btn');
const petCardsSection = document.getElementById('pet-cards-section');

viewMoreBtn.addEventListener('click', () => {
    petCardsSection.scrollIntoView({ behavior: 'smooth' });
})