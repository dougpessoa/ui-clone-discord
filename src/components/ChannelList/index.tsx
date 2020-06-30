import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';


const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="React em TypeScript" />
      <ChannelButton channelName="Node em TypeScript" />
      <ChannelButton channelName="Databases" />
      <ChannelButton channelName="React Native TypeScript" />
    </Container>
  );
}

export default ChannelList;
