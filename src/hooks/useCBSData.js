import { useState, useEffect } from 'react';
import { csv } from 'd3';

const dataURL = 'export_2022_07_07.csv';

// Parse strings into numbers.
const parseNumber = (str) => {
  if (str === 'NA' || str === '#VALUE!') {
    // TODO think about how this can be used later, change value here if needed.
    return null;
  }
  return +str;
};

export const useCBSData = () => {
  const [cbsData, setCBSData] = useState();
  useEffect(() => {
    csv(dataURL).then((dataRaw) => {
      //const metadata = dataRaw.slice(0, 5);
      const data = dataRaw.slice(6);
      data.forEach((d) => {
        d.bc2021 = parseNumber(d.bc2021);
        d.bc_naam = d.bc_naam;
        d.mbc = d.mbc;
        d.mbc_code = parseNumber(d.mbc_code);
        d.pDiscr = parseNumber(d.pDiscr);
        d.gini_inc_st = parseNumber(d.gini_inc_st);
        d.avg_inc = parseNumber(d.avg_inc);
        d.sh_housow1 = parseNumber(d.sh_housow1);
        d.sh_housow3 = parseNumber(d.sh_housow3);
        d.simp_educ = parseNumber(d.simp_educ);
        d.simp_motive = parseNumber(d.simp_motive);
        d.simp_conbirth = parseNumber(d.simp_conbirth);
        d.median_inc = parseNumber(d.median_inc);
        d.totalhh = parseNumber(d.totalhh);
        d.sh_housow2 = parseNumber(d.sh_housow2);
        d.sh_housow8 = parseNumber(d.sh_housow8);
        d.avg_welfare = parseNumber(d.avg_welfare);
        d.sh_welf1 = parseNumber(d.sh_welf1);
        d.sh_welf2 = parseNumber(d.sh_welf2);
        d.sh_welf3 = parseNumber(d.sh_welf3);
        d.sh_welf4 = parseNumber(d.sh_welf4);
        d.sh_welf5 = parseNumber(d.sh_welf5);
        d.sh_educ1 = parseNumber(d.sh_educ1);
        d.sh_educ3 = parseNumber(d.sh_educ3);
        d.sh_educ4 = parseNumber(d.sh_educ4);
        d.sh_educ5 = parseNumber(d.sh_educ5);
        d.sh_educ6 = parseNumber(d.sh_educ6);
        d.sh_recent = parseNumber(d.sh_recent);
        d.sh_stat1 = parseNumber(d.sh_stat1);
        d.sh_stat2 = parseNumber(d.sh_stat2);
        d.sh_stat3 = parseNumber(d.sh_stat3);
        d.sh_stat4 = parseNumber(d.sh_stat4);
        d.sh_stat5 = parseNumber(d.sh_stat5);
        d.totalpop = parseNumber(d.totalpop);
        d.N_conbirth = parseNumber(d.N_conbirth);
        d.forborn_sh = parseNumber(d.forborn_sh);
        d.NLbornbur = parseNumber(d.NLbornbur);
        d.abs_disrep = parseNumber(d.abs_disrep);
        d.gini_inc_st_norm = parseNumber(d.gini_inc_st_norm);
        d.avg_inc_norm = parseNumber(d.avg_inc_norm);
        d.sh_housow1_norm = parseNumber(d.sh_housow1_norm);
        d.sh_housow3_norm = parseNumber(d.sh_housow3_norm);
        d.simp_educ_norm = parseNumber(d.simp_educ_norm);
        d.simp_motive_norm = parseNumber(d.simp_motive_norm);
        d.simp_conbirth_norm = parseNumber(d.simp_conbirth_norm);
        d.pDiscr_norm = parseNumber(d.pDiscr_norm);
      });
      setCBSData(data);
    });
  }, []);
  return cbsData;
};
