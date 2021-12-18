const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1Ny5dTUgE3yhLHxRP9dM/books';

export const newBook = async (book) => {
  const newBook = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    }),
  });
  return newBook.status === 201;
};

export const deleteBook = async (bookId) => {
  const result = await fetch(`${url}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
    }),
  });
  return result === 'The Book Deleted';
};

export const getBooks = async () => {
  const req = await fetch(url);
  const books = await req.json();
  return books;
};

export default { newBook, deleteBook, getBooks };
