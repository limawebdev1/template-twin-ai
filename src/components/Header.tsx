import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  font-family: Tahoma, sans-serif;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #333; // change this to your preferred color
`;

const Text = styled.p`
  text-align: center;
  color: #666; // change this to your preferred color
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Template Twin AI</Title>
      <Text>Feed me websites you like, create a website you love.</Text>
    </HeaderContainer>
  );
};

export default Header;