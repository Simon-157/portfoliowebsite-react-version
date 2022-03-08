import React from 'react';
import '../contact.css';
import '../App.css';
import "../Dark.css";
    

function Contact(){

  return(

        <div className="card" id="contact">
        <h2>LETS TALK</h2>
        <div className="row">
            <div className="col">
            <div className="form-group">
                <label>First Name</label>
                <input type="text"></input>
            </div>
            </div>

            <div className="col">
            <div className="form-group">
                <label>Surname</label>
                <input type="text"></input>
            </div>
            </div>

            <div className="col">
            <div className="form-group">
                <label>Email</label>
                <input type="text"></input>
            </div>
            </div>

            <div className="col">
            <div className="form-group">
                <label>Phone</label>
                <input type="text"></input>
            </div>
            </div>

            <div className="col">
            <div className="form-group">
                <label>Message</label>
                <textarea></textarea>
            </div>
            </div>

            <div className="col">
            <input cassName="btn" type="submit" value="Submit"></input>
            </div>
        </div>
        </div>
    )
}

export default Contact;