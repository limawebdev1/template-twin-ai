import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input<{ hasError: boolean }>`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: papayawhip;
  border: ${props => props.hasError ? '1px solid red' : 'none'};
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
  align-items: center;
  margin: 0 auto; // adjust the vertical margin as needed
  max-width: 600px;
`;

const InputGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

const Error = styled.p`
  color: red;
  margin-left: 10px;
  font-family: Tahoma, sans-serif;
`;

function isValidUrl(url: string): boolean {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?'+ // port
    '(\\/[-a-z\\d%_.~+:@=]*)*'+ // path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(url);
}

interface AddUrlInputProps {
  addUrl: (url: string) => void;
}

const AddUrlInput: React.FC<AddUrlInputProps> = ({ addUrl }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setInputValue(newUrl);

    if (!isValidUrl(newUrl)) {
      setError("Please enter a valid URL.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isValidUrl(inputValue)) {
      addUrl(inputValue);
      setInputValue('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a URL of a website you like..."
          required
          hasError={!!error}
        />
        <Button type="submit">+</Button>
      </InputGroup>
      {error && <Error>{error}</Error>}
    </Form>
  );
};

export default AddUrlInput;