

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
            <h2 class="book-name">${book.name}</h2>
            <figure>
                <img src="${book.image}" 
                     alt="${book.imageAlt}" 
                     width="300" 
                     height="200" 
                     loading="lazy">
            </figure>
            <p class="book-title"><em>${book.title}</em></p>
            <p class="book-summary">${book.summary}</p>
            <div class="rating">${generateStars(book.rating)}</div>
            <a href="${book.site}" target="_blank" class="buy-button">Buy it here</a>
        `;
        grid.appendChild(card);
    });

}

function generateStars(rating) {
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
        starsHTML += i <= rating 
            ? `<span class="star filled">★</span>`
            : `<span class="star">☆</span>`; 
    }
    return starsHTML;
}

document.addEventListener('DOMContentLoaded', getBooksData);