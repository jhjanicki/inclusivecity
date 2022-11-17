import { useState, useEffect } from 'react';
import './Tooltip.scss';
import { dropdown_translations } from './dropdownTranslations'
import {catToValueMap} from "./mapHelpers";



const Tooltip = ({ feature, mode, selected, selected2, language }) => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const percentArray = ['pDiscr','sh_housow1','sh_housow3', 'sh_housow2', 'sh_housow8', 'sh_welf1', 'sh_welf2', 'sh_welf3','sh_welf4','sh_welf5','sh_educ1','sh_educ3','sh_educ4','sh_educ5','sh_educ6','sh_recent','sh_stat1','sh_stat2','sh_stat3','sh_stat4','sh_stat5', 'forborn_sh']

  const [comboValue, setComboValue] = useState('');
  const [comboValue2, setComboValue2] = useState('');


  const neighborhood = feature.properties.neighborhood;
  const [r, setR] = useState(feature.layer.paint['fill-color'].r);
  const [g, setG] = useState(feature.layer.paint['fill-color'].g);
  const [b, setB] = useState(feature.layer.paint['fill-color'].b);

  const translation_obj_one = dropdown_translations.find(d=> d.value === selected.value)
  const translation_obj_two = dropdown_translations.find(d=> d.value === selected2.value)

  const mapCatToNum = (value) =>{
    const row = catToValueMap.filter(d=>d.neighborhood==neighborhood  && d.category ==value )
    return row[0] !==undefined ? row[0].value :"";
  }

  useEffect(() => {
    if (mode === 'Traditional') {
      setValue(selected.value);
    } else {
      setValue(selected.value);
      setValue2(selected2.value);
      setComboValue(mapCatToNum(selected.value))
      setComboValue2(mapCatToNum(selected2.value))
    }
  }, [selected, selected2, mode, mapCatToNum]);

  useEffect(() => {
    setR(feature.layer.paint['fill-color'].r);
    setG(feature.layer.paint['fill-color'].g);
    setB(feature.layer.paint['fill-color'].b);
  }, []);


  return (
    <div className="tooltip">
      <h3
        style={{
          'backgroundColor': `rgb(${r * 255}, ${g * 255}, ${b * 255})`,
        }}
      >
        {neighborhood}
      </h3>
      <h4 className={mode === 'Traditional' ? 'visible' : 'hidden'}>
        <strong>{translation_obj_one?.label[language]}:</strong> {feature.properties[value]!== undefined &&percentArray.includes(selected.value)?Math.round(feature.properties[value]*10000) / 100 +"%": feature.properties[value]}
      </h4>

      <h4 className={mode === 'Traditional' ? 'hidden' : 'visible'}>
        <strong>{translation_obj_one?.label[language]}:</strong> {comboValue !==undefined ? comboValue :""}
      </h4>
      <h4 className={mode === 'Traditional' ? 'hidden' : 'visible'}>
        <strong>{translation_obj_two?.label[language]}:</strong> {comboValue2 !==undefined ? comboValue2 :""}
      </h4>
    </div>
  );
};

export default Tooltip;
