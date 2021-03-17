import { Component } from "react";
import { Link } from "react-router-dom";

class Resume extends Component {

    render() {
        return (
            <div id="resumepage">
                <div className="page-title">
                    <span >Resume</span>
                </div>
                <div>
                    <p>I made my Resume using html and css! Download the pdf below or the source files to see how I did it!</p>
                    <ul>
                        {console.log(process.env.PUBLIC_URL)}
                        <li><a target="_blank" href='/me/files/Resume.pdf' download>Download my Resume (it is still a work in progress)</a></li>
                        <li><a target="_blank" href='/me/files/resume.html' download>Download the html file for my Resume</a></li>
                        <li><a target="_blank" href='/me/files/resume.css' download>Download the css (style sheet) file for my Resume</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Resume;