import React, { useState } from 'react';

interface AddUrlInputProps {
  addUrl: (url: string) => void;
}

const AddUrlInput: React.FC<AddUrlInputProps> = ({ addUrl }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUrl(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        required
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddUrlInput;