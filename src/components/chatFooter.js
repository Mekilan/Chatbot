import React from 'react';


const Footer = () => {
    return (
        <div className="card-footer">
            <div className="">
                <input type="text" className="form-control type_msg" placeholder="Type your message..." />
                <div className="add-btn">
                    <span className="send_btn"><i className="fas fa-plus"></i></span>
                </div>
            </div>
        </div>
    );
}

export default Footer;