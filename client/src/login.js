import React, { Component } from "react";
import axios from "axios";

class Login extends Component{
    onSubmitLogin=()=>{
     
        axios.post("http://localhost:5000/", { username: this.props.username , password: this.props.password }).then((res=>{
        console.log(res)
            if(res.data){
                this.props.setUser(res.data.Profilim._id,res.data.Profilim.telefon, res.data.Profilim.eposta, res.data.Profilim.vergiDairesi, res.data.Profilim.vergiNo, res.data.Profilim.adres);
                this.props.history.push("/user");
            }
        }))
    }
    render(){
        return(
            <div>
                <input type="text"  placeholder="username" onChange={e=>this.props.setusername(e.target.value)}/>
                <input type="password" placeholder="password" onChange={e=>this.props.setpassword(e.target.value)}/>
                <button onClick={this.onSubmitLogin}>enter</button>                
            </div>
        )
    }
}

export default Login;