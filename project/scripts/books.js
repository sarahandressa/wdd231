async function getBooksData() {
    try {
        const response = await fetch('./data/books.json');
        if (response.ok) {
            const data = await response.json();
            console.log(`Data loaded`, data); // Debugging in console
            displayBooks(data.books);
        } else {
            console.error(`Failed data fetch:`, response.status); // Debug
        }
    } catch (error) {
        console.error(`Load error:`, error); // Debug
    }
}

function displayBooks(books) {
    const grid = document.querySelector('.books-grid');
    grid.innerHTML = ''; // Clear existing content

    books.forEach((book) => {
        const card = document.createElement('div');
        card.className = 'books-card';
        card.innerHTML = `
            <h2>${book.name}</h2>
            <figure>
                <img src="${book.image}" 
                     alt="${book.imageAlt}" 
                     width="300" 
                     height="200" 
                     loading="lazy">
            </figure>
            <title>${book.address}</title>
            <p>${book.description}</p>
            <button>Learn More</button>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', getBooksData);