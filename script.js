// Claude AI was used to assist in development of this file and as a learning tool:
// fixing bugs in the fetch calls and the CORS failure demonstration, and offering educational 
// explanations of the project's concepts. All code was reviewed and tested by the student.


const API_URL = 'https://dnd-dice-roller-node-cudscvewcvg6crcq.centralus-01.azurewebsites.net'

// Wake up server when page loads
fetch(`${API_URL}/api/ping`)

async function roll() {
    const result = document.getElementById('diceResult')
    try {
        const response = await fetch(`${API_URL}/api/roll`)
        const data = await response.json()
        result.value = data.roll
    }
    catch (e) {
        result.value = 'Error'
    }
}

async function testCorsFailure() {
    const output = document.getElementById('corsResult')
    try {
        await fetch(`${API_URL}/api/no-cors`)
        output.textContent = 'Not blocked (bad)'
    } catch (error) {
        output.textContent = 'CORS failure: the browser blocked the response.'
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.target.tagName !== 'BUTTON') {
        roll()
    }
})