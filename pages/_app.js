import App from "next/app";
import { Provider } from "../context";

const MyApp = () => (
  <Provider>
    <App />
  </Provider>
);

export default MyApp;
