import React, { useContext } from 'react';
import {dropdown_translations} from './dropdownTranslations'
import { URLStateContext } from '../URLStateContext';

export const IndicatorDescription = ({ selected, selected2, mapMode }) => {


  const {language} = useContext(URLStateContext);


 let label;
 let label2;
 let description;
 let description2;


  if(mapMode==="Traditional"){
    label = dropdown_translations.find(d=> d.value === selected.value).label[language]
    description =  dropdown_translations.find(d=> d.value === selected.value).information[language]

  }else{
     label = dropdown_translations.find(d=> d.value === selected.value).label[language]
     label2 = dropdown_translations.find(d=> d.value === selected2.value).label[language]
     description =  dropdown_translations.find(d=> d.value === selected.value).information[language]
     description2 =  dropdown_translations.find(d=> d.value === selected2.value).information[language]
  }


  return (
    <>
        <p className="indicator">{label}</p>
        <p className="description">{description}</p>
        <p className="indicator">{mapMode==="Superdiversity"?label2:""}</p>
        <p className="description">{mapMode==="Superdiversity"?description2:""}</p>

    </>
  );
};
