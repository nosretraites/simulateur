import React from 'react';
import { Provider } from '../context';

const Layout = ({ children }) => (
  <Provider>
    {children}
  </Provider>
);

export const withProvider = (Component) => () => (
  <Provider>
    <Component/>
  </Provider>
)

export default Layout;
