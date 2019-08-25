import React, { useState, useEffect } from 'react';
import { MdChevronRight } from 'react-icons/md';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        date: formatRelative(parseISO(meetup.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <button type="button">Novo Meetup</button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup keyExtractor={item => String(item.id)} past>
            <strong>{meetup.title}</strong>
            <time>{meetup.date}</time>
            <button type="button">
              <MdChevronRight size={24} color="#fff" />
            </button>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
