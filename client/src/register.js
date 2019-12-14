import React, { Component } from "react";
import axios from "axios";

class Register extends Component{
  state={
    username:null,
    password:null,
    telefon:null,
    eposta:null,
    vergiDairesi:null,
    vergiNo:null,
    adres:null
  }
  registerUser=()=>{
    axios.post("http://localhost:5000/save", 
    {username: this.state.username,
    password: this.state.password,
    telefon:this.state.telefon,
    eposta:this.state.eposta,
    vergiDairesi:this.state.vergiDairesi,
    vergiNo:this.state.vergiNo,
    adres:this.state.adres}).then((res=>{
        if(res.data.name!=="MongoError"){
            this.props.history.push("/");
        }else{
            console.log(res.data);
            alert("This user name already exist")
        }
    }))}
    render(){
        return(
            <div>
                kullanıcı adı:<input onChange={(e)=>this.setState({username:e.target.value})}></input><br></br>
                şifre:<input onChange={(e)=>this.setState({password:e.target.value})}></input><br></br>
                telefon:<input type="number" onChange={(e)=>this.setState({telefon:e.target.value})}></input><br></br>
                eposta:<input type="email" onChange={(e)=>this.setState({eposta:e.target.value})}></input><br></br>
                vergi dairesi:<input onChange={(e)=>this.setState({vergiDairesi:e.target.value})}></input><br></br>
                vergi no:<input type="number" onChange={(e)=>this.setState({vergiNo:e.target.value})}></input><br></br>
                adres:<input onChange={(e)=>this.setState({adres:e.target.value})}></input><br></br>
                <button onClick={this.registerUser}>save</button>  
            </div>
        )
    }
}

export default Register;