import styles from './Button.module.css'

function Button () {

    // Even object = understand event info shown in console.
    // const handleClick = (e) => console.log(e);
    const handleClick = (e) => e.target.textContent = "OUCH";

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me!`)
    //     }
    // };

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    return (
        // If you add a set of parenthesis after the callback, you will invoke it right away.
        // <button className={styles.button} onClick={handleClick2("Daniel")}>Click me</button>

        // <button className={styles.button} onClick={() => handleClick2("Daniel")}>Click me</button>

        // You can also use onDoubleClick to handle a double click event.
        <button className={styles.button} onClick={(e) => handleClick(e)}>Click me</button>
    );
}

export default Button