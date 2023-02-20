// Refactored code:
import NewBook from './modules/bookList.js';
import handleDisplay from './modules/newDisplay.js';
import showBooks from './modules/displayBooks.js';
import { DateTime } from './modules/Luxon.js';

// DOM elements
const btn = document.querySelector('#btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const book = document.querySelector('#content');
const myDate = document.querySelector('.date');
const li = document.querySelectorAll('.nav-links a');
const newForm = document.getElementById('newform');
const contact = document.getElementById('contact');

// Data
const data = JSON.parse(localStorage.getItem('bookData')) || [];

// Instance of NewBook class
const myMethod = new NewBook(data);

// Function to remove active class from nav-links
const removeActive = () => {
  li.forEach((item) => {
    item.classList.remove('active');
    newForm.style.display = 'none';
    contact.style.display = 'none';
    book.style.display = 'none';
  });
};

// Event listener for nav-links
li.forEach((item) => {
  item.addEventListener('click', (e) => {
    removeActive();
    e.target.classList.toggle('active');
    handleDisplay(e.target);
  });
});

// Add current date
const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
myDate.innerText = now;

// Event listener for adding new book item
btn.addEventListener('click', (e) => {
  e.preventDefault();
  myMethod.addItem(title.value, author.value);
  removeActive();
  li[0].classList.toggle('active');
  handleDisplay(li[0]);
  showBooks(myMethod, book, data);
});

// Display all book items
showBooks(myMethod, book, data);