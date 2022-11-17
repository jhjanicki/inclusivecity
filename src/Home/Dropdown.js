import React, { useState, useContext } from 'react';
import {dropdown_translations} from './dropdownTranslations'
import { URLStateContext } from '../URLStateContext';

export const Dropdown = ({ dropdownOptions, selected, onSelectedChange, colorScale, mapMode }) => {

  const [open, setOpen] = useState(false);
  const {language} = useContext(URLStateContext);

  // if(mapMode==="Traditional"){
  //    dropdownOptions.sort(function(a, b){
  //     if(a.category < b.category) { return -1; }
  //     if(a.category > b.category) { return 1; }
  //     return 0;
  //   })
  // }
  // if I sort here, then either only traditional or superdiversity works, while if I sort directly in the data file (dropdownOptions, just the traditionalDropdownOptions, then it works)

  const mappedDropdownOptions = dropdownOptions.map((option) => {
    const translated_label =  dropdown_translations.find(d=> d.value === option.value)?.label[language]
    const selected_option =  dropdown_translations.find(d=> d.value === option.value)?.category

    return (
      <div
      key={option.value}
      className="item"
      style={{"backgroundColor": colorScale(selected_option.english) }}
      onClick={() => onSelectedChange(option)} //set selected as option
      >
         <b>{selected_option[language]}: </b>
        {translated_label}
      </div>
    );
  });


  const translated_label_selected =  dropdown_translations.find(d=> d.value === selected.value)?.label[language]

  return (
    <div className="ui form dropdownWidth">
      <div className="field">
        <label className="label"></label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{translated_label_selected}</div>
          <div
            onClick={() => setOpen(!open)}
            className={`menu ${open ? 'visible transition' : ''}`}
          >
            {mappedDropdownOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
