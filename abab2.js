//var originalArray = ["a", "b", "a", "b", "a", "b"]; //2
 var originalArray = ["a", "b", "a", "b", "a", "b", "a", "b"]; //3


function abab(array) {
    var count = 0;
    //전부 같은 문자로만 구성되었는지 확인 (예외처리)
    if(checkSameException(array)){
        count = array.length -1;
    }
    else{
        for(i=0; i<array.length/2; i++){
            if(patternCheck(i, array)){
                count = (array.length/i) -1;
            }
        }
    }
    console.log('Answer: ' + count);
}

function patternCheck(patternLength, checkArray){
    for( i=0, j=0; i<checkArray.length; i++, j++){
        if( checkArray[i] != checkArray[j]){
            return false;
        }
        if( j == patternLength) {
            j = 0;
        }
    }
    return true;
}

function checkSameException(checkArray){
    for(var i=1; i<checkArray.length; i++){
        if(checkArray[i] != checkArray[0]){
            return false;
        }
    }
    return true;
}

abab(originalArray);