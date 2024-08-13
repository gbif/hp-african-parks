var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      // route: '/data'
    }
  },
  occurrence: {
    mapSettings: {
      lat: 0.8294387239696448,
      lng: 19.421892408412702,
      zoom: 3.6637221778740354
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
      type: 'and',
      predicates: [
        // remove records with known coordinate issues
        {
          type: 'equals',
          key: 'hasGeospatialIssue',
          value: 'false'
        },
        {
          "type": "or",
          "predicates": [
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((28.12637 6.62613,28.82263 10.22552,25.69977 8.98956,28.12637 6.62613))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((11.00483 13.12653,9.92301 9.63678,13.74898 9.93066,11.00483 13.12653))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((35.45306 15.53628,34.83747 12.74496,37.08274 12.79818,35.45306 15.53628))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((-7.0752 24.4487,1.81 26.72012,-3.69553 27.32986,-4.69803 30.10117,-7.0752 24.4487))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((1.27991 14.34128,4.31625 17.76489,-0.04532 18.48312,1.27991 14.34128))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((22.13745 21.60873,24.07791 21.13632,23.10699 25.68466,22.13745 21.60873))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((13.27429 26.92711,11.66456 24.32083,13.95095 24.14426,13.27429 26.92711))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((24.16261 -26.37826,23.42789 -29.04682,26.69088 -28.75777,24.16261 -26.37826))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((31.24129 -19.14296,28.90289 -22.0776,32.07215 -22.0776,31.24129 -19.14296))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((17.50238 -17.6705,16.79911 -20.11049,19.94781 -20.11049,17.50238 -17.6705))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((23.00157 -1.18866,22.37389 -4.30168,25.59395 -4.3942,23.00157 -1.18866))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((14.72255 0.04736,13.99147 -3.35108,16.84809 -3.29787,14.72255 0.04736))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((31.10916 -12.93777,34.06036 -9.51141,28.77457 -9.59793,31.10916 -12.93777))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((37.27141 2.83082,37.23089 -0.3844,40.01254 0.17979,37.27141 2.83082))"
            },
            {
              "type": "within",
              "key": "geometry",
              "value": "POLYGON((45.55406 9.80005,46.01605 6.69186,47.67113 7.26875,45.55406 9.80005))"
            }
          ]
        }
      ]
    },
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }