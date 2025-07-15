import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';
import { HomePage } from '../../pages/HomePage';
import { InfoPage } from '../../pages/InformationPage';



const AppRouter = createBrowserRouter([
  {
    element: <Layout />, // Общий лейаут
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/clothing',
        element: <InfoPage />,
      },
      {
        path: '/footwear',
        element: <InfoPage />,
      },
      {
        path: '/accessories',
        element: <InfoPage />,
      },
      {
        path: '/brands',
        element: <InfoPage />,
      },
      {
        path: '/calculation',
        element: <InfoPage />,
      },
      {
        path: '/info',
        element: <InfoPage />,
      },
    ],
    errorElement: <div>404 Not Found</div>,
  },
]);

export default AppRouter