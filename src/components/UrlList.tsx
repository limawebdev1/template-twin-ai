import React from 'react';

interface UrlListProps {
  urls: string[];
}

const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <ul>
      {urls.map((url, index) => (
        <li key={index}>{url}</li>
      ))}
    </ul>
  );
};

export default UrlList;