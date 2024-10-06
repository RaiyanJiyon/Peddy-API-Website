// const loadPets = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
//     const data = await res.json();
//     const pets = data.pets;
//     displayPets(pets);
// }

// const displayPets = (pets) => {
//     pets.forEach(pet => {
//         // displayButton(pet.category);
//     });
// }

const loadButtons = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await res.json();
    const categories = data.categories;
    categories.forEach(category => {
        displayButton(category);
    });
}

const displayButton = (category) => {
    console.log(category);
    const buttonContainer = document.getElementById('button-container');
    const categoryButton = document.createElement('button');

    categoryButton.classList.add('btn', 'md:w-1/5', 'font-bold');

    const categoryIcon = document.createElement('img');
    categoryIcon.src = category.category_icon;
    categoryIcon.alt = `${category.category_icon} icon`;
    categoryIcon.style.width = '20px'
    categoryIcon.style.height = '20px'
    categoryIcon.style.marginRight = '5px'

    const buttonText = document.createTextNode(category.category);


    categoryButton.appendChild(categoryIcon);
    categoryButton.appendChild(buttonText);

    buttonContainer.append(categoryButton);
}

// loadPets();
loadButtons();