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




// Objects - access loop
// freeze, this call apply bind 