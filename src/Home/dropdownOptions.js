
  export const traditionalDropdownOptions = [
    {
      label: 'Percentage Discrimination Experience',
      value: 'pDiscr',
      category: 'Discrimination'
    },
    {
      label: 'Income inequality Index',
      value: 'gini_inc_st',
      category: 'Economic status'
    },
    {
      label: 'Average income background',
      value: 'avg_inc',
      category: 'Economic status'
    },
    {
      label: 'Houseowners %',
      value: 'sh_housow1',
      category: 'Housing'
    },
    {
      label: 'Subsidised rental %',
      value: 'sh_housow3',
      category: 'Housing'
    },
    {
      label: 'Educational inequality index',
      value: 'simp_educ',
      category: 'Education'
    },
    {
      label: 'Diversity of migration motive',
      value: 'simp_motive',
      category: 'Migration diversity'
    },
    {
      label: 'Diversity index country of birth',
      value: 'simp_conbirth',
      category: 'Migration diversity'
    },
    {
      label: 'Most common income',
      value: 'median_inc',
      category: 'Economic status'
    },
    {
      label: 'Number of households',
      value: 'totalhh',
      category: 'Context'

    },
    {
      label: 'Rental house %',
      value: 'sh_housow2',
      category: 'Housing'
    },
    {
      label: 'Institutional housing %',
      value: 'sh_housow8',
      category: 'Housing'
    },
    {
      label: 'Average of welfare dependency',
      value: 'avg_welfare',
      category: 'Economic status'
    },
    {
      label: 'Independent from welfare %',
      value: 'sh_welf1',
      category: 'Economic status'
    },
    {
      label: 'Minor welfare dependency %',
      value: 'sh_welf2',
      category: 'Economic status'
    },
    {
      label: 'Partial welfare dependency %',
      value: 'sh_welf3',
      category: 'Economic status'
    },
    {
      label: 'Mainly dependent on welfare %',
      value: 'sh_welf4',
      category: 'Economic status'
    },
    {
      label: 'Complete welfare dependency %',
      value: 'sh_welf5',
      category: 'Economic status'
    },
    {
      label: 'Basis practical education %',
      value: 'sh_educ1',
      category: 'Education'
    },
    {
      label: 'Middle level education %',
      value: 'sh_educ3',
      category: 'Education'
    },
    {
      label: 'Middle high education %',
      value: 'sh_educ4',
      category: 'Education'
    },
    {
      label: 'High education %',
      value: 'sh_educ5',
      category: 'Education'
    },
    {
      label: 'Very high education %',
      value: 'sh_educ6',
      category: 'Education'
    },
    {
      label: 'Recent migrants %',
      value: 'sh_recent',
      category: 'Migration diversity'
    },
    {
      label: 'Family migrants %',
      value: 'sh_stat1',
      category: 'Migration diversity'
    },
    {
      label: 'Work migrants %',
      value: 'sh_stat2',
      category: 'Migration diversity'
    },
    {
      label: 'Study migrants %',
      value: 'sh_stat3',
      category: 'Migration diversity'
    },
    {
      label: 'Asylum migrants %',
      value: 'sh_stat4',
      category: 'Migration diversity'
    },
    {
      label: 'Other migrants %',
      value: 'sh_stat5',
      category: 'Migration diversity'
    },
    {
      label: 'Total Residents',
      value: 'totalpop',
      category: 'Context'
    },
    {
      label: 'Number of various countries of births',
      value: 'N_conbirth',
      category: 'Migration diversity'
    },
    {
      label: 'Share of foreign-born %',
      value: 'forborn_sh',
      category: 'Migration diversity'
    },
    {
      label: 'Number of Dutch-born',
      value: 'NLbornbur',
      category: 'Migration diversity'
    },
    ,
    {
      label: 'Number of discrimination reports',
      value: 'abs_disrep',
      category: 'Discrimination'
    },
  ].sort(function(a, b){
    if(a.category < b.category) { return -1; }
    if(a.category > b.category) { return 1; }
    return 0;
  })

  export const superdiversityDropdownOptions = [
    {
      label: 'Income inequality Index',
      value: 'gini_inc_st_norm',
      category: 'Economic status'
    },
    {
      label: 'Average income',
      value: 'avg_inc_norm',
      category: 'Housing'
    },
    {
      label: 'Houseowners',
      value: 'sh_housow1_norm',
      category: 'Housing'

    },
    {
      label: 'Subsidised rental',
      value: 'sh_housow3_norm',
      category: 'Education'
    },
    {
      label: 'Educational inequality index',
      value: 'simp_educ_norm',
      category: 'Education'
    },
    {
      label: 'Diversity of migration motive',
      value: 'simp_motive_norm',
      category: 'Migration diversity'
    },
    {
      label: 'Diversity index country of birth',
      value: 'simp_conbirth_norm',
      category: 'Migration diversity'
    },
    {
      label: 'Percentage Discrimination Experience',
      value: 'pDiscr_norm',
      category: 'Discrimination'
    },
  ];


  export const yearDropdownOptions = ['2013','2015','2017','2019','2021'];

  export const treemapDropdownOptions = ['2018','2019','2020'];