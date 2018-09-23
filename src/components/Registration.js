import React from "react";

class Registration extends React.Component {
    nameRef = React.createRef();
    passRef = React.createRef();
    emailRef = React.createRef();

    handleSubmit (event) {
        event.preventDefault();
        const data = {
            name: this.nameRef.current.value,
            password: this.passRef.current.value,
            email: this.emailRef.current.value
        };
        fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then(data => {
            console.log(data);
        });
        event.target.reset();
    };

    render () {
        return (
            <form noValidate className="search-form" onSubmit={this.handleSubmit.bind(this)}>
                <input className="input" type="text" placeholder="Ваше имя" ref={this.nameRef}/>
                <input className="input" type="password" placeholder="Ваш пароль" ref={this.passRef}/>
                <input className="input" type="email" placeholder="Ваш email" ref={this.emailRef}/>
                <button type="submit">Submit</button>
            </form>

        )
    };

}

export default Registration;