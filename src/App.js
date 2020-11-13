import { useState, useEffect } from 'react';
import Form from './components/Form'
import ItemsList from './components/ItemsList'

function App() {



  //STATO dell'array Testi che contiene l'insieme dei diversi input
  let initialValue = JSON.parse(localStorage.getItem('savedToDos')) || [];

  const [toDoArray, setToDoArray] = useState(initialValue);

  function handleFormSubmit(event, oggettoToDo) {
    /*
    !!! PUNTO E !!!
    1-preveniamo il comportamento di default del componente form
      perche non vogliamo il refresh della pagina
    2-aggiungiamo il oggettoToDo dell input alla lista di input gia inseriti
    */
    event.preventDefault();
    setToDoArray([...toDoArray, oggettoToDo]);
  }

  useEffect(() => {
    localStorage.setItem('savedToDos', JSON.stringify(toDoArray));
  });

  function clearList() {
    localStorage.removeItem('savedToDos')
    setToDoArray([])
  }

  return (
    <div>
      {/*
      !!! PUNTO D -- CONTINUES FROM Form.js -- !!!
      1-la prop funct e quindi la funzione handleFormSubmit definita a riga 11
      */}
      <Form funct={handleFormSubmit} />

      {/*
      !!! PUNTO F --CONTINUES IN ItemsList.js-- !!!
       componente che renderizza la lista 
       gli viene passata la props list che contiene l'array con i valori inseriti
      */}
      <ItemsList list={toDoArray} function={clearList} />
    </div>
  );
}

export default App;
