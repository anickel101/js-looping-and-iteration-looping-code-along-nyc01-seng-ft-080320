function writeCards(arrNames, eventName) {
    let thankYous = []
    for (let i=0; i<arrNames.length; i++) {
        thankYous.push(`Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYous
}



function countDown(posInt) {
    let i = 0
    while (i<=posInt) {
        console.log(posInt-i)
        i++
    }
}