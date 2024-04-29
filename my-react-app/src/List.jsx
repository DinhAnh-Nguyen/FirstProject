
function List () {

    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]

    fruits.sort();

    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    // map() method is used to render lists of elements dynamically.
    // For everytime fruit items in fruits, create a new list item element that has the name of the fruit.

    return (<ul>{listItems}</ul>);
}

export default List