// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// port :6060 test
// port :6061 prod

export const environment = {
  production: false,
  urlOutputScrap: 'http://167.86.120.98:6060/',
  urlProxyDB: 'http://167.86.120.98:6060/',
  urlSonda1: 'http://167.86.120.98:5002/',
  urlSonda2: 'http://167.86.120.98:5003/',
  urlFacebook: 'http://167.86.120.98:6060/',
  urlFacebookScrap: 'http://stg.kernelinformatica.com.ar:7070/',
  urlFacebookCustodiador: 'http://167.86.120.98:6060/',
  urlPostComentariosFace: 'http://stg.kernelinformatica.com.ar:7072/',
  //urlClasificador: 'http://167.86.120.98:4445/api/',
  urlClasificador: 'http://stg.kernelinformatica.com.ar:8083/api/',
  urlPublicador: 'http://167.86.120.98:6060/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
