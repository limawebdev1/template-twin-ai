import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: Tahoma, sans-serif;
  margin: 30px auto 0; // center the list
  max-width: 600px; // make the list take up the same width as the AddUrlInput element
  background-color: #ffffff; // set the background color to white
  border-radius: 5px; // add slightly rounded corners
`;

const ListItem = styled.li`
  padding: 0.5em;
  border-bottom: 1px solid #d3d3d3; // set the border color to light grey
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