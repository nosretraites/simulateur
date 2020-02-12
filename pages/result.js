import React, { useContext } from "react";
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import Head from "next/head";

import { Context } from "../components/context";
import Pie from "../components/pie";
import SocialIcon from "../components/socialIcon";

const SEO_TITLE = 'Resultats du simulateur de retraite';
const BASE_SOCIAL_URL = 'https://nosretraites.github.io/simulateur';
const SOCIAL_TITLE = 'Voici ce que je toucherai comme retraite avec la reforme macron';
const SOCIAL_DESCRIPTION = 'Simulateur de retraite du collectif nos retraites';
const SOCIAL_IMAGE = `${BASE_SOCIAL_URL}/logo_collectif.png`;

const Result = () => {
  const { result } = useContext(Context);

  const past = parseInt(result.past)
  const current = parseInt(result.current)
  const data = [
    {
      id: "result",
      label: "result",
      value: current
    },
    {
      id: "other",
      label: "other",
      value: 100 - current
    }
  ];

  const baseData = [
    {
      id: "result",
      label: "result",
      value: past
    },
    {
      id: "other",
      label: "other",
      value: 100 - past
    }
  ];

  return (
    <div>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta property="og:type" content="article" />
        <meta property="og:description" content={SOCIAL_DESCRIPTION} />
        <meta property="og:image" content={SOCIAL_IMAGE} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={SOCIAL_DESCRIPTION} />
      </Head>
      <div className="results">
        <div className="result">
          <div>
            <span className="label">Une personne née en </span>
            <span className="important">1960</span>
          </div>
          <div>
            <span className="label">peut partir à la retraite à </span>
            <span className="important">{result.age} ans</span>
          </div>
          <div className="chart-wrapper">
            <span className="label">sa pension représentera </span>
            <Pie
              data={baseData}
              label="de son dernier salaire"
            />
          </div>
        </div>
        <div className="result">
          <div>
            <span className="label">Vous êtes né-e en </span>
            <span className="important">{result.naissance}</span>
          </div>
          <div>
            <span className="label">en partant à la retraite à </span>
            <span className="important">{result.age} ans</span>
          </div>
          <div className="chart-wrapper">
            <span className="label">votre pension représentera </span>
            <Pie
              data={data}
              label="de votre dernier salaire"
            />
          </div>
          <p className="label">
            Pour partir à la retraite à taux plein <br/>
            il vous faudra travailler {result.delay} ans de plus !
          </p>
        </div>
      </div>

      <div className="social">
        <span className="text">
          Partagez les conséquences de la réforme des retraites :
        </span>
        <div className="social-buttons">
          <FacebookShareButton
            url={BASE_SOCIAL_URL + '?' + new URLSearchParams(result)}
            quote={SOCIAL_TITLE}
          >
            <SocialIcon name="facebook" />
          </FacebookShareButton>
          <TwitterShareButton
            url={BASE_SOCIAL_URL + '?' + new URLSearchParams(result)}
            quote={SOCIAL_TITLE}
          >
            <SocialIcon name="twitter" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default Result;
