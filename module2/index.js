// Step 6: `ajax` : XMLHttpRequest
/* 
 * Let's improve our code with javascritpt object.
 * - TODO excercise
 */

/* -------------------------------------------------------------
 *  TODO: Replace players github username to full name(if exsits)
 * -------------------------------------------------------------
 */


// Insert Id to players
let increment = 1;
players.map(function (player) {
  player.id = increment++;
});

let team1 = {
  'name': 'TEAM 1',
  'players': [players[0], players[1], players[2]],
  'totalTeamScore': 0
};

let team2 = {
  'name': 'TEAM 2',
  'players': [players[3], players[4], players[5]],
  'totalTeamScore': 0
};

let team3  = {
  'name': 'TEAM 3',
  'players': [players[6], players[7], players[8]],
  'totalTeamScore': 0
};

// Display teams summary and store in variable to find the winner
displayTeam(team1);
displayTeam(team2);
displayTeam(team3);


const btn = document.getElementById('find-winner-btn');
btn.addEventListener('click', function () {
  displayWinner();
})