import profilePic from './assets/SAIT-7051.jpg'
function Card () {

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Daniel Nguyen</h2>
            <p className="card-text">This is my project for learning Reactjs</p>
        </div>
    );
}

export default Card