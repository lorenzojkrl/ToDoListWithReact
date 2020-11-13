import { useState } from 'react';

function ItemsList(props) {

    const [filter, setFilter] = useState('');
    // const [done, setDone] = useState([]);
    const [stato, setStato] = useState('tutti')
    // valori per stato: completati, nonCompletati, tutti

    // Array di oggetti chiamato toDoArray e passato come list
    // [{testo: 'aa', completed: false}, {testo: 'bb', completed: false}, {testo: 'cc', completed: false}]

    function completeElement(index) {
        props.setToDoArray(
            props.list.map((oggettoToDo, idx) => {
                if (idx === index) {
                    return {
                        ...oggettoToDo,
                        completed: true
                    }
                } else {
                    return oggettoToDo;
                }
            })
        )
    }


    function uncompleteElement(elementoDaRimuovere) {

        props.setToDoArray(props.list.filter((oggettoToDo) => {
            return oggettoToDo.completed
        }))
    }


    function clearDone() {
        props.function();
    }

    const mostraCompletati = () => {
        setStato('completati')
    }

    return (
        <>
            <div className="list-container">
                <div className="filter-input">
                    <h3>Your List</h3>
                    <input type="text" placeholder="search" onChange={(e) => setFilter(e.target.value)} />
                </div>
                <div className="buttons">
                    <div className="form-button">
                        <button onClick={clearDone}>Reset</button>
                    </div>
                    <div className="form-button">
                        <button onClick={mostraCompletati}>Solo completati</button>
                    </div>
                    <div className="form-button">
                        <button onClick={() => setStato('nonCompletati')}>Solo non completati</button>
                    </div>
                    <div className="form-button">
                        <button onClick={() => setStato('tutti')}>Tutti</button>
                    </div>
                </div>
                <ul className="items-list">
                    {props.list
                        .filter((item, index) => {
                            if (stato === 'tutti') {
                                return true
                            }
                            if (stato === 'completati') {
                                return (item.completed)
                            }
                            return (!item.completed)
                        })
                        .filter((item) => {
                            if (filter !== '') {
                                return item.testo.includes(filter)
                            } else {
                                return true;
                            };
                        })
                        .map((item, index) => {
                            if (item.completed) {
                                return <li onClick={() => uncompleteElement(index)} className="terminato" key={index}>{item.testo}</li>
                            }
                            return <li onClick={() => completeElement(index)} key={index}>{item.testo}</li>
                        })}
                </ul>
            </div>
        </>
    )
}

export default ItemsList;