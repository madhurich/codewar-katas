/*
https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript/58b9d9c4438f8a28d2000109
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"*/
function spinWords(str){
var each, eachrev;
  var arr = str.split(' ');
  arr.forEach(function(elem, index){
    each = elem.split('');
    if(each.length >= 5){
      eachrev = each.reverse().join('');
      //revArr.push(eachrev);
      arr[index] = eachrev;
    }
  });
  return arr.join(' ');
}