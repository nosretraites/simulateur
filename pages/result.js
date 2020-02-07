import React, { useContext } from "react";
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import { Context } from "../components/context";
import Pie from "../components/pie";
import SocialIcon from "../components/socialIcon";

const BASE_SHARE_URL = 'https://nosretraites.github.io/simulateur';
const SHARE_TITLE = 'Ma simulation de retraite';

const Result = () => {
  const { result } = useContext(Context);

  const data = [
    {
      id: "result",
      label: "result",
      value: parseInt(result.past)
    },
    {
      id: "other",
      label: "other",
      value: 100 - parseInt(result.past)
    }
  ];

  const baseData = [
    {
      id: "result",
      label: "result",
      value: 61
    },
    {
      id: "other",
      label: "other",
      value: 39
    }
  ];

  return (
    <div>
      <div className="results">
        <div className="result">
          <div>
            <span className="label">Une personne née en </span>
            <span className="important">1960</span>
          </div>
          <div>
            <span className="label">peut partir à la retraite à </span>
            <span className="important">65 ans</span>
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
            il vous faudra travailler 3 ans de plus !
          </p>
        </div>
       
      </div>
      <div className="social">
        <span className="text">
          Partagez les conséquences de la réforme des retraites :
        </span>
        <div className="social-buttons">
          <FacebookShareButton
            url={BASE_SHARE_URL + '?' + new URLSearchParams(result)}
            quote={SHARE_TITLE}
          >
            <SocialIcon name="facebook" />
          </FacebookShareButton>
          <TwitterShareButton
            url={BASE_SHARE_URL + '?' + new URLSearchParams(result)}
            quote={SHARE_TITLE}
          >
            <SocialIcon name="twitter" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default Result;
