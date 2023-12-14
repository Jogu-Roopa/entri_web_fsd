
function findLargestElement(numbers) {

    let biggestnumbr=numbers[0];
    for(i=0;i<numbers.length;i++){
            if (numbers[i]> biggestnumbr){
               biggestnumbr=numbers[i];
            }
    }
  return biggestnumbr;  
}

console.log(findLargestElement([]));