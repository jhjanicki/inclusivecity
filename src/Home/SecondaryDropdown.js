import React, { useState } from 'react';

export const SecondaryDropdown = ({ dropdownOptions, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);


  const mappedDropdownOptions = dropdownOptions.map((option) => {

    return (
      <div
      key={option}
      className="item"
      onClick={() => onSelectedChange(option)} //set selected as option
      >{option}
      </div>
    );
  });


  return (
    <div className="ui form secondaryDropdownWidth">
      <div className="field">
        <label className="label"></label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected}</div>
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
