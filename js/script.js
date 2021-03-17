var quantity = 5;
var comNumbers = comNums();
var userControl = []
var userResult = [];


function comNums(){

  var comNums = getRnds(1, 10, quantity);
  return comNums;

}

function gamePlay(){

  while (userControl.length < comNumbers.length ){

    var userNum = parseInt(prompt('Inserisci un numero che hai visualizzato precedentemente!'))

    console.log(userNum);

    if(userControl.includes(userNum)){
      alert('Numero già inserito, inserisci un altro numero');
    } else if (comNumbers.includes(userNum)){
        userControl.push(userNum);
        userResult.push(userNum);
    } else if (!comNumbers.includes(userNum)){
        userControl.push(userNum);
    }
  }

  console.log(userControl, userResult);

  console.log('Hai indovinato ' + userResult.length + ' numeri');
  console.log('Numeri indovinati: ' + userResult);

}

function init(){

  console.log('com ' + comNumbers);

  alert('Memorizza questi nuemri: ' + comNumbers);

  setTimeout(gamePlay, 3000); //dovrebbe essere 30000ms

}

init();
