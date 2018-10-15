//var originalArray = ["a", "b", "a", "b"]; //1
//var originalArray = ["a", "b", "a", "b", "a", "b"]; //2
//var originalArray = ["a", "b", "a", "b", "a", "b", "a", "b"]; //3
//var originalArray = ["a", "a", "a", "a", "a"]; //4 - Exception
// var originalArray = ["a", "b", "c", "a", "b","c"]; //1
var originalArray = ["a", "b", "c", "d", "a", "b", "c"]; //0

function abab(array) {
  var count = 0;
  //전부 같은 문자로만 구성되었는지 확인 (예외처리)
  if (checkSameException(array)) {
    count = array.length - 1;
    return count;
  } 
  else {
    for (var i = 2; i <= array.length / 2; i++) {
      if (patternCheck(i, array)) {
        count = array.length / i - 1;
        return count;
      }
    }
    return count;
  }
}

function patternCheck(patternLength, checkArray) {
  for (var i = 0, j = 0; i < checkArray.length; i++) {
    if (checkArray[i] != checkArray[j]) {
      return false;
    }
    if (j == patternLength - 1) {
      j = 0;
    } else {
      j++;
    }
  }
  return true;
}

function checkSameException(checkArray) {
  for (var i = 1; i < checkArray.length; i++) {
    if (checkArray[i] != checkArray[0]) {
      return false;
    }
  }
  return true;
}

console.log("answer: " + abab(originalArray));