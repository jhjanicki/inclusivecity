import { useContext } from "react";
import { URLStateContext } from '../URLStateContext';
import {organization_translations} from './translations';


export const Organizations = () => {
    const {language} = useContext(URLStateContext);

    return (
        <div className="introSection sections">
          <div className="title">{organization_translations.page_title[language]}</div>
          <div className="subtitle">{organization_translations.page_subtitles[0][language]}</div>
          <div className="introBlurb">
            <p>
              {organization_translations.p1[language]}
            </p>
          </div>
          <div className="subtitle">{organization_translations.page_subtitles[1][language]}</div>
          <div className="introBlurb">
            <p>
              {organization_translations.p2[language]}
            </p>
          </div>
          <div className="subtitle">{organization_translations.page_subtitles[2][language]}</div>
          <div className="introBlurb">
            <p>
              {organization_translations.p3[language]}
            </p>
          </div>
        </div>
    );
  };
