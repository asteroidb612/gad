import "mobx"; // import mobx before we declare the module below, otherwise vscode auto-importer gets confused at path to mobx
import {InitFirelink} from "./dm-server/Source/@Shared/MobXFirelink";
import firebase from "firebase";

const dbVersion = 12;
const DB_SHORT = "prod";
const linkRootPath = `versions/v${dbVersion}-${DB_SHORT}`;

// we aren't currently using mobx for a general app data-store, so just pass an empty object
const store = {};

export function initDebateMapServerLink() {
	const firebaseConfig = {
		"apiKey":"AIzaSyCnvv_m-L08i4b5NmxGF5doSwQ2uJZ8i-0",
		"authDomain":"debate-map-prod.firebaseapp.com",
		"databaseURL":"https://debate-map-prod.firebaseio.com",
		"projectId":"debate-map-prod",
		"storageBucket":"debate-map-prod.appspot.com",
	};
	firebase.initializeApp(firebaseConfig);

	InitFirelink(linkRootPath, store);
}