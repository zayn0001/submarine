import React from "react";
import logo from './Navbar/Placeholder.png'
import { A } from "hookrouter";

function Profile() {
    return (
        <div className="profile">
          <div className="leftpart">
            <div className="imageholder rounded-circle"><img src={logo} className="rounded-circle proimage"/></div>
            <div className="titletext">person name</div>
          </div>
          <div className="rightpart">

            <div className="section info">
              <div className="section-title">Information</div>
              <div className="item name">
                <div className="label">First Name</div>
                <div className="textstuff">Mishal</div>
              </div>
              <div className="item">
                <div className="label">Last Name</div>
                <div className="textstuff">Faisal</div>
              </div>
              <div className="item">
                <div className="label">Mail</div>
                <div className="textstuff">johndoe@gmail.com</div>
              </div>
              <div className="item">
                <div className="label">Designation</div>
                <div className="textstuff">Professor</div>
              </div>
            </div>

            <div className="section settings">
              <div className="section-title">Settings</div>
              <div className="item">
                <A href="/changepass" className="label click">Reset Password</A>
              </div>
            </div>

          </div>
        </div>
    );
  }

  
export default Profile;