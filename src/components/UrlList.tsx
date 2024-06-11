import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 0.5em;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

interface UrlListProps {
  urls: string[];
}

const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <List>
      {urls.map((url, index) => (
        <ListItem key={index}>{url}</ListItem>
      ))}
    </List>
  );
};

export default UrlList;