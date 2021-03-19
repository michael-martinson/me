import { Component } from "react";

class DropDown extends Component {

    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            display: "none",
            click_event: this.open,
        }
    }

    open() {
        console.log("open");
        this.setState({
            display: "block",
            click_event: this.close,
        });
    }

    close() {
        console.log("close");
        this.setState({
            display: "none",
            click_event: this.open,
        });
    }

    render() {
        return (
            <div className="dropdown" >
                <div className={"dropdown__title " + this.props.tclass} onClick={this.state.click_event}>
                    <div>{this.props.title}</div>
                </div>
                <div className={"dropdown__content " + this.props.cclass} style={{display: this.state.display}}>
                    <div>{this.props.content}</div>
                </div>
            </div>
        )
    }

}

export {DropDown};