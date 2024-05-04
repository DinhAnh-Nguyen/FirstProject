import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import MyComponent from './MyComponent.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import ColorPicker from './ColorPicker.jsx'

function App() {

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

    const vegetables = [{id: 6, name: "potatoes", calories: 110},
                        {id: 7, name: "celery", calories: 15},
                        {id: 8, name: "carrots", calories: 25},
                        {id: 9, name: "corn", calories: 63},
                        {id: 10, name: "broccoli", calories: 50}];
    return (
        <>
            <Header></Header>
            <Card></Card>

            {/* This is known as short circuiting */}
            {/* If the condition includes &&, we dont have to use : null */}
            {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
            {vegetables.length > 0 && <List items={vegetables} category="Vegetables"></List>}
            
            <Student name="Daniel" age={19} isStudent={true}></Student>
            <Student name="Nathan" age={18} isStudent={true}></Student>
            <Student name="Mark" age={18} isStudent={true}></Student>
            <Student name="Mr. Thi" age={54} isStudent={false}></Student>
            <Student></Student>
            <Food></Food>
            <Button></Button>
            <ProfilePicture></ProfilePicture>
            <MyComponent></MyComponent>
            <ColorPicker></ColorPicker>
            <Footer></Footer>
        </>
    );
}

export default App

// New Lesson:
// 1. props = read-only properties that are shared between components.
//            A parent component can send data to a child components.
//            <Component key=value />

// 2. propTypes = a mechanism that ensures that the passed value is of the correct datatype
//                age: PropTypes.number

// 3. defaultProps = default values for props in case they are not passed from the parent component
//                   name: "Guest"
//                   will soon be obsolete, therefore use JavaScript parameters instead
//                   example: function Student({ name = 'John Doe', age = 20 }) {
//                              Some component code
//                            }

// 4. conditional rendering = allows you to control what gets rendered in your application
//                            based on certain conditions (show, hide, or change components)

// 5. Click Event = An interaction when a user clicks on a specific element .
//                  We can respond to clicks by passing a callback to the onClick event handler.

// 6. React Hook = special function that allows functional components to use React features without
//                 class components (useState, useEffect, useContext, useCallBack, and more).

//    useState() = a React hook that allows the creation of a stateful variable
//                 AND a setter function to update its value in the VIRTUAL DOM.
//                 [name, setName]



