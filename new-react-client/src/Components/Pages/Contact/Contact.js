import React from 'react';
import axios from 'axios';

export default function App(){
  
 
//   handleSubmit(e){
//     e.preventDefault();
//     axios({
//       method: "POST", 
//       url:"http://localhost:3002/send", 
//       data:  this.state
//     }).then((response)=>{
//       if (response.data.status === 'success') {
//         alert("Message Sent."); 
//         this.resetForm()
//       } else if (response.data.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }

//   resetForm(){
//     this.setState({name: ‘’, email: ‘’, message: ‘’})
//   }
  
 // onSubmit={this.handleSubmit.bind(this)}
    return(
      <div className="App">
        <form id="contact-form" method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name"  />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message"  />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
 
    }
//   onNameChange(event) {
// 	  this.setState({name: event.target.value})
//   }

//   onEmailChange(event) {
// 	  this.setState({email: event.target.value})
//   }

//   onMessageChange(event) {
// 	  this.setState({message: event.target.value})
//   }
// }

