import React from 'react';
import { useState, useEffect } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
                <div className="back-i"><i className="fas fa-chevron-left"></i></div>
                <div className="img_cont">
                    <img src="https://reqres.in/img/faces/10-image.jpg" className="rounded-circle user_img" />
                </div>
                <div className="user_info">
                    <span>Justin</span>
                    <p>Active Now</p>
                </div>
            </div>
            <span id="action_menu_btn" onClick={(e) => { e.stopPropagation(); setToggle(true); }} > <i className="fas fa-ellipsis-h"></i></span>

            <div className="action_menu" style={{ display: toggle === false ? 'none' : 'block' }}>
                <ul>
                    <li><i className="fas fa-user-circle"></i> View profile</li>
                    <li><i className="fas fa-users"></i> Add to close friends</li>
                    <li><i className="fas fa-plus"></i> Add to group</li>
                    <li><i className="fas fa-ban"></i> Block</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;