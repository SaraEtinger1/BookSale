import { useSelector } from "react-redux";

const BookDetails = () => {
    let selected=useSelector(st=>st.selectedBook)
    return (<div>
        <h1>פרטי ספר</h1>
        <h4>{selected.Class}</h4>
        <h4>{selected.name}</h4>
        <h4>{selected.age}</h4> 
            </div>  );
}
 
export default BookDetails;