import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  flex-grow: 1;
`;

const Button = styled.button`
  background: ${props => props.theme.main};
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.secondary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh; // make the form take up 50% of the viewport height
`;

const InputGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

interface AddUrlInputProps {
  addUrl: (url: string) => void;
}

const AddUrlInput: React.FC<AddUrlInputProps> = ({ addUrl }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addUrl(inputValue);
    setInputValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <Button type="submit">+</Button>
      </InputGroup>
    </Form>
  );
};

export default AddUrlInput;