import { Layout } from '../Shared/Layout';
import { Literature } from '../Literature';

export const LiteraturePage = () => {

  return (
    <Layout>
      <Literature/>
    </Layout>
  );
};


// import { useContext } from "react";
// import { URLStateContext } from "../URLStateContext";
// import { Layout } from "../Shared/Layout";
// import { literature_translations } from "../Shared/translations";

// export const LiteraturePage = () => {
//   const { language } = useContext(URLStateContext);
//   const length = literature_translations.literature.length;
//   const numbers = Array.from({ length: length }, (v, k) => k);
//   return (
//     <Layout>
//       <div className="introSection sections">
//         <div className="title">{literature_translations.page_title[language]}</div>
//         <div className="subtitle">
//           {literature_translations.page_subtitles[0][language]}
//         </div>
//         <div className="introBlurb">
//           {numbers.map(function (d, i) {
//             return (
//               <p>
//                   {literature_translations.literature[i][language]}
//               </p>
//             );
//           })}
//         </div>
//       </div>
//     </Layout>
//   );
// };
