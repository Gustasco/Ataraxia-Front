import { useState } from 'react'

function closeSesion() {
    const [shouldKeepSessionOpen, setShouldKeepSessionOpen] = useState(false)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const lastSignInTime = localStorage.getItem('lastSignInTime')
                if (lastSignInTime) {
                    const now = new Date()
                    const elapsedMinutes =
                        (now.getTime() - parseInt(lastSignInTime, 10)) /
                        (1000 * 60)
                    if (elapsedMinutes >= 2) {
                        const shouldKeepSessionOpen = window.confirm(
                            '¿Desea mantener la sesión abierta?'
                        )
                        setShouldKeepSessionOpen(shouldKeepSessionOpen)
                    }
                }
            }
        })

        return () => unsubscribe()
    }, [])
}
function handleSessionConfirmation(shouldKeepSessionOpen) {
    setShouldKeepSessionOpen(shouldKeepSessionOpen)
    if (shouldKeepSessionOpen) {
        const now = new Date()
        localStorage.setItem('lastSignInTime', now.getTime())
    } else {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log('Sesión cerrada correctamente')
            })
            .catch((error) => {
                console.error('Error al cerrar sesión:', error)
            })
    }
}

export default { closeSesion, handleSessionConfirmation }
