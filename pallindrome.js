let str="nitin";

let bag="";
for(let i=str.length-1;i>=0;i--){
  bag+=str;
}
if(bag=str)
{
  console.log("It is a Pallindrome");
}
else{
  console.log("It is not a Pallindrome. ")
}