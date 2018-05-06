import React from "react";
import "./styles/index.css";

class EventLogList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logs: props.logs || [],
            title: props.title || "Event Log",
            clearBtnText: props.clearBtnText || "Clear",

        };

        this.clearLogs = this.clearLogs.bind(this);

    }


    clearLogs = (eveOfClearLogs) => {

        eveOfClearLogs.stopPropagation();
        eveOfClearLogs.preventDefault();

        this.setState({
            logs: [],
        });

    };


    render = () => {
        return (
            <div id="event-log-container">
                <div id="event-log-header">
                    <button id="event-log-clear-btn" onClick={this.clearLogs}>
                        {this.state.clearBtnText}
                    </button>
                    <span> {this.state.title} </span>
                    <div id="event-log-notifications" style={{backgroundColor: "#afd2c0"}}>
                        {this.state.logs.length }
                    </div>
                </div>
                <div id="event-log-content">
                    <pre id="event-log-msg-container">

                        {
                            this.state.logs.map((logText, logKey) => {

                                return (
                                    <div key={logKey} id="event-log-msg-text">{logText}
                                        < hr className="event-log-msg-separator"/>
                                    </div>)

                            })
                        }


                    </pre>
                </div>
            </div>

        );


    }

}

export {EventLogList};