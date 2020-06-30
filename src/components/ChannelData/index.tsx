import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(25).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Fulano"
            date="29/06/2020"
            content="Eu amo programar em ReactJS."
          />
        ))}

        <ChannelMessage
          author="Beltrano"
          date="29/06/2020"
          content={
            <>
              <Mention>@Fulano</Mention>,
              já entendi que você ama programar, agora pare de falar!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #React em TypeScript" type="text" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
