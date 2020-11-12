import { useState } from 'react';

function ItemsList(props) {

    const [filter, setFilter] = useState('');
    const [done, setDone] = useState([]);

    function completeElement(index){
        setDone([...done, index]);
    }
    /*
    let array = [1,2,3,4,5];
    let result = array.indexOf(3)
    result = 2

    let result2 = array.indexOf(30)
    result2  = -1

    array.splice(2, 1)

    */
    function uncompleteElement(elementoDaRimuovere){

        setDone(
            done.filter((todo) => {
                if (todo === elementoDaRimuovere) {
                    return false;
                }
                return true;
            })
        );

        /*
            let array = done;
            let result = done.indexOf(elementoDaRimuovere);
            if(result !== -1) {
                array.splice(result, 1)
                console.log(array);
                setDone(array)
            }
        */
    }
    /*
    lista_iniziale = ["uno"]
    map = [<li>uno</li>]
    filter -> <li>uno</li> === "uno"

    lista_iniziale = ["uno"]
    filter -> "uno" === "uno"
    lista_filtrata = ["uno"]
    map = [<li>uno</li>
    */

    function clearDone() {
        setDone([]);
        props.function();
    }

    return (
        <>
            <div className="list-container">
                <div className="filter-input">
                <h3>Your List</h3>
                    <input type="text" placeholder="search" onChange={(e) => setFilter(e.target.value)} />
                </div>
                <div className="form-button">
                    <button onClick={clearDone}>Reset</button>
                </div>
                <ul className="items-list">
                    {props.list.filter((item) => {
                        if (filter !== '') {
                            return item.includes(filter)
                        } else {
                            return true;
                        };
                    }).map((item, index) => {
                        if (done.includes(index)){
                            return <li onClick={() => uncompleteElement(index)} className="terminato" key={index}>{item}</li>
                        }
                        return <li onClick={() => completeElement(index)} key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default ItemsList;