import App from "next/app";
import { Provider } from "../context";

import '../styles/styles.css'

const MyApp = (props) => (
  <Provider>
    <div className="wrapper">
      <header><a href="">A propos</a></header>
      <App {...props} />
    </div>
  </Provider>
);

export default MyApp;
