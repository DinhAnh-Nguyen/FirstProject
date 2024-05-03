import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
<<<<<<< HEAD
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import MyComponent from './MyComponent.jsx'
=======
>>>>>>> parent of 51ec1ae (Conditional Rendering)

function App() {

    return (
        <>
            <Header></Header>
            <Card></Card>
            <List></List>
            <Student name="Daniel" age={19} isStudent={true}></Student>
            <Student name="Nathan" age={18} isStudent={true}></Student>
            <Student name="Mark" age={18} isStudent={true}></Student>
            <Student name="Mr. Thi" age={54} isStudent={false}></Student>
            <Student></Student>
            <Food></Food>
            <Button></Button>
<<<<<<< HEAD
            <UserGreeting isLoggedIn={true} username="Daniel"></UserGreeting>
            <UserGreeting></UserGreeting>
            <MyComponent></MyComponent>
=======
>>>>>>> parent of 51ec1ae (Conditional Rendering)
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
<<<<<<< HEAD

// 4. conditional rendering = allows you to control what gets rendered in your application
//                            based on certain conditions (show, hide, or change components)

// 5. React Hook = special function that allows functional components to use React features without
//                 class components (useState, useEffect, useContext, useCallBack, and more).

//    useState() = a React hook that allows the creation of a stateful variable
//                 AND a setter function to update its value in the VIRTUAL DOM.
//                 [name, setName]
=======
>>>>>>> parent of 51ec1ae (Conditional Rendering)
