import React, {useState} from 'react';
import './style.css';


function App() {

    //Hooks
   const [item, setItem] = useState('');
   const [newItem, setNewItem] = useState([]);


    //Functions
    function addItem() {

        if(!item) {
            alert('add some...');
        }

        const itemId = {
            id: Math.floor(Math.random() *1000),
            value: item
        }
       setNewItem(oldList => [...oldList, itemId])
       setItem('');
     
    }

    function deleteItem(id) {
        const newArray = newItem.filter(item => item.id !== id);
        setNewItem(newArray);
        
    }
   


    return (
        <div className="App">

            {/* 1.header */}
            <h1>Todo list app</h1>



            {/* 2.input(input and button) */}
            <input 
                type='text'
                placeholder='Todo list'
                value={item}
                onChange={e => setItem(e.target.value)}
            />

            <button onClick={() => addItem()}>Add</button>
       



            {/* 3.list of items */}
            <ul>
                {newItem.map(itemId => {
                    return (
                        <li key={itemId.id}>{itemId.value} <button onClick={() => deleteItem(itemId.id)}>delete</button></li>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;
