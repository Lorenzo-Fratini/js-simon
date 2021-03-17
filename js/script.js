var quantity = 5;
var userNums = [];
var comNumbers = comNums();

function comNums(){

  var comNums = getRnds(1, 10, quantity);
  return comNums;

}

function numRequest(){

  for (i = 0; i < quantity; i++){

    var userNum = parseInt(prompt('Inserisci un numero che hai visualizzato precedentemente!'))

    if(comNumbers.includes(userNum)){
      userNums.push(userNum);
    }
  }

  console.log('Hai indovinato ' + userNums.length + ' numeri');
  console.log('Numeri indovinati: ' + userNums);

}

function init(){

  console.log('com ' + comNumbers);

  alert('Memorizza questi nuemri: ' + comNumbers);

  setTimeout(numRequest, 1000);

}

init();
