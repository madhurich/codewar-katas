

/*

https://www.codewars.com/kata/multiplication-tables/train/javascript/58bf3aa0658166fba50000f2
Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.
*/
function multiplicationTable(row,col){
  var rows = [], res = [];
  for(var r = 0; r < row; r++){
   for(var c = 0; c < col; c++){
     rows.push((r+1)*(c+1));
   }
   res.push(rows);
   rows = [];
  }
  return res;
}