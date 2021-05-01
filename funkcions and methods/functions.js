function showAlert(firstName, lastName) {
    console.log( firstName + ' ' + lastName +  ', you have been alerted')
}
showAlert('Ania', 'Kubow')
showAlert('Ahmed', 'Abdul', 'Aziz')

//

function sendText( first, last ) {
    console.log( first + ' ' + last + ', school is cancelled for the day! Yipee!')
}
sendText('Xian', 'Lee')
sendText('Anna', 'Seeberg')
sendText('Robert', 'Anderson')
sendText('Diane', 'Leming')
sendText('Mariam', 'Dover')

//

function sendText(first, last, result) {
    console.log(first + ' ' + last + ' your test result is ' + result + '%')
}

sendText('Xian', 'Lee', 49)
sendText('Anna', 'Seeberg', 89)
sendText('Robert', 'Anderson', 78)
sendText('Diane', 'Leming', 42)
sendText('Mariam', 'Dover', 50)

//

const firstName = 'Ania'
let calls = 0

function alertUser() {
    calls += 1
    console.log(firstName + ' You have been called ' + calls + ' times' )
}
alertUser()