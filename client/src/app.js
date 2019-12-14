import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from "./register";
import Login from "./login";
import User from "./user";

class App extends Component{
    
    state={
        username:null,
        password:null,
        telefon:null,
        eposta:null,
        vergiDairesi:null,
        vergiNo:null,
        adres:null,
        Redirect:false,
        id:null
    };
    setusername=(username)=>{
      console.log(username);
        this.setState({username:username});
    }
    setpassword=(password)=>{
      console.log(password);
        this.setState({password:password})
    }
    setUser=(id,telefon,eposta,vergiDairesi,vergiNo,adres)=>{
        this.setState({id:id,telefon:telefon,eposta:eposta,vergiDairesi:vergiDairesi,vergiNo:vergiNo,adres:adres})
    }
 
    
    render(){
        
  return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
           
            <li><Link to={'/register'} className="nav-link"> Register </Link></li>
          </ul>
          </nav>
          <hr />
    
          <Switch>
              <Route
                exact
                path='/'
                render={(props) => <Login {...props} setUser={this.setUser} username={this.state.username} password={this.state.password} setusername={this.setusername} setpassword={this.setpassword} onSubmitLogin={this.onSubmitLogin}/>}
                />
               <Route
                exact
                path='/user'
                render={(props) => <User {...props}
                 id={this.state.id} 
                 username={this.state.username} 
                 password={this.state.password}
                 eposta={this.state.eposta}
                 vergiDairesi={this.state.vergiDairesi}
                 vergiNo={this.state.vergiNo}
                 adres={this.state.adres}/>}
                />
                <Route
                exact
                path='/register'
                render={(props) => < Register {...props}/>}
                />
          </Switch>
        </div>
      </Router>
  );
    }
};

export default App;