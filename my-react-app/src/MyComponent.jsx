// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(y => y + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and synchronous functions
//                    Good practice to use updater functions

// React uses the CURRENT state to calculate the NEXT state.
// Set functions do not trigger an update.
// React batches together state updates for performance reasons.
// NEXT state becomes the CURRENT state after an update.

// Updater functions take the PENDING state to calculate NEXT state
// React puts your updater function in a queue (waiting in line)
// During the next render, it will call them in the same order.
// By convention, name the PENDING state argument for the first letter of the state variable name, like a for
// age. However, you may also call it like prevAge or something else that you find clearer.

import React, {useState} from 'react';

function MyComponent () {

    // const [name, setName] = useState("Guest"); // Placeholder
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);

    // const updateName = () => {
    //     setName("SpongeBob")
    // }

    // const incrementAge = () => {
    //     setAge(age + 1);
    // }

    // const toggleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed);
    // }

    // return (
    //     <div>
    //         <p>Name: {name}</p>
    //         <button onClick={updateName}>Set Name</button>

    //         <p>Age: {age}</p>
    //         <button onClick={incrementAge}>Increment Age</button>

    //         <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
    //         <button onClick={toggleEmployedStatus}>Toggle Status</button>
    //     </div>
    // );

    // const [name, setName] = useState("Guest");
    // const [quantity, setQuantity] = useState(1);
    // const [comment, setComment] = useState("");
    // const [payment, setPayment] = useState("");
    // const [shipping, setShipping] = useState("");

    // function handleNameChange(event) {
    //     setName(event.target.value);
    // }

    // function handleQuantityChange(event) {
    //     setQuantity(event.target.value);
    // }

    // function handleCommentChange(event) {
    //     setComment(event.target.value);
    // }

    // function handlePaymentChange(event) {
    //     setPayment(event.target.value);
    // }

    // function handleShippingChange(event) {
    //     setShipping(event.target.value);
    // }

    // return (
    //     <div>
    //         <input value={name} onChange={handleNameChange}></input>
    //         <p>Name: {name}</p>

    //         <input value={quantity} onChange={handleQuantityChange} type='number'></input>
    //         <p>Quantity: {quantity}</p>

    //         <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
    //         <p>Comment: {comment}</p>

    //         <select value={payment} onChange={handlePaymentChange}>
    //             <option value="">Select an option</option>
    //             <option value="Visa">Visa</option>
    //             <option value="Mastercard">Mastercard</option>
    //             <option value="Giftcard">Giftcard</option>
    //         </select>
    //         <p>Payment: {payment}</p>

    //         <label>
    //             <input value="Pick Up" type='radio' checked={shipping === "Pick Up"} onChange={handleShippingChange}></input>
    //             Pick Up
    //         </label><br></br>
    //         <label>
    //         <input value="Delivery" type='radio' checked={shipping === "Delivery"} onChange={handleShippingChange}></input>
    //             Delivery
    //         </label>
    //         <p>Shipping: {shipping}</p>
    //     </div>
    // );

    // const [count, setCount] = useState(0);

    // function increment() {
    //     setCount(c => c + 1);
    //     setCount(c => c + 1);
    //     setCount(c => c + 1);
    // }

    // function decrement() {
    //     setCount(c => c - 1);
    //     setCount(c => c - 1);
    //     setCount(c => c - 1);
    // }

    // function reset () {
    //     setCount(c => c = 0);
    // }

    // return (
    //     <div>
    //         <p>Count: {count}</p>
    //         <button onClick={decrement}>Decrement</button>
    //         <button onClick={reset}>Reset</button>
    //         <button onClick={increment}>Increment</button>
    //     </div>
    // );

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood () {

        // After entering a value, that value will be assigned to newFood.
        // Then, the value in the input field will reset itself.
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value= "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood (index) {
        
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"></input>
            <button onClick={handleAddFood}>Add Food</button>
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    )
}

export default MyComponent