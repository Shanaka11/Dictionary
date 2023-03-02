import * as dotenv from "dotenv";
import { initializeApp } from "firebase-admin/app";
import { 
    getAuth
} from 'firebase-admin/auth'


dotenv.config();
const app = initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID
});

const auth = getAuth(app)

export default auth