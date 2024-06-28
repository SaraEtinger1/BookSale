let booksState = {
    arr: [
        { id: 1, name: "חרב מרגליות", price: 55 ,img:"https://publicdomainvectors.org/tn_img/owl-books.webp",author:"יוסי כהן"},
        { id: 2, name: " מרגל להשכרה", price: 105,img:"https://publicdomainvectors.org/tn_img/StackOfBooks.webp",author:"יונה ספיר" },
        { id: 3, name: "דופליקטים ", price: 89 ,img:"https://publicdomainvectors.org/tn_img/bts9.webp",author:"יונה ספיר"},
        { id: 4, name: "פצצה מתקתקת ", price: 17,img:"https://publicdomainvectors.org/tn_img/bookworm_penguin.webp",author:"פיטר" }

    ],
    selectedBook: null,
    selectedBookForEdit: null
}
export const bookReducer = (state = booksState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: [...state.arr, action.book]
            }
        case "SELECT_BOOK":
            return {
                selectedBook: action.payload,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: state.arr
            }
        case "SELECT_BOOK_FOR_EDIT":
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: action.payload,
                arr: state.arr
            }
        case "DELETE_BOOK":
            return {
                selectedBook: !state.selectedBook || state.selectedBook.id === action.payload ? null : state.selectedBook,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: state.arr.filter(item => item.id !== action.payload)
            }
        case "SAVE_CHANGE":
            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload
            })
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: copy
            }
        default: return state;
    }
}