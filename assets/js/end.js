const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.getElementById('finalScore')
finalScore.innerText = mostRecentScore
username.addEventListener('keyup', () => {
    
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    console.log("hey bruh")
    e.preventDefault()
}