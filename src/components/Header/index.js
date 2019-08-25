import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <h3>M</h3>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Ricardo Colares</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="submit">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
