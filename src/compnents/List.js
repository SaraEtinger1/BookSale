import ListItem from './ListItem';
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { getAllBookFromServer } from "../BookApi";

const List = () => {
    let dispach = useDispatch();
    let [arr, setArr] = useState([]);
    useEffect(() => {
        getAllBookFromServer().then(res => {
            console.log(res)
            setArr(res.data)
        }).catch(err => {
            console.log(err)
            alert("לא מצליח להביא פרטים מהשרת")
        })
    })
    return (<>
        <h2>ספרים במבצע</h2>
        <ul>
            {arr.map(item => <li key={item._id}><ListItem one={item} /></li>)}
        </ul>
    </>);
}

export default List;