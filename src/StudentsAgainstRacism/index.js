import { useContext } from "react";
import { URLStateContext } from '../URLStateContext';
import {student_translations} from './translations'
import { Profile } from "./Profile";



export const StudentsAgainstRacism = () => {
    const {language} = useContext(URLStateContext);

    return (
        <div className="introSection sections">
          <div className="title">{student_translations.page_title[language]}</div>
          <div className="introBlurb">
            <p>
              {student_translations.p1[language]}
            </p>
          </div>
          <div className="profileContainer">
            <Profile></Profile>
          </div>
        </div>
    );
  };
