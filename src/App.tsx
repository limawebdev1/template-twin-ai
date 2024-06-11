import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import AddUrlInput from './components/AddUrlInput';
import UrlList from './components/UrlList';
import Header from './components/Header';

const App: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([]);

  const addUrl = (url: string) => {
    setUrls((prevUrls) => [...prevUrls, url]);
  };

  return (
    <div>
      <GlobalStyles />
      <Header />
      <AddUrlInput addUrl={addUrl} />
      <UrlList urls={urls} />
    </div>
  );
};

export default App;