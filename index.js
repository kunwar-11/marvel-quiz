var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var rank ="";

console.log(chalk.bgRedBright('ARE YOU A TRUE MARVEL FAN? PROVE IT..\n'));

var userName = readlineSync.question('Please enter your name? \n');

console.log(chalk.red.bold('\nWELCOME! ',userName.toUpperCase()));

console.log(chalk.cyan.bold('\nRULES:-\n1. 2 points will be awarded for Right Answer\n2.-1 points will, be awarded for each wrong answer\n2.There is rank system in this game,\n   i)black widow > 1,<=8 points\n   ii)Hawkeye  >8,<= 18 points\n   iii)Hulk >18,<=25 points\n   iv)Thor >25,<=35 points\n   v)captain America > 35,<=39 points\n   vi)Iron Man = 40 points\n3.No rank for score <=0 \n'));

console.log(chalk.bgYellow.bold("\n Let's Start...\n\n"))

var highScore = [
  {
    name: 'Akash',
    score: 37,
    rank: 'Captain America'
  },
  {
    name: 'Aditya',
    score: 34,
    rank: 'Thor'
  },
  {
    name: 'Nitu',
    score: 28,
    rank: 'Thor'
  },
  {
    name: 'Prashant',
    score: 16,
    rank: 'Hawkeye'
  }
]

var quiz = [
  {
    question: '1. What legislation required The Avengers to be governed by law?\na)Berlin Acc ords\nb)Dublin Accords\nc)Sokovia Accords\nd)Slovakia Accords\n',
    answer: 'c'
  },
  {
    question: '2. Whose serum was Dr Banner trying to replicate when he turned into the Hulk?\na)Dr Reed Richards\nb)Dr Xander Rice\nc)Major william stryker\nd)Dr Abraham Erskine\n',
    answer: 'd'
  },
  {
    question:'3. What is the Iron-Man suit actually made up of?\na)A Gold-Titanium alloy\nb)A Vibranium-Adamantium alloy\nc)Uru\nd)Prometheum\n',
    answer: 'a'
  },
  {
    question:'4. How long did Scott Lang actually spend in the Quantum Realm?\na)5 weeks\nb)5 days\nc)5 months\nd)5 hours\n',
    answer: 'd'
  },
  {
    question:'5. What is the name of unit Captain America fights in during World War II?\na)Brooklyn Marauders\nb)New York Rifles\nc)The Howling Commandos\nd)Harlem Hellfighters\n',
    answer: 'c'
  },
  {
    question:'6.  Who is the first Guardian of the Galaxy to be seen in Avengers: Endgame?\na)starlord\nb)Groot\nc)Rocket\nd)Drax\n',
    answer: 'c'
  },
  {
    question:'7. The Thanos that attacked Earth in Endgame, which year did he come from?\na)2013\nb)2014\nc)2022\nd)2012\n',
    answer: 'b'
  },
  {
    question:"8. Which item was not on Captain America's to-do list in Winter Soldier?\na)Rocky\nb)Star War\nc)AC/DC\nd)Troubleman Soudtrack\n",
    answer:'c'
  },
  {
    question:'9. Name the first film in Phase 2.\na)Iron-Man 3\nb)Guardians Of The Galaxy\nc)Thor: The Dark World\nd)Guardians Of The Galaxy\n',
    answer:'a'
  },
  {
    question:"10. Who is Morgan Stark named after?\na)The Walking Dead character Tony Stark liked\nb)Tony Stark's Godfather\nc)Morgan Freeman\nd)Pepper Potts' Eccentric Uncle\n",
    answer:'d'
  },
  {
    question:"11. Which planet does the Hulk crash land on?\na)Titan\nb)Zen-Whoberi\nc)Xandar\nd)Sakaar\n",
    answer: 'd'
  },
  {
    question:"12. Who is Emile Blonsky?\na)Abomination\nb)One of the Winter Soldiers\nc)Not a Marvel character\nd)The guy who stole vibranium from Wakanda\n",
    answer: 'a'
  },
  {
    question:"13. What was the name of the Flerken that took Nick Fury's eye?\na)Duck\nb)Goose\nc)Maverick\nd)Goosy\n",
    answer:'b'
  },
  {
    question:"14. What does SHIELD stand for?\na)Strategic Hazard Intervention Espionage Logistics Directorate\nb)Supreme Headquarters, International Espionage and Law-Enforcement Division\nc)Strategic Homeland Intervention, Enforcement and Logistics Division\nd)Scientific Homeland Intervention, Enforcement  & Logistics Division\n",
    answer:'c'
  },
  {
    question:"15. Which movie does Hawkeye make his debut in?\na)Avengers\nb)Captain America: The First Avenger\nc)Iron Man 2\nd)Thor\n",
    answer:'d'
  },
  {
    question:"16. Where is Steve Rogers from?\na)Ney York city\nb)Brooklyn\nc)Neveda\nd)Bronx\n",
    answer:'b'
  },
  {
    question:"17.What is the name of Tony Stark's second AI?\na)Friday\nb)Veronica\nc)Karen\nd)Jarvis\n ",
    answer:'a'
  },
  {
    question:"18 Which terrorist organisation kidnaps Tony Stark in Iron Man?\na)Al-Qaeda\nb)The Mandarin\nc)The Ten Rings\nd)Hizbul\n",
    answer: 'c'
  },
  {
    question:"19. What was the WiFi password that Baron Mordo gave Dr Strange?\na)Shamballa\nb)Eye of Agamotto\nc)Hindu Kush\nd)Kamar-Taj\n",
    answer: 'a'
  },
  {
    question:"20. What species is Loki?\na)Zen-Whoberis\nb)Kree\nc)Frost Giant\nd)Luphomoid\n",
    answer:'c'
  }
]

function checkAnswer(question , answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green.bold("That's Right\n"));
    score = score + 2;
  }
  else {
    console.log(chalk.red.bold("You Are wrong here\n"));
    score = score-1;
  }
}

for(var  i=0 ;i<quiz.length; i++) {
  checkAnswer(quiz[i].question,quiz[i].answer);
}

rankAssignment(score);

function rankAssignment(score) {
  if(score>0 && score <= 8) {
    rank = rank + 'Black Widow'
  }
  else if(score > 8 && score<=18) {
    rank = rank + 'Hawkeye'
  }
  else if(score > 18 && score<=25) {
    rank = rank + 'Hulk'
  }
  else if(score > 25 && score<=35) {
    rank = rank + 'Thor'
  }
  else if( score > 35 && score <=39) {
    rank = rank + 'Captain America'
  }
  else if( score === 40) {
    rank = rank + 'Iron Man'
  }
  else {
    console.log('Sorry to say, you are not assigned any Rank\n');
    rank = rank + 'No Rank Assigned'
  }
}

console.log('---------------------------');
console.log(chalk.green.bold.underline('your final score is: ',score,' Your are ',rank));

console.log(chalk.green('\n     HIGH SCORE'))
console.log('name   score   rank')
console.log('--------------------')

for(var j=0 ;j<highScore.length ; j++) {
  console.log(chalk.white(highScore[j].name, " " ,highScore[j].score, " " ,highScore[j].rank))
}

if(highScore[0].score < score) {
  console.log(chalk.green.bold('\nKid, You are an Avenger Now'));
  console.log(chalk.bgRedBright('-Tony Stark'))
  console.log(chalk.bgGreenBright.bold('\nSend me the screen shot to get your name inked in high score list'))
}
else {
  console.log(chalk.yellow.bold('\nSend me the Screen shot to get your name in high score list'))
}
