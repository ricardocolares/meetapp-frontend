import React, { useState, useEffect } from 'react';
import { MdChevronRight } from 'react-icons/md';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        date: formatRelative(parseISO(meetup.date), new Date(), {
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
        <button type="button">
          <Link to="/new-meetup">Novo Meetup</Link>
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup keyExtractor={item => String(item.id)} past>
            <strong>{meetup.title}</strong>
            <aside>
              <time>{meetup.date}</time>
              <button type="button">
                <Link to="/meetup">
                  <MdChevronRight size={24} color="#fff" />
                </Link>
              </button>
            </aside>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
