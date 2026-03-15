// C16 - Class Definitions Runtime Pipeline
// Class declaration belum bisa dipakai sebelum evaluasinya selesai.

try {
  console.log(Book);
} catch (error) {
  console.log('before declaration =>', error.name, '->', error.message);
}

class Book {
  constructor(title) {
    this.title = title;
  }
}

const book = new Book('JavaScript Learning Hub');
console.log('after declaration =>', book.title);
