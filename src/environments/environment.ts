// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,
  firebase: {
    projectId: 'beaufort-west',
    appId: '1:156712925641:web:bfd6ec860ed75b59e95018',
    databaseURL: 'https://beaufort-west-default-rtdb.firebaseio.com',
    storageBucket: 'beaufort-west.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBpuuhZ6wIn7osH2mw0VkrB-jgrexcFQao',
    authDomain: 'beaufort-west.firebaseapp.com',
    messagingSenderId: '156712925641',
  },

  firebaseTenders : {
    apiKey: "AIzaSyBpuuhZ6wIn7osH2mw0VkrB-jgrexcFQao",
    authDomain: "beaufort-west.firebaseapp.com",
    databaseURL: "https://beaufort-west-default-rtdb.firebaseio.com",
    projectId: "beaufort-west",
    storageBucket: "beaufort-west.appspot.com",
    messagingSenderId: "156712925641",
    appId: "1:156712925641:web:8c9dbf181798e53be95018"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
