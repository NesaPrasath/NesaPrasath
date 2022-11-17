// const os=require('os');
// const p=os.userInfo();
// console.log(p);
/*var st="hello world";
var a=st.search(/wOrld/);
console.log(a);
var pat=/Geeks for Geeks/i;
console.log(pat);*/
let word="hello world how are you? I am fine. how is your life is going?";
let text=word.split(/\s/);
console.log(text);
let wrd=text.filter((element)=>{return element;});
console.log(wrd);