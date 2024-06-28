import {useDispatch} from "react-redux"
import { addBook, deleteBook, selectedBook, selectedBookForEdit } from "../store/actions/book";

const ListItem = ({one}) => {

    let dispach = useDispatch();
    return ( <div>
        <h1>{one.name}</h1>
        <input type="button" onClick={()=>{dispach(selectedBook(one))}}value="הצגת פרטי הספר"/>
        <input type="button" onClick={()=>{dispach(deleteBook(one.id))}}value="  מחיקה"/>
        <input type="button" onClick={()=>{dispach(selectedBookForEdit(one))}}value="עריכה"/>
        <input type="button" onClick={()=>{dispach(addBook(one))}}value="הוספה"/>


    </div> );
}

export default ListItem;