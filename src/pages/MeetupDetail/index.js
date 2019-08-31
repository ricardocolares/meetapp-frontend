import React from 'react';

import { Container } from './styles';

export default function MeetupDetail() {
  return (
    <Container>
      <header>
        <h1>React Native Meetup</h1>
        <button type="button">Editar</button>
        <button type="button">Excluir</button>
      </header>

      <img
        src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt=""
      />

      <p>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.{' '}
      </p>

      <span>
        <p>31 de agosto de 2019 </p>
        <p>OSF Global Service, Fortaleza, Ceará, Brasil </p>
      </span>
    </Container>
  );
}
