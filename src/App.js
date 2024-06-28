import './App.css';
import { useSelector } from 'react-redux';
import  List  from './compnents/List';
import  BookDetails  from './compnents/BookDetails';
import  Edit  from './compnents/Edit';

function App() {
  let selected = useSelector(st => st.selectedBook)
  let selectedBookForEdit = useSelector(st => st.selectedBookForEdit)

  return (
  <div className='App'>    
    <List />
    {selected && <BookDetails />}
    {selectedBookForEdit && <Edit />}
  </div>


  );
}

export default App;
