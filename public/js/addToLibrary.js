document.querySelectorAll('.add-to-library').forEach((button) => {
  button.addEventListener('click', async function (e) {  // pass the event object to function
    const bookId = this.getAttribute('data-book-id');

    try {
      const response = await fetch(`/api/users/library/${bookId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw await response.json();
      }
      
      const responseData = await response.json();
      if (responseData.success) {
        document.getElementById(`book-${bookId}`).remove();
      } else {
        console.error('Error adding book to library:', responseData.error);
      }
      e.target.closest('.col').remove();  
    } catch (error) {
      console.error(error);
    }
  });
});


document.querySelectorAll('.add-to-library').forEach((button) => {
  button.addEventListener('click', async function () {
    const bookId = this.getAttribute('data-book-id');

    try {
      const response = await fetch(`/api/users/library/${bookId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw await response.json();
      }
      
      const responseData = await response.json();
      if (responseData.success) {
        document.getElementById(`book-${bookId}`).remove();
      } else {
        console.error('Error adding book to library:', responseData.error);
      }
      e.target.closest('.col').remove(); 
    } catch (error) {
      console.error(error);
    }
  });
});

document.querySelector("#searchForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var searchInput = document.querySelector("#searchInput").value;


  fetch(`/api/search?q=${searchInput}`)

    .then(response => response.json())
    .then(data => {
      console.log(data);
      

      if (data.items && data.items.length > 0) {
        var book = data.items[0].volumeInfo; 

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

