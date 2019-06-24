import React, {useEffect} from 'react';
import FlipMove from 'react-flip-move';

function TodoItems(props){

    const createTasks = (item) => {
        return <li onClick={() => props.delete(item.key)} key={item.key}>{item.text}</li>
    }

    let todoEntries = props.entries;
    let listItems = todoEntries.map(createTasks);

    return (
        <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
                {listItems}
            </FlipMove>
        </ul>
    )
}

export default TodoItems;