export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}
export const deleteBook = (bookId) => {
    return {
        type: "DELETE_BOOK",
        payload: bookId
    }
}
export const selectedBook = (book) => {
    return {
        type: "SELECT_BOOK",
        payload: book
    }
}
export const selectedBookForEdit = (book) => {
    return {
        type: "SELECT_BOOK_FOR_EDIT",
        payload: book
    }
}
export const saveChange = (book) => {
    return {
        type: "SAVE_CHANGE",
        payload: book
    }
}
