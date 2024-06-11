import React, { useState } from 'react';
import AddUrlInput from './components/AddUrlInput';
import UrlList from './components/UrlList';

const App: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([]);

  const addUrl = (url: string) => {
    setUrls((prevUrls) => [...prevUrls, url]);
  };

  return (
    <div>
      <AddUrlInput addUrl={addUrl} />
      <UrlList urls={urls} />
    </div>
  );
};

export default App;