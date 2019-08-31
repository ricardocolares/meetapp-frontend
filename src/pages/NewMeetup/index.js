import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, MeetupFormArea } from './styles';
import ImageInput from './ImageInput';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.string().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function NewMeetup() {
  const dispatch = useDispatch();

  function handleSubmit({ image, title, description, date, location }) {
    dispatch(createMeetupRequest(image, title, description, date, location));
  }

  return (
    <Container>
      <MeetupFormArea>
        <Form schema={schema} onSubmit={handleSubmit}>
          <ImageInput name="avatar_id" />
          <Input name="title" type="text" placeholder="Título do Meetup" />
          <Input
            id="description"
            name="description"
            placeholder="Descrição completa"
          />
          <Input name="date" type="text" placeholder="Data do meetup" />
          <Input name="location" type="text" placeholder="Localização" />

          <button type="submit">Salvar meetup</button>
        </Form>
      </MeetupFormArea>
    </Container>
  );
}
