// Write Pagination object that will get an array and pageSize, then will return the following.

const Pagination = {
  init: function (array, size) {
    this.array = array;
    this.size = size;
    this.currentPage = 1;
    return this;
  },
  prevPage: function () {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    return this;
  },
  nextPage: function () {
    if (this.currentPage < this.lastPage()) {
      this.currentPage++;
    }
    return this;
  },
  firstPage: function () {
    this.currentPage = 1;
    return this;
  },
  lastPage: function () {
    return Math.ceil(this.array.length / this.size);
  },
  goToPage: function (page) {
    if (page >= 1 && page <= this.lastPage()) {
      this.currentPage = page;
    }
    return this;
  },
  getPageItems: function () {
    const start = (this.currentPage - 1) * this.size;
    const end = Math.min(start + this.size, this.array.length);
    return this.array.slice(start, end);
  }
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

Pagination.init(alphabetArray, 4);

console.log(Pagination.getPageItems());

Pagination.nextPage();
console.log(Pagination.getPageItems());

Pagination.nextPage().nextPage();
console.log(Pagination.getPageItems());

Pagination.goToPage(3);
console.log(Pagination.getPageItems());
