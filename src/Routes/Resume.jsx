import { Component } from "react";

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
                        <li><a target="_blank" href="files/Resume.pdf" download>Download my Resume (it is still a work in progress)</a></li>
                        <li><a target="_blank" href="files/resume.html" download>Download the html file for my Resume</a></li>
                        <li><a target="_blank" href="files/resume.css" download>Download the css (style sheet) file for my Resume</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Resume;