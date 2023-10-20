import { Route, BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Block, getBlocks } from './blocks';

import { Header } from './components/Header/Header';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { ImageGrid } from './components/ImageGrid/ImageGrid';
import { useEffect, useState } from 'react';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Block | undefined>(undefined);
  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        setLoading(true);
        const blocksData = await getBlocks();
        setData(blocksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlocks();
  }, []);
  return (
    <Router>
      <Header />
      <main>
        <Route path="/block/:id" component={InfoPanel} />
        <ImageGrid data={data} isloading={loading} />
        <InfoPanel />
      </main>
    </Router>
  );
};
