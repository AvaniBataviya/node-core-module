const url = require("url");

const myUrl = new URL(
  "https://www.google.com:3000/search?q=if+file+exists&oq=node+js+check"
);

console.log(myUrl.href);
console.log(myUrl.toString());

// host name with port number
console.log(myUrl.host);

//just hostname
console.log(myUrl.hostname);

console.log(myUrl.pathname);

//serialized quey
console.log(myUrl.search);

//param objext
console.log(myUrl.searchParams);

myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
