import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <h3>M</h3>

      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Já tenho conta</Link>
      </form>
    </>
  );
}
