import { useContext } from "react";
import { URLStateContext } from "../URLStateContext";
import { literature_translations } from "./translations";

export const Literature = () => {
  const { language } = useContext(URLStateContext);
  const length = literature_translations.literature.length;
  const numbers = Array.from({ length: length }, (v, k) => k);
  return (
      <div className="introSection sections">
        <div className="title">{literature_translations.page_title[language]}</div>
        <div className="subtitle">
          {literature_translations.page_subtitles[0][language]}
        </div>
        <div className="introBlurb">
          {numbers.map(function (d, i) {
            return (
              <p>
                  {literature_translations.literature[i][language]}
              </p>
            );
          })}
        </div>
      </div>
  );
};
