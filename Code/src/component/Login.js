import React, { Component } from 'react';
import '../style/Login.css';

export default class login extends Component {

    state = {
        user: {
            username: '',
            email: '',
            password: '',
        },
        loginuser: '',
        error: '',

    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let newuser = { ...this.state.user };
        newuser[name] = value;

        this.setState({
            user: newuser,
        })
    }


    submitHandler = (event) => {

        event.preventDefault();
        let users = [];
        let user = { ...this.state.user };

        //set users in local storage if not set
        if (!localStorage.getItem("users")) {
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            // Storing form data in LocalStorage
            let storedUsers = JSON.parse(localStorage.getItem("users"));
            const newUsers = [...storedUsers, user];
            localStorage.setItem("users", JSON.stringify(newUsers));
        }
    }

    loginChangeHandler = (event) => {
        let loginname = event.target.name;
        let loginvalue = event.target.value;
        let loginuser = { ...this.state.loginuser };
        loginuser[loginname] = loginvalue;

        this.setState({
            loginuser: loginuser,
        })
    }



    userlogin = (event) => {
        event.preventDefault();
        let userslocal;
        userslocal = JSON.parse(localStorage.getItem("users"));
        console.log(this.state.loginuser['email']);

        userslocal.map((user) => {
            if (user.email == this.state.loginuser.email && user.password == this.state.loginuser.password) {
                let loggeduser = [{ email: this.state.loginuser.email, password: this.state.loginuser.password }];
                localStorage.setItem("loggeduser", JSON.stringify(loggeduser));
                this.setState({
                    error: " ",
                });
            } else {
                this.setState({
                    error: "wrong Email Or Password",
                });
            }
        })

    }





    render() {
        return (
            <div className="container-login-register-logo"
                style={{ backgroundImage: " url('../images/bg-login.png')" }} >
                <div className="Logo-login-div">
                    <img className="login-logo" src="../images/Login-logo.png"></img>
                </div>
                <div className="container-login-register">
                    <div className="container-login2">
                        <div className="container-login">
                            <h1 className="Label-input" >Login</h1>
                            <form onSubmit={this.userlogin}>
                                <div className="row-login">
                                    <div className="col-25-login">
                                        <label className="label-login" for="fname">Email</label>
                                    </div>
                                    <div className="col-75-login">
                                        <input onChange={this.loginChangeHandler} className="input-login" type="email" id="fname" name="email" placeholder="email.." required />
                                    </div>
                                </div>
                                <div className="row-login">
                                    <div className="col-25-login">
                                        <label className="label-login" for="lname">Password</label>
                                    </div>
                                    <div className="col-75-login">
                                        <input onChange={this.loginChangeHandler} className="input-login" type="password" id="lname" name="password" placeholder="Password.." required />
                                    </div>

                                </div>
                                <div className="login-error">{this.state.error}</div>
                                <div className="row-login">
                                    <input className="submit-login" type="submit" value="Login" required />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container-register2">
                        <div className="container-register">
                            <h1 className="Label-input" >Register</h1>
                            <form onSubmit={this.submitHandler} >
                                <div className="row-register">
                                    <div className="col-25-register">
                                        <label className="label-register" for="fname">User Name</label>
                                    </div>
                                    <div className="col-75-register">
                                        <input onChange={this.changeHandler} className="input-register" type="text" id="fname" name="username" placeholder="Your name.." required />
                                    </div>
                                </div>
                                <div className="row-register">
                                    <div className="col-25-register">
                                        <label className="label-register" for="fname">Email</label>
                                    </div>
                                    <div className="col-75-register">
                                        <input onChange={this.changeHandler} className="input-register" type="email" id="fname" name="email" placeholder="Email.." required />
                                    </div>
                                </div>


                                <div className="row-register">
                                    <div className="col-25-register">
                                        <label className="label-register" for="lname">Password</label>
                                    </div>
                                    <div className="col-75-register">
                                        <input onChange={this.changeHandler} className="input-register" type="Password" id="lname" name="password" placeholder="Password.." required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
                                    </div>
                                </div>

                                <div className="row-register submit-register-div">
                                    <input name="submit-register" className="submit-register" type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div >



        )
    }
}