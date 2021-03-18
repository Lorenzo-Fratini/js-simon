function comNums(){

  var comNums = getRnds(1, 10, 5);
  return comNums;

}

function gamePlay(comNumbers){

  var userControl = [];
  var userResult = [];

  while (userControl.length < comNumbers.length){

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

  console.log('Hai indovinato ' + userResult.length + ' numeri');
  console.log('Numeri indovinati: ' + userResult);

}

function init(){

  // console.log('Numeri del computer: ' + comNumbers);

  var comNumbers = comNums();

  alert('Memorizza questi nuemri: ' + comNumbers);

  setTimeout(function() {
    gamePlay(comNumbers);
  }, 30000);

}

init();
