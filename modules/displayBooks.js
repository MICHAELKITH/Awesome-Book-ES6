const displayBook = (myMethod, book, data) => {
  if (book.hasChildNodes()) {
    book.innerHTML = '';
  }
  const sect = document.createElement('section');
  sect.classList.add('books_container');

  const h1 = document.createElement('h1');
  h1.textContent = 'All Awesome Books';
  h1.classList.add('books_header');

  if (data.length > 0) {
    book.appendChild(h1);
  }

  data.forEach((list) => {
    const div = document.createElement('div');
    div.classList.add('book_item');
    const h2 = document.createElement('h1');
    h2.classList.add('book_description');
    h2.textContent = `${list.title.charAt(0).toUpperCase()}${list.title.slice(1)} by ${list.author.charAt(0).toUpperCase()}${list.author.slice(1)}`;

    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.classList.add('book_button');
    button.addEventListener('click', () => {
      myMethod.deleteItem(list.title, list.author);
      displayBook(myMethod, book, data);
    });

    div.appendChild(h2);
    div.appendChild(button);
    sect.appendChild(div);
  });

  book.appendChild(sect);
};

export default displayBook;
