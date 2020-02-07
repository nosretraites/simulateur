import App from "next/app";
import Head from 'next/head';

import { Provider } from "../components/context";

import "../styles/index.css";
import "../styles/result.css";

const SEO_AUTHOR = 'Nos retraites, collectif citoyen';
const SEO_KEYWORDS = 'simulateur,retraite,macron';
const SEO_APP_NAME = 'Simulateur de retraite';

const MyApp = props => (
  <Provider initialState={props.router.query}>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" /> 
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

      <meta name="keywords" content={SEO_KEYWORDS} />
      <meta name="author" content={SEO_AUTHOR} />
      <meta name="application-name" content={SEO_APP_NAME} />
    </Head>
    <header>
      <img src="logo_collectif.png" alt="nos retraites logo" />
      <div>
        <h1>Réforme des retraites</h1>
        <h2>Quel impact pour moi ?</h2>
      </div>
    </header>
    <p className="phrase">
      Avec le simulateur du <strong>collectif citoyen Nos retraites</strong>,
      decouvrez l'impact qu'aurait la réforme des retraites de Macron sur votre
      pension.
    </p>
    <App {...props} />
  </Provider>
);

export default MyApp;
