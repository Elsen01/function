function findWord(word){
    let arr=word.match(/\w[a-z]*/gi);
    let res = arr[0];

    for(let i=0; i< arr.length; i++){
        if(res.length<arr[i].length){
            res = arr[i];
        }
    }
    return res;
}
 console.log(findWord('The modern English alphabet is a Latin alphabet consisting of 26 letters, '));

