
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';

/* import 'bootstrap/dist/css/bootstrap.min.css';*/
import './index.css'


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemListContainer/>}/>
        <Route path='*' element={<h1> 404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      */}
     <NavBar />
     <ItemListContainer greeting={'PRODUCTOS'} />
     <ItemDetailContainer />
    </div>
  );
}

export default App;
