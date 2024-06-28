import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../store/actions/book";

const AddBook = () => {
    let selected = useSelector(st => st.selectedBookForEdit);
    let myDisp = useDispatch();
    useEffect(() => {
        setData({ ...selected })
    }, [selected])

    let [data, setData] = useState({ ...selected });
    
    const change = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const save = (e) => {
        e.preventDefault();
        console.log(data);
        myDisp(addBook(data))
    }
    return (
        <form onSubmit={save}>

            <label>שם</label>
            <input type="text" value={data.name} name="name" onChange={change} />

            <label>מחיר</label>
            <input type="text" value={data.price} name="price" onChange={change} />

            <input type="submit" />

        </form>);
}

export default AddBook;