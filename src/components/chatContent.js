import React, { Component } from 'react';

class Content extends Component {

    messageList() {
        return this.props.messagedata.map((data) => {
            return (
                data.type === "income" ?
                    <React.Fragment key={data.messageId}>
                        <div className="d-flex justify-content-start mb-4">
                            <div className="msg_cotainer">
                                {data.message}
                                <span className="msg_time">8:40 AM, Today</span>
                            </div>
                        </div> </React.Fragment> : <React.Fragment key={data.messageId}>
                        <div className="d-flex justify-content-end mb-4">
                            <div className="msg_cotainer_send">
                                {data.message}
                                <span className="msg_time_send">8:55 AM, Today</span>
                            </div>
                        </div>
                    </React.Fragment>
            );
        });
    }
    render() {
        return (
            <div className="card-body msg_card_body">
                {this.messageList()}
            </div>
        );
    }
}

export default Content;