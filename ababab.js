var originalArray = ["a", "b", "a", "b", "a", "b"]; //2
// var originalArray = ["a", "b", "a", "b", "a", "b", "a", "b"]; //3

function ababCheck(array) {

  // 다 같은 문자열로 채워졌다면 return array.length-1;

  count = 0;

  var tempArray = array.slice(0);

  for (var i = 0; i < array.length - 1; i++) {
    tempArray = sendFirstToEnd(tempArray);
    if (compareArray(tempArray, array)) {
      count++;
    }
  }

  return count;
}

function sendFirstToEnd(dataArray) {
  var firstLetter;

  firstLetter = dataArray[0];

  for (var i = 0; i < dataArray.length - 1; i++) {
    dataArray[i] = dataArray[i + 1];
  }

  dataArray[dataArray.length - 1] = firstLetter;

  return dataArray;
}

function compareArray(firstArray, secondArray) {
  for (var i = 0; i < firstArray.length; i++) {
    if (firstArray[i] != secondArray[i]) {
      return false;
    }
  }
  return true;
}



console.log("answer: " + ababCheck(originalArray));