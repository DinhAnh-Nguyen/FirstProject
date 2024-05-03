
function List () {

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}]

    // fruits.sort((a, b) => a.name.localeCompare(b.name));  // ALPHABETICAL ORDER
    // fruits.sort((a, b) => b.name.localeCompare(a.name));  // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories);  // NUMERIC ORDER
    // fruits.sort((a, b) => b.calories - a.calories);  // REVERSE NUMBERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);  

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp; {/* &nbsp; indicates spacing */}
                                            <b>{fruit.calories}</b></li>);
    // map() method is used to render lists of elements dynamically.
    // For everytime fruit items in fruits, create a new list item element that has the name of the fruit.

    return (<ul>{listItems}</ul>);
}

export default List