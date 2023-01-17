import React from 'react';
import axios from 'axios';
import fetch from '../fetch';

export default class Login extends React.Component{
  state = {
    user: '',
    password: '',

  };
  
  async componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const resp =  await axios.post(`${fetch()}/login/verify`, { token });
    if(resp) {
      history.push('/painel-admin');
    }
  };

  submit = async () => {
    const { history } = this.props;
    const { user, password } = this.state;
    const resp = await axios.post(`${fetch()}/login`,
      {
        user,
        password,
      }
    );
    localStorage.setItem('token', resp.data.token );
    window.alert(resp.data.message);

    if(resp.data.message === 'Usuário autorizado!') {
      history.push('/painel-admin');
    } 
  }

  render() {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <form onSubmit={this.submit} className="flex flex-col">
          <input
            type="text"
            placeholder="email"
            className="p-2 m-2 text-center"
            onChange={(e) => this.setState({ user: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            className="p-2 m-2 text-center"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button
            type="button"
            onClick={this.submit}
            className="p-2 m-2 bg-black text-white"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}