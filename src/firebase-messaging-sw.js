importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
apiKey: "AIzaSyAXK4Orxl2CghIQvKiUPtkhEngSgzteqE0",
authDomain: "hello-world-pwa-8669c.firebaseapp.com",
databaseURL: "https://hello-world-pwa-8669c.firebaseio.com",
projectId: "hello-world-pwa-8669c",
storageBucket: "hello-world-pwa-8669c.appspot.com",
messagingSenderId: "660239288739"
};

var config = {
	apiKey: "AIzaSyCmOPP2TxhOIm42-6Wmi1I0pbqhpQnLCzs",
	authDomain: "workshop-pwa-sm.firebaseapp.com",
	databaseURL: "https://workshop-pwa-sm.firebaseio.com",
	projectId: "workshop-pwa-sm",
	storageBucket: "",
	messagingSenderId: "294437704065"
  };

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'PWA Duratex';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});