// Step 4: `html/css` : Implement html/css template
/* 
 * Let's improve our code with javascritpt object.
 * - TODO excercise
 */

 /* -----------------------------------------------
 *  TODO: Remove all console log
 *  TODO: Create a basic html/css bootstrap template
 *  TODO: Implement the template and show teams
 * -----------------------------------------------
 */

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

let team3 = {
  'name': 'TEAM 3',
  'players': [players[6], players[7], players[8]],
  'totalTeamScore': 0
};

// First Two line of the output
console.log('****************** ___ Number Game ____ *******************');
console.log('*************** ___ Find the highest scored team ____ ***********');

// Display teams summary and store in variable to find the winner
displayTeam(team1);
displayTeam(team2);
displayTeam(team3);

// Display winner team
displayWinner();