// Step 2: `Loop` : Use loop to simplify redundante code
/* 
 * Let's improve our code with javascritpt object.
 * - TODO excercise
 */

let players = [{
    name: 'Obi',
    digit: 27,
    zone: 2
  },
  {
    name: 'Haseeb',
    digit: 71,
    zone: 88
  },
  {
    name: 'Sirin',
    digit: 28,
    zone: 2
  },
  {
    name: "Shaza",
    digit: 76,
    zone: 200
  },
  {
    name: "Hossein",
    digit: 52,
    zone: 31
  },
  {
    name: "Anwer",
    digit: 47,
    zone: 2
  },
  {
    name: "Anwer",
    digit: 47,
    zone: 2
  },
  {
    name: 'Majid',
    digit: 50,
    zone: 30
  },
  {
    name: 'Jackline',
    digit: 52,
    zone: 20
  },
  {
    name: 'Mohammed',
    digit: 40,
    zone: 55
  }
];

// [TODO]: Solution
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

/**
 * @description Display player's line by console.log
 * @param {object} player - The player object should contain name, digit, zone
 * @returns none 
 */
function sayHello(player) {
  console.log('Hello ' + player.name + '!' + ' Your points: ' + getScore(player));
}

/* -----------------------------------------------------------------------------------------
 * TODO: unnecessary assign statement, simplify the below method
 *
 * Hint:
  
  return statement;
 * -----------------------------------------------------------------------------------------
 */
/**
 * @description Calculate player points
 * @param {object} player - The player object should contain name, digit, zone
 * @returns {number} Score of the player, multiple digit and zone
 */
function getScore(player) {
  const score = player.digit * player.zone;
  return score;
}

/* -----------------------------------------------------------------------------------------
 * TODO: use loop syntext to make the  getScore logic scalable
 * - it should fit for any number of players in the team. 
 * - right now it supports only 3 players in each team
 *  
 * Hint: 
 
  array.forEach(function(item){
    // code
  })
 * -----------------------------------------------------------------------------------------
 */
/**
 * @description Calculate team total score
 * @param {object} team - team object contains players information
 * @returns {number} Sum of three player point as team score 
 */
function teamScore(team) {
  let score1 = getScore(team.players[0]);
  let score2 = getScore(team.players[1]);
  let score3 = getScore(team.players[2]);

  return score1 + score2 + score3;
}

/* -------------------------------------------------------------------------
 * TODO: use loop syntext to make the displayTeamAndReturnScore logic scalable
 * TODO: assing team score in team object instead of return the score
 * TODO: refactor function name to match with the purpose 
 *  
 * Hint: 
 
  array.forEach(function(item){
    // code
  })
  
  displayTeam() // this could a method name

 * ---------------------------------------------------------------------------
 */
/**
// [TODO]: Solution
/**
 * @description Display team summary
 * @param {string} team - Team name
 * @returns {number} Team score
 */
function displayTeamAndReturnScore(team) {

  console.log('_____ ' + team.name + '  ______');
  sayHello(team.players[0]);
  sayHello(team.players[1]);
  sayHello(team.players[2]);

  let totalTeamScore = teamScore(team);
  console.log('Team score: ' + totalTeamScore);

  return totalTeamScore;
}

console.log('****************** ___ Number Game ____ *******************');
console.log('*************** ___ Find the highest scored team ____ ***********');

/* -------------------------------------------------------------------------
 * TODO: fix undefined error in winner method below
 * ---------------------------------------------------------------------------
 */

// [ToDo]: Solution
// Display teams summary and store in variable to find the winner
let totalScoreForTeam1 = displayTeamAndReturnScore(team1);
let totalScoreForTeam2 = displayTeamAndReturnScore(team2);
let totalScoreForTeam3 = displayTeamAndReturnScore(team3);

// [ToDo]: Solution
function displayWinner(team1, team2, team3) {
  let winner;
  // Firstly check if Team 1 is winner or not
  // Seconly check if Team 2 is winner or not
  // Otherwise Team 3 is the default winner
  // Bug: in the following logic there is bug, if more than one have has equal score if doesn't work
  // For now lets keep it simple, we will be fix the bug in later step  

  if (team1.totalTeamScore > team2.totalTeamScore && team1.totalTeamScore > team3.totalTeamScore) {
    // modify this
    /* winner = 'TEAM 1'; */
    winner = team1;

  } else if (team2.totalTeamScore > team1.totalTeamScore && team2.totalTeamScore > team3.totalTeamScore) {
    /*  winner = 'TEAM 2'; */
    winner = team2;
  } else {
    /*  winner = 'TEAM 3'; */
    winner = team3;
  }

  // console.log('_____________ *** ' + winner + ' wins! *** _________________');
  console.log('_____________ *** ' + winner.name + ' wins! *** _________________');
}

displayWinner(totalScoreForTeam1, totalScoreForTeam2, totalScoreForTeam3);