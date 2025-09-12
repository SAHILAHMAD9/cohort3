const fs = require('fs');
//fs is an async funtion in node.js , it needs a callback function or async function 

let ans = fs.readFileSync('a.txt', 'utf-8');
ans = ans.replace(/\s+/g, ' ').trim();
console.log(ans);

fs.writeFileSync('a.txt', ans);