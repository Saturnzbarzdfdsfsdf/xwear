import { Outlet } from 'react-router-dom';
import { Header } from '../../widget/Header';

const Layout = () => (
  <div className="app">
    <Header />
    <main>
      <Outlet /> 
    </main>
    <footer>...</footer>
  </div>
);

export default Layout