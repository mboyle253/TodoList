import React, {useState} from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

function TodoList(props) {
    const [items, setItems] = useState([]);
    let _inputElement = React.createRef();

    const addItem = (e) => {
        e.preventDefault();
        let _items = items;

        if (_inputElement.current.value != ""){
            setItems([...items, {
                text : _inputElement.current.value,
                key : Date.now()
            }])
        }

        _inputElement.current.value = "";
    };

    const deleteItem = (key) =>{
        var filteredItems = items.filter(function(item){
            return (item.key != key);
        });

        setItems(filteredItems);
    };

    return <div className="todoListMain">
        <div className="header">
            <form onSubmit={addItem}>
                <input ref={_inputElement}
                       placeholder="enter task"></input>
                <button type="submit">add</button>
            </form>
        </div>
        <TodoItems entries={items}
                   delete={deleteItem}></TodoItems>
    </div>;
}

export default TodoList;
