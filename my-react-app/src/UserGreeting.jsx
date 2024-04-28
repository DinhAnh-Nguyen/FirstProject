import PropTypes from 'prop-types'

function UserGreeting ({isLoggedIn=false, username="Guest"}) {

    // if (isLoggedIn) {
    //     return <h2>Welcome {username}</h2>
    // }
    // else {
    //     return <h2>Please log in to continue</h2>
    // }

    // return (isLoggedIn ? <h2 className="welcome-message">Welcome {username}</h2> : 
    //                      <h2 className="login-prompt">Please log in to continue</h2>
    // );

    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return (isLoggedIn ? welcomeMessage : loginPrompt)

    
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting