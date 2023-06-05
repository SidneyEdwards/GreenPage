function searchBooks() {
  const searchType = document.getElementById("searchType").value;
  const searchQuery = document.getElementById("searchQuery").value;

  fetch(`/api/search?type=${searchType}&q=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      const booksContainer = document.getElementById("booksContainer");
      booksContainer.innerHTML = ""; // clear out any existing books

      data.books.forEach(book => {
        // create a div for the card
        const card = document.createElement("div");
        card.className = "card";

        // create a div for the card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        // create and append the book title
        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = book.title;
        cardBody.appendChild(title);

        // create and append the book author
        const author = document.createElement("p");
        author.className = "card-text";
        author.textContent = `Author: ${book.authors}`;
        cardBody.appendChild(author);

        // create and append the book genre
        const genre = document.createElement("p");
        genre.className = "card-text";
        genre.textContent = `Genre: ${book.genre}`;
        cardBody.appendChild(genre);

        // create and append the book description
        const description = document.createElement("p");
        description.className = "card-text";
        description.textContent = `Description: ${book.description}`;
        cardBody.appendChild(description);

        // append the card body to the card
        card.appendChild(cardBody);

        // append the card to the container
        booksContainer.appendChild(card);
      });
    });
}

document.getElementById("searchButton").addEventListener("click", searchBooks);
