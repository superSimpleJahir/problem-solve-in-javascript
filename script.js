// array - foreach map filter
// foreach is a loop which works on array.
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.forEach(function (val) {
  console.log(val + 2);
});

// 1 Foreach ব্যবহার করে প্রত্যেকটা এলিমেন্ট এর সামনে 'Hello' প্রিন্ট করো
a.forEach((val) => {
  console.log(`Hello ${val}`);
})
// 2, একই Array  প্রিন্ট করো যার ভ্যালু 7 এর চেয়ে কম
a.forEach((val) => {
  if (val <= 7) {
    console.log(val);
  }
})

// 3,একটি array সকল member এর যোগফল বের করো
let sum = 0;
a.forEach((val) => {
  sum = sum + val;
})
console.log(sum);

// 4, akti array ar sokol element ke add koro. jodi kono akti element jodi string hoi tahole oi string bad dia add koro
let b = [1, 2, 3, 4, '5', 6, 'jahir', 7, 8, '9', 10];
let sum1 = 0;
b.forEach((val) => {
  if (typeof val === "number") {
    sum1 = sum1 + val;
  }
})
console.log(sum1);

// map - jodi kono array ar protekta memberke akti opration kore notun arrayte rupantor korar jonne map use kora hoi
// map ar structure akebare forEach ar moto. akhane return kortei hobe.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans1 = array.map((val) => {
  return (`${val * 2}, jahir`);
})
console.log(ans1);

// akti array ar sokol elemnt ke ar lenth chake kore jodi element ar lenth 5 hoi tahole atike p tage ar bitore rakhte hobe r jodi 5 ar besi ba kom hoi tahole span tahge ar bitore rakhtehobe
let nameList = ['jahir', 'Md jahirul', 'mijan', 'md mijan', 'apple', 'dog', 'cat'];
let newName = nameList.map((val) => {
  if (val.length === 5) {
    return `<p>${val}</p>`
  } else return `<spane>${val}</spane>`;
})
console.log(newName);

// ek array of object ace oi array onek gula object ace okhantheke sokol name dia akti array make koro;
let myarray = [
  { name: 'jahir', age: 24, job: 'student' },
  { name: 'Mijan', age: 25, job: 'student' },
  { name: 'arif', age: 20, job: 'student' },
  { name: 'Jahid', age: 28, job: 'Teacher' },
  { name: 'Saifulla', age: 26, job: 'Walton' },
  { name: 'sutan', age: 42, job: 'Leber' }
];
let arrayList = myarray.map((val) => {
  return { Name: val.name };
})
console.log(arrayList);
let arrayList1 = myarray.map((val) => {
  return val.age;
})
console.log(arrayList1);
let arrayList2 = myarray.map((val) => {
  return val.job;
})
console.log(arrayList2);



// 5 amon akta function make korte hobe je ati input nibe. inpute jodi array thake tahole true return korbe r onno sob khetre false return kotbe
function chackArray(inp) {
  console.log(Array.isArray(inp));
}
chackArray(['hello']);
chackArray('hello');
chackArray(true);
chackArray(9);
let arr = ['jahir', 'mijan', 'arif'];
chackArray(arr);
chackArray({});
// another wey this problem solve

function chackArray1(inp) {
  console.log(inp instanceof Array);
}
chackArray(['hello']);
chackArray('hello');
chackArray(true);
chackArray(9);
chackArray(arr);
chackArray({});

//6 amon akti function make korte hobe(function name cloning) jekhane akti input thakbe. input a je array pass korbe setai ai function print korbe

function cloning(inp) {
  let cloned = [...inp]
  console.log(cloned);
}
cloning([1, 2, 3, 4, [5, 6, 7], 8, 9]);

let arr1 = [1, 23, 4, 5, 6, 7,];
let arr2 = [1, 3, 76, 766, 722,];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 7 amon kati function make korte hobe jetar 2 ti inpute thakbe first input hobe array 2nd input hobe array theke koiti element apni array hisabe return chan.

function getter(inp, get = 1) {
  let cloned = [];
  for (let i = 0; i < get; i++) {
    cloned.push(inp[i]);
  }
  console.log(cloned);
}
getter([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);

// 8 amon akti function make ai function akti parameter thakbe array hisabe, ai function ar inpute je array thake function return korbe string separet by , + or ' ' space.
function joiner(inp) {
  console.log(inp.join('+'));
}
joiner(['jahir', 'mijan']);

// 9 how many waye to create an Object
let a1 = {}  // 1 objhect literal
let a2 = Object.caller(null); // 2 by using object create method

function funname() { // 3 this is function object
  this.name = 'jahir';
}
let obj3 = new funname();
console.log(obj3); // funname {name: 'jahir'}

class abcd { //4 this is an array
  constructor() { };
  a = 12;
}
let ans = new abcd();
console.log(ans); // abcd {a: 12}

// hof = higher order function
function abcde(inp1) {
  return function (inp2) {
    return inp1 + inp2;
  }
}

console.log(abcde(10)(30));


// Objects - access loop
// freeze, this call apply bind 