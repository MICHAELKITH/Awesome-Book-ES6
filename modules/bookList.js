export default class BookList {
  constructor(data) {
    this.data = data;
  }

  addItem = (title, author) => {
    if (title && author) {
      const item = {
        id: Date.now(),
        title,
        author,
      };
      this.data.push(item);
      localStorage.setItem('bookData', JSON.stringify(this.data));
    }
  };

  deleteItem = (title, author) => {
    const index = this.data.findIndex((item) => item.title === title && item.author === author);
    if (index !== -1) {
      this.data.splice(index, 1);
      localStorage.setItem('bookData', JSON.stringify(this.data));
    }
  };
}
