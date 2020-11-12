import { useState } from 'react';
import './../index.css'

function Form(props) {

    const [textInput, setTextInput] =  useState('');
    
    const formSubmit = (e)=>{
        {/*
        !!! PUNTO C !!!
        1-form submit accede alla property funct del componente
          essendo essa una funzione  che ci servira a salvare il testo nella lista 
          gli passiamo l'evento e il testo dell input
        2-successivamente setta nuovamente il valore di textInput a stringa vuota
        prosegue in App. js a riga
        */}
        props.funct(e, textInput)
        setTextInput('')
    }

    return (
        /*
        !!! PUNTO B !!!
        1- il submit del form invoca una funzione con parametro l'evento stesso
        2- questa funzione invoca a sua volta formSubmit passandogli come parametro l'evento
        ....prosegue a riga 10
        */
        <form class="form-component" onSubmit={(e) => formSubmit(e)}>
        <div class="form-header">
            <h1>To-Do List</h1>
        </div>
            <div class="text-input">
                {/* 
                !!! PUNTO A -- START HERE -- !!!
                1-text input ha inizialmente il valore di textInput(stringa vuota) da riga 6
                2-all evento onChange (quando scriviamo in input)invoca una funzione con parametro lo stesso evento
                3-la funz. del punto 2 invoca setTextInput che assegna alla variabile textInput di riga 6
                  la value del target dell'event(la stringa inserita in input)
                */}
                <input type="text" placeholder="Write something..." 
                onChange={(e) => setTextInput(e.target.value)} value={textInput}/>
            </div>
            <div className="form-button">
                <button type="submit">Submit</button>
            </div>
            

        </form>
    )
}

export default Form