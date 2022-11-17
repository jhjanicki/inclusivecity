export const dropdown_translations = [
  {
    label: {
      english:'Percentage Discrimination Experience', //Percent Discrimination
      dutch:'Percentage Discriminatie Ervaringen', //Procent discriminatie
    },
    value: 'pDiscr',
    category:{
      english:'Discrimination',
      dutch:'Ervaren discriminatie',
    },
    information:{
      english:'Percentage of people who felt discriminated against, respective of all people surveyed per neighborhood. This data comes from ‘Wijkprofiel Survey’ 2019.',
      dutch:'Het percentage aantal mensen dat zich gediscrimineerd voelde, respectievelijk van alle ondervraagden per buurt. Deze gegevens komen uit ‘Wijkprofiel Enquête’ 2019.'
    }
  },
  {
      label: {
        english:'Income inequality Index',
        dutch:'Inkomensongelijkheid index',
      },
      value: 'gini_inc_st',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The index of income inequality shows the distribution of income across a certain neighborhood. A value of 0 indicates perfect equality while a value of 1 indicates perfect inequality. Higher values mean that high-income individuals receive a higher proportion of the total income of the neighborhood population.',
        dutch:'De index van inkomensongelijkheid geeft de inkomensverdeling over een bepaalde buurt weer. Een waarde van 0 geeft perfecte gelijkheid aan, terwijl een waarde van 1 perfecte ongelijkheid aangeeft. Ter verduidelijking, hogere waardes betekenen dat individuen met de hoogste inkomens het grootste deel van het totale inkomen van een buurt ontvangen.'
      }
    },
    {
      label: {
        english:'Average income',
        dutch:'Gemiddelde inkomen',
      },
      value: 'avg_inc',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The average income has been computed over all incomes from households living in the respective neighborhood. This measure of income accounts for the number of people living in a household.',
        dutch:'Het gemiddelde inkomen is berekend over alle inkomens van huishoudens die in de betreffende buurt wonen. Deze inkomensmaatstaf houdt rekening met het aantal mensen dat in een huishouden woont.'
      }
    },
    {
      label: {
        english:'Houseowners %',
        dutch:'Huiseigenaren %',
      },
      value: 'sh_housow1',
      category:{
        english:'Housing',
        dutch:'Huisvesting',
      },
      information:{
        english:'The percentage of households that own the house in which they live, with respect to the total number of households per neighborhood.',
        dutch:'Het percentage huishoudens dat eigenaar is van de woning waarin zij wonen, ten opzichte van het totaal aantal huishoudens per buurt.'
      }
    },
    {
      label: {
        english:'Subsidised rental %',
        dutch:'Sociale huurwoningen %',
      },
      value: 'sh_housow3',
      category:{
        english:'Housing',
        dutch:'Huisvesting',
      },
      information:{
        english:'The percentage of households who have social housing, with respect to the total number of households per neighborhood.',
        dutch:'Het percentage huishoudens met een sociale huurwoning ten opzichte van het totaal aan huishoudens per buurt.'
      }
    },
    {
      label: {
        english:'Educational inequality index',
        dutch:'Opleidingsongelijkheid index',
      },
      value: 'simp_educ',
      category:{
        english:'Education',
        dutch:'Opleidingsniveau',
      },
      information:{
        english:'The educational inequality index measures the diversity of the highest obtained level of education within each neighbourhood. A higher value indicates more inequality and means a higher probability of two randomly selected individuals living in the same neighborhood having different levels of highest obtained education.',
        dutch:'De opleidingsongelijkheids index meet de diversiteit van het hoogst behaalde opleidingsniveau binnen elke buurt. Een hogere waarde duidt op meer ongelijkheid en betekent een grotere kans dat twee willekeurig geselecteerde individuen die in dezelfde buurt wonen, verschillende niveaus van hoogst behaalde opleiding hebben.'
      }
    },
    {
      label: {
        english:'Diversity of migration motive',
        dutch:'Migratie motief diversiteit',
      },
      value: 'simp_motive',
      category:{
        english:'Migration Diversity',
        dutch:'Migratie Diversiteit',
      },
      information:{
        english:'This index measures the diversity of migration motives to the Netherlands among migrants living in each neighborhood. A value closer to 1 indicates that there is more variation in immigration motives, and a lower value, closer to 0, means more similarity of migration motives among migrant population. The index value indicates the probability of two randomly selected migrants from that neighborhood had different migration motive.',
        dutch:'Deze index meet de diversiteit aan migratiemotieven naar Nederland onder migranten die in elke buurt wonen. Een waarde dichter bij 1 geeft aan dat er meer variatie is in immigratiemotieven, en een lagere waarde, dichter bij 0, betekent meer overeenkomst van migratiemotieven onder de migrantenpopulatie. De indexwaarde geeft de kans aan dat twee willekeurig geselecteerde migranten uit eenzelfde buurt een ander migratiemotief hadden.'
      }
    },
    {
      label: {
        english:'Diversity index country of birth',
        dutch:'Geboorteland diversiteits index',
      },
      value: 'simp_conbirth',
      category:{
        english:'Migration Diversity',
        dutch:'Migratie Diversiteit',
      },
      information:{
        english:'This index measures the country of birth diversity. A higher value means higher diversity of neighborhood population in terms of their countries of birth. It indicates a probability of two individuals taken at random originating from two different countries of birth.',
        dutch:'Deze index meet de diversiteit van het geboorteland. Een hogere waarde betekent een grotere diversiteit van de buurtbevolking in termen van hun geboorteland. Het geeft een kans aan dat twee willekeurig genomen individuen afkomstig zijn uit twee verschillende geboortelanden.'
      }
    },
    {
      label: {
        english:'Most common income',
        dutch:'Meest voorkomende inkomen',
      },
      value: 'median_inc',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'This measure shows the most frequent income range of all households in a certain neighborhood. This measure of income accounts for the number of people living in a household.',
        dutch:'Deze maat geeft het meest voorkomende inkomensinterval weer van alle huishoudens in een bepaalde buurt. Deze inkomensmaatstaf houdt rekening met het aantal mensen dat in een huishouden woont'
      }
    },
    {
      label: {
        english:'Number of households',
        dutch:'Aantal huishoudens',
      },
      value: 'totalhh',
      category:{
        english:'Context',
        dutch:'Context',
      },
      information:{
        english:'The number of households registered in each neighborhood, from CBS.',
        dutch:'Het aantal geregistreerde huishoudens per buurt, volgens het CBS.'
      }
    },
    {
      label: {
        english:'Rental house %',
        dutch:'Huurhuizen %',
      },
      value: 'sh_housow2',
      category:{
        english:'Housing',
        dutch:'Huisvesting',
      },
      information:{
        english:'The percentage of households living in a rented house with respect to the total number of households in each neighborhood.',
        dutch:'Het percentage huishoudens dat in een huurhuis woont ten opzichte van het totaal aantal huishoudens in elke buurt.'
      }
    },
    {
      label: {
        english:'Institutional housing %',
        dutch:'Mensen woonachtig in instituut %',
      },
      value: 'sh_housow8',
      category:{
        english:'Housing',
        dutch:'Huisvesting',
      },
      information:{
        english:'The percentage of households living in institutional housing with respect to the total number of households in each neighborhood.',
        dutch:'Het percentage huishoudens dat in een institutionele woning woont ten opzichte van het totale aantal huishoudens in elke wijk.'
      }
    },
    {
      label: {
        english:'Average of welfare dependency',
        dutch:'Gemiddeld afhankelijk van sociale voorzieningen',
      },
      value: 'avg_welfare',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The indicator shows an average degree of welfare dependency per neighborhood. The degree of dependence represents a percentage of household income that comes from welfare support.',
        dutch:'Deze indicator geeft een gemiddelde mate van bijstandsafhankelijkheid per buurt weer. De mate van afhankelijkheid vertegenwoordigt een percentage van het gezinsinkomen dat afkomstig is van bijstand.'
      }
    },
    {
      label: {
        english:'Independent from welfare %',
        dutch:'Onafhankelijk van sociale voorzieningen %',
      },
      value: 'sh_welf1',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The percentage of households in a neighbourhood that are independent of welfare, which is when 0% to 10% of their gross household income comes from welfare.',
        dutch:'Het percentage huishoudens in een wijk dat onafhankelijk is van een bijstandsuitkering, dat wil zeggen wanneer 0% tot 10% van hun bruto gezinsinkomen afkomstig is uit een bijstandsuitkering.'
      }
    },
    {
      label: {
        english:'Minor welfare dependency %',
        dutch:'Voor een klein deel afhankelijk van sociale voorzieningen %',
      },
      value: 'sh_welf2',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The percentage of households in a neighbourhood that have a minor dependency from welfare, which is when 10% to 30% of the gross household income comes from welfare.',
        dutch:'Het percentage huishoudens in een buurt dat in geringe mate afhankelijk is van een bijstandsuitkering, dat wil zeggen wanneer 10% tot 30% van het bruto gezinsinkomen afkomstig is uit een bijstandsuitkering.'
      }
    },
    {
      label: {
        english:'Partial welfare dependency %',
        dutch:'Deels afhankelijk van sociale voorzieningen %',
      },
      value: 'sh_welf3',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The percentage of households in a neighbourhood that have a partial welfare dependency, which is when 30% to 60% of the gross household income comes from welfare.',
        dutch:'Het percentage huishoudens in een buurt met een gedeeltelijke bijstandsafhankelijkheid, dat wil zeggen wanneer 30% tot 60% van het bruto gezinsinkomen afkomstig is uit de bijstand.'
      }
    },
    {
      label: {
        english:'Mainly dependent on welfare %',
        dutch:'Voornamelijk afhankelijk van sociale voorzieningen %',
      },
      value: 'sh_welf4',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The percentage of households in a neighborhood that are mainly dependent on welfare, which is when 60% to 80% of their gross household income comes from welfare.',
        dutch:'Het percentage huishoudens in een buurt dat voornamelijk afhankelijk is van een bijstandsuitkering, dat wil zeggen wanneer 60% tot 80% van hun bruto gezinsinkomen afkomstig is uit de bijstand.'
      }
    },
    {
      label: {
        english:'Complete welfare dependency %',
        dutch:'Compleet afhankelijk van sociale voorzieningen %',
      },
      value: 'sh_welf5',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The percentage of households in a neighborhood that are completely dependent on welfare benefits, which is when 80% to 100% of their gross household income comes from welfare.',
        dutch:'Het percentage huishoudens in een buurt dat volledig afhankelijk is van een bijstandsuitkering, dat wil zeggen wanneer 80% tot 100% van hun bruto gezinsinkomen afkomstig is uit een bijstandsuitkering.'
      }
    },
    {
      label: {
        english:'Basis practical education %',
        dutch:'Basis opleiding %',
      },
      value: 'sh_educ1',
      category:{
        english:'Education',
        dutch:'Opleidingsniveau',
      },
      information:{
        english:'The percentage of people who have primary education, VMBO b/k, or practical education as highest obtained level of education within a certain neighborhood.',
        dutch:'Het percentage aantal mensen die basisonderwijs, VMBO b/k of Praktijkonderwijs als hoogstbehaalde opleiding hebben binnen een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Middle level education %',
        dutch:'Middelbaaronderwijs %',
      },
      value: 'sh_educ3',
      category:{
        english:'Education',
        dutch:'Opleidingsniveau',
      },
      information:{
        english:'The percentage of people who have VMBO b/k, MBO 1, MBO 2, MBO 3, MBO 4, VMBO g/t, HAVO/VWO middle school as highest obtained level of education within a certain neighborhood.',
        dutch:'Het percentage aantal mensen die VMBO b/k, MBO 1, VMBO g/t, HAVO/VWO onderbouw, MBO 2, MBO 3, MBO 4  als hoogstbehaalde opleiding hebben binnen een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Middle high education %',
        dutch:'Hoogmiddelbaar onderwijs %',
      },
      value: 'sh_educ4',
      category:{
        english:'Education',
        dutch:'Opleidingsniveau',
      },
      information:{
        english:'The percentage of people who have HAVO/VWO senior high school as highest obtained level of education within a certain neighborhood.',
        dutch:'Het percentage aantal mensen die HAVO/VWO bovenbouw als hoogstbehaalde opleiding hebben binnen een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'High education %',
        dutch:'Hoog opgeleid %',
      },
      value: 'sh_educ5',
      category:{
        english:'Education',
        dutch:'Opleidingsniveau',
      },
      information:{
        english:'The percentage of people who have HBO bachelor, WO bachelor or HBO associate degree as highest obtained level of education within a certain neighborhood.',
        dutch:'Het percentage aantal mensen die HBO bachelor, WO bachelor of HBO associate degree als hoogstbehaalde opleiding hebben binnen een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Very high education %',
        dutch:'Zeer hoog opgeleid %',
      },
      value: 'sh_educ6',
      category:{
        english:'Education',
        dutch:'Opleidingsniveau',
      },
      information:{
        english:'The percentage of people who have HBO Master, WO master or PhD as highest obtained level of education within a certain neighborhood.',
        dutch:'Het percentage aantal mensen die HBO Master, WO Master of PhD als hoogstbehaalde opleiding hebben binnen een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Recent migrants %',
        dutch:'Recent gearriveerde migranten %',
      },
      value: 'sh_recent',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The percentage of migrants who were settled in the Netherlands in 2019, with respect to all migrants in a certain neighborhood.',
        dutch:'Het percentage aantal migranten dat gevestigd waren in Nederland in 2019 ten opzichte van alle migranten in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Family migrants %',
        dutch:'Familie migranten %',
      },
      value: 'sh_stat1',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The percentage of migrants whose primary reason to migrate to the Netherlands was family-related.',
        dutch:'Het percentage aantal migranten die familie als migratiedoel hadden ten opzichte van alle migranten in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Work migrants %',
        dutch:'Arbeids migranten %',
      },
      value: 'sh_stat2',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The percentage of migrants whose primary reason to migrate to the Netherlands was work-related.',
        dutch:'Het percentage aantal migranten die werk als migratiedoel hadden ten opzichte van alle migranten in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Study migrants %',
        dutch:'Studiegerelateerde migranten %',
      },
      value: 'sh_stat3',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The percentage of migrants whose primary reason to migrate to the Netherlands was study-related.',
        dutch:'Het percentage aantal migranten die studie als migratiedoel hadden ten opzichte van alle migranten in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Asylum migrants %',
        dutch:'Asielzoekers %',
      },
      value: 'sh_stat4',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The percentage of migrants whose primary reason to migrate to the Netherlands was seeking asylum.',
        dutch:'Het percentage aantal migranten die asiel als migratiedoel hadden ten opzichte van alle migranten in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Other migrants %',
        dutch:'Overige migranten %',
      },
      value: 'sh_stat5',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The percentage of migrants who had a different reason than family, work, asylum or study to migrate to the Netherlands.',
        dutch:'Het percentage aantal migranten die een ander migratiedoel hadden dan gerelateerd aan familie, asiel, werk of studie ten opzichte van alle migranten in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Total Residents',
        dutch:'Totale inwoners',
      },
      value: 'totalpop',
      category:{
        english:'Context',
        dutch:'Context',
      },
      information:{
        english:'Total number of residents within a certain neighborhood.',
        dutch:'Total aantal mensen die wonen in de betreffende buurt.'
      }
    },
    {
      label: {
        english:'Number of various countries of births',
        dutch:'Aantal verschilende geboortelanden',
      },
      value: 'N_conbirth',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The number of diverse countries of birth within a certain neighborhood.',
        dutch:'Het aantal verschillende geboortelanden binnen een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Share of foreign-born %',
        dutch:'Aandeel in het buitenland geboren',
      },
      value: 'forborn_sh',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'Percentage of people that were born outside the Netherlands, residing in a neighbourhood.',
        dutch:'Percentage aantal personen die buiten Nederland geboren zijn, in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Number of Dutch-born',
        dutch:'Aantal in Nederland geboren',
      },
      value: 'NLbornbur',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'The number of individuals born in the Netherlands in a certain neighbourhood.',
        dutch:'Het aantal personen die geboren zijn in Nederland, in een bepaalde buurt.'
      }
    },
    {
      label: {
        english:'Income inequality Index',
        dutch:'Inkomensongelijkheid index',
      },
      value: 'gini_inc_st_norm',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The index of income inequality shows the distribution of income across a certain neighborhood. A value of 0 indicates perfect equality while a value of 1 indicates perfect inequality. Higher values mean that high-income individuals receive a higher proportion of the total income of the neighborhood population.',
        dutch:'De index van inkomensongelijkheid geeft de inkomensverdeling over een bepaalde buurt weer. Een waarde van 0 geeft perfecte gelijkheid aan, terwijl een waarde van 1 perfecte ongelijkheid aangeeft. Ter verduidelijking, hogere waardes betekenen dat individuen met de hoogste inkomens het grootste deel van het totale inkomen van een buurt ontvangen.'
      }
    },
    {
      label: {
        english:'Average income',
        dutch:'Gemiddelde inkomen',
      },
      value: 'avg_inc_norm',
      category:{
        english:'Economic status',
        dutch:'Economisch welzijn',
      },
      information:{
        english:'The average income has been computed over all incomes from households living in the respective neighborhood. This measure of income accounts for the number of people living in a household.',
        dutch:'Het gemiddelde inkomen is berekend over alle inkomens van huishoudens die in de betreffende buurt wonen. Deze inkomensmaatstaf houdt rekening met het aantal mensen dat in een huishouden woont.'
      }
    },
    {
    label: {
        english:'Houseowners',
        dutch:'Huiseigenaren',
      },
      value: 'sh_housow1_norm',
      category:{
        english:'Housing',
        dutch:'Huisvesting',
      },
      information:{
        english:'The percentage of households that own the house in which they live, with respect to the total number of households per neighborhood.',
        dutch:'Het percentage huishoudens dat eigenaar is van de woning waarin zij wonen, ten opzichte van het totaal aantal huishoudens per buurt.'
      }
    },
    {
    label: {
            english:'Subsidised rental',
            dutch:'Sociale huurwoningen',
    },
      value: 'sh_housow3_norm',
      category:{
        english:'Housing',
        dutch:'Huisvesting',
      },
      information:{
        english:'The percentage of households who have social housing, with respect to the total number of households per neighborhood.',
        dutch:'Het percentage huishoudens met een sociale huurwoning ten opzichte van het totaal aan huishoudens per buurt.'
      }
    },
    {
    label: {
            english:'Educational inequality index',
            dutch:'Opleidingsongelijkheid index',
    },
      value: 'simp_educ_norm',
      category:{
        english:'Education',
        dutch:'Opleidingsniveau',
      },
      information:{
        english:'The educational inequality index measures the diversity of the highest obtained level of education within each neighbourhood. A higher value indicates more inequality and means a higher probability of two randomly selected individuals living in the same neighborhood having different levels of highest obtained education.',
        dutch:'De opleidingsongelijkheids index meet de diversiteit van het hoogst behaalde opleidingsniveau binnen elke buurt. Een hogere waarde duidt op meer ongelijkheid en betekent een grotere kans dat twee willekeurig geselecteerde individuen die in dezelfde buurt wonen, verschillende niveaus van hoogst behaalde opleiding hebben.'
      }
    },
    {
    label: {
            english:'Diversity of migration motive',
            dutch:'Migratie motief diversiteit',
    },
      value: 'simp_motive_norm',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'This index measures the diversity of migration motives to the Netherlands among migrants living in each neighborhood. A value closer to 1 indicates that there is more variation in immigration motives, and a lower value, closer to 0, means more similarity of migration motives among migrant population. The index value indicates the probability of two randomly selected migrants from that neighborhood had different migration motive.',
        dutch:'Deze index meet de diversiteit aan migratiemotieven naar Nederland onder migranten die in elke buurt wonen. Een waarde dichter bij 1 geeft aan dat er meer variatie is in immigratiemotieven, en een lagere waarde, dichter bij 0, betekent meer overeenkomst van migratiemotieven onder de migrantenpopulatie. De indexwaarde geeft de kans aan dat twee willekeurig geselecteerde migranten uit eenzelfde buurt een ander migratiemotief hadden.'
      }
    },
    {
    label: {
        english:'Diversity index country of birth',
        dutch:'Geboorteland diversiteits index',
      },
      value: 'simp_conbirth_norm',
      category:{
        english:'Migration diversity',
        dutch:'Migratie diversiteit',
      },
      information:{
        english:'This index measures the country of birth diversity. A higher value means higher diversity of neighborhood population in terms of their countries of birth. It indicates a probability of two individuals taken at random originating from two different countries of birth.',
        dutch:'Deze index meet de diversiteit van het geboorteland. Een hogere waarde betekent een grotere diversiteit van de buurtbevolking in termen van hun geboorteland. Het geeft een kans aan dat twee willekeurig genomen individuen afkomstig zijn uit twee verschillende geboortelanden.'
      }
    },
    {
      label: {
          english:'Percentage Discrimination Experience',
          dutch:'Percentage Discriminatie Ervaringen',
        },
        value: 'pDiscr_norm',
        category:{
          english:'Discrimination',
          dutch:'Ervaren discriminatie',
        },
        information:{
          english:'Percentage of people who felt discriminated against, respective of all people surveyed per neighborhood.This data comes from ‘Wijkprofiel Survey’ 2019.',
          dutch:'Het percentage aantal mensen dat zich gediscrimineerd voelde, respectievelijk van alle ondervraagden per buurt. Deze gegevens komen uit ‘Wijkprofiel Enquête’ 2019'
        }
      },
      {
        label: {
            english:'Number of discrimination reports',
            dutch:'Aantal discriminatie meldingen',
          },
          value: 'abs_disrep',
          category:{
            english:'Discrimination',
            dutch:'Ervaren discriminatie',
          },
          information:{
            english:'The number of received discrimination reports at RADAR related to religion, nationality or race.',
            dutch:'Het aantal ontvangen discriminatiemeldingen bij RADAR gerelateerd aan religie, nationaliteit of ras'
          }
        },
  ];
