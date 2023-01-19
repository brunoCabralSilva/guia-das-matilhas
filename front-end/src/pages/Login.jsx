import React from 'react';
import axios from 'axios';
import fetch from '../fetch';

export default class Login extends React.Component{
  state = {
    user: '',
    password: '',
    loading: true,
  };
  
  async componentDidMount() {
    this.setState({ loading: true });
    const { history } = this.props;
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const resp = await axios.post(`${fetch()}/login/verify`, { token });
        console.log(resp);
        this.setState({ loading: false });
        if(resp) {
          history.push('/painel-admin');
        }
        this.setState({ loading: false });
      } 
      this.setState({ loading: false });
    } catch(error) {
      this.setState({ loading: false });
    }
  };

  submit = async () => {
    const { history } = this.props;
    try {
      const { user, password } = this.state;
      const resp = await axios.post(`${fetch()}/login`,
        {
          user,
          password,
        },
      );
      localStorage.setItem('token', resp.data.token );
      if(resp.data.token) {
        history.push('/painel-admin');
        this.setState({ loading: false });
      }
    } catch(error) {
      console.log(error.message);
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="h-screen w-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      );
    }
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        {
          loading ?
          <div className="h-screen w-full flex items-center justify-center">
            <span className="loader" />
          </div>
          : <form onSubmit={this.submit} className="flex flex-col">
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
        }
      </div>
    );
  }
}