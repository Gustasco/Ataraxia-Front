import { useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

function handleSignIn() {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const now = new Date()
            localStorage.setItem('lastSignInTime', now.getTime())
        })
        .catch((error) => {
            console.error('Error al iniciar sesión:', error)
        })
}

function auth() {
    let authentication = useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('El usuario está autenticado')
                authentication = true
                handleSignIn()
            } else {
                console.log('El usuario no está autenticado')
                authentication = false
            }
        })

        return () => unsubscribe()
    }, [])
}

export default auth
