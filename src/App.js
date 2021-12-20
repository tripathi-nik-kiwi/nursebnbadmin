import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './containers/Layout';

import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            routes.map((route,rk) => {
              return (
                <Route key={rk} {...route} />
              );
            })
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
