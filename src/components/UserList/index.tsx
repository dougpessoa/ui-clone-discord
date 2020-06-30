import React from 'react';

import { Container, Role, User, Avatar } from './styles';

export interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      { isBot && <span>Bot</span> }
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Fulano" />


      <Role>Offiline - 18</Role>
      <UserRow nickname="Beltrano" isBot />
      <UserRow nickname="Sicrano"  />

    </Container>
  );
}

export default UserList;
