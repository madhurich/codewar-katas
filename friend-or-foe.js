/*
https://www.codewars.com/kata/friend-or-foe/train/javascript/58b75f06a32ae5feb6000120
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has 4 letters in it, you can be sure that it has to be a friend of yours!

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

*/
function friend(friends){
  var myFriends = [];
  //your code here
  friends.forEach(function(elem, index){
    if(elem.length == 4){
      myFriends.push(elem);
    }else{
      return myFriends;
    }
  });
  return myFriends;
}