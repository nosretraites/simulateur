import App from "next/app";
import { Provider } from "../context";

const MyApp = (props) => (
  <Provider>
    <App {...props} />
  </Provider>
);

export default MyApp;
