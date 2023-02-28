// import { initializeApp } from "firebase/app";
// import { 
//     getAuth,
//     AuthErrorCodes,
//     getIdToken,
//     signInWithEmailAndPassword
// } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyAyBog5a2OjNzAwu5jWSagurwhRycjk0BQ",
//     authDomain: "dictation-2cf25.firebaseapp.com",
//     projectId: "dictation-2cf25",
//     storageBucket: "dictation-2cf25.appspot.com",
//     messagingSenderId: "507024903553",
//     appId: "1:507024903553:web:f7d9c3b63962392addec80"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

export const login = async (email: string, password: string) => {
    try{
        // const userCredential = await signInWithEmailAndPassword(auth, email, password)
        // console.log(userCredential.user)
        return
    } catch (error:any) {
        // switch (error.code) {
        //     case AuthErrorCodes.USER_DELETED: {
        //         throw {
        //             message: "A user with the given email does not exist",
        //             code: 404
        //         }
        //     }
        // }
    }
}