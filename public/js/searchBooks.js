function searchBooks() {
  const searchType = document.getElementById('searchType').value;
  const searchInput = document.getElementById('searchInput').value;

    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault();
      searchBooks();
    });

  fetch(`/api/search?type=${searchType}&q=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      const booksContainer = document.getElementById('booksContainer');
      booksContainer.innerHTML = '';

      data.books.forEach((book) => {
        const card = document.createElement('div');
        card.className = 'card bg-light mb-3';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.style.maxWidth = '100px'; 
        image.style.maxHeight = '200px'; 
        if (book.image) {
          
          image.src = book.image; 
        }
        cardBody.appendChild(image);

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = book.title;
        cardBody.appendChild(title);

        const author = document.createElement('p');
        author.className = 'card-text';
        author.textContent = `Author: ${book.authors}`;
        cardBody.appendChild(author);

        const genre = document.createElement('p');
        genre.className = 'card-text';
        genre.textContent = `Genre: ${book.genre}`;
        cardBody.appendChild(genre);

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = `Description: ${book.description}`;
        cardBody.appendChild(description);

        const addToLibraryButton = document.createElement('button');
        addToLibraryButton.className = 'btn btn-primary'; 
        addToLibraryButton.textContent = 'Add to Library';
        addToLibraryButton.addEventListener('click', () => {
          const bookToSave = {
            title: title.textContent,
            authors: author.textContent.replace('Author: ', ''),
            genre: genre.textContent.replace('Genre: ', ''),
            description: description.textContent.replace('Description: ', ''),
          };
          addBookToLibrary(bookToSave);
        });
        cardBody.appendChild(addToLibraryButton);

        card.appendChild(cardBody);

        booksContainer.appendChild(card);
      });
    });
}

function addBookToLibrary(book) {
  fetch('/api/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }

      return response.json();
    })
    .then((data) => {
      location.reload()
    })
    .catch((error) => {
      console.error('Error:', error);
      // alert('Failed to add book to library');
    });
}

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  searchBooks();
});
