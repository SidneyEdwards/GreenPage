document.querySelectorAll('.return-book').forEach((button) => {
  button.addEventListener('click', (e) => {
    const bookId = e.target.getAttribute('data-book-id');

    fetch(`/api/users/library/${bookId}/return`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        e.target.closest('.card').remove(); 
      })
      .catch((error) => console.error('Error:', error));
  });
});
