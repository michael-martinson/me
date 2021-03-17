import { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
       return (
            <div id="homepage">
                <div  className="page-title">
                    <span id="home-title" >Michael Martinson's Personal Website</span>
                </div>
                <p id="home-intro-text">
                    Welcome! My name is Michael Martinson and this is my personal website. This is where you 
                    can learn more about who I am, see things I create, and see what I am working on. 
                    It serves as an extended resume and a way for me to improve my coding skills and experiment with
                    new ideas. I will continue to add more to this website as I go and update my information. If you have any
                    questions, find any bugs, or want to contact me for any other reason you can send me an email
                    at <a href="mailto:michaelmartinson23@gmail.com">michaelmartinson23@gmail.com</a>.
                    Hope you are having a great day and I hope you like my personal website.
                </p>
            </div>
        );
    }
}

export default Home;