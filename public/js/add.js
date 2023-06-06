document.querySelector("#searchForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const searchInput = document.querySelector("#searchInput").value;


  fetch(`/api/search?q=${searchInput}`)

    .then(response => response.json())
    .then(data => {
      console.log('this is the data one: ' + data.items);
      

      if (data.items && data.items.length > 0) {
        const book = data.items[0].volumeInfo;
        console.log('this is the book one: ' + data);

        $.ajax({
          method: "POST",
          url: "/api/book",
          data: {
            title: book.title,
            author: book.authors ? book.authors.join(", ") : "", 
            description: book.description,
            genre: book.categories ? book.categories.join(", ") : "", 
            available: true,
            image: book.imageLinks ? book.imageLinks.thumbnail : "", 
            bookId: book.industryIdentifiers[0].identifier, 
          }
        }).done(function() {
          console.log("Book added to database!");
        });
      }
    });
});
