import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>React em TypeScript</Title>

      <Separator />
      <Description>Canal para falar sobre React em TypeScript</Description>
    </Container>
  );
}

export default ChannelInfo;
