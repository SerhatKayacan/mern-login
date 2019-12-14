import React, { Component } from "react";
import axios from "axios";

class User extends Component{
  state={
    hobbies:this.props.hobbies
  }
  saveChanges=()=>{
    axios.post("http://localhost:5000/update", { id:this.props.id, hobbies:this.state.hobbies }).then(res=>{console.log(res)});
  }
    render(){
        return(
            <div>
                kullanıcı adı:{this.props.username} <br></br>     
                telefon:{this.props.telefon} <br></br>
                eposta:{this.props.eposta}<br></br>
                vergi dairesi:{this.props.vergiDairesi} <br></br>
                vergi no:{this.props.vergiNo} <br></br>
                adres:{this.props.adres} <br></br>               
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                 edit
                </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                      <div class="modal-body">
      
                        hobbies:<input onChange={e=>this.setState({hobbies:e.target.value})}></input>
                          </div>
          <div class="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button onClick={this.saveChanges} type="button" data-dismiss="modal" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>     
            </div>
        )
    }
}

export default User;