import { useContext } from "react";
import { URLStateContext } from "../URLStateContext";
import { policy_translations } from "./translations";

export const GovernmentPolicy = () => {
  const { language } = useContext(URLStateContext);
  const length = policy_translations.policy_briefs.length;
  const numbers = Array.from({ length: length }, (v, k) => k);
  return (
      <div className="introSection sections">
        <div className="title">{policy_translations.page_title[language]}</div>
        <div className="subtitle">
          {policy_translations.page_subtitles[0][language]}
        </div>
        <div className="introBlurb">
          {numbers.map(function (d, i) {
            return (
              <p>
                <a href={policy_translations.links[i].link}>
                  {policy_translations.policy_briefs[i][language]}
                </a>
              </p>
            );
          })}
        </div>
      </div>
  );
};
