import { Component } from "react";

class Tools extends Component {

    render() {
        return (
            <div id="toolspage" className="page">
                <div className="page-title">
                    <span >My Tools</span>
                </div>
                This is a page for all of the tools I have made. They are free to download and use 
                for yourself. I am in the process of making a financial tracking tool and a score board tool!
                <div id="resumedownload">
                    <p>Download the MyFinancials!</p>
                    <a target="_blank" href='/me/files/MyFinancials.zip' download>Download</a>
                </div>
            </div>
        );
    }
}

export default Tools;