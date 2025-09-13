const fs = require('fs');
//fs is an async funtion in node.js , it needs a callback function or async function 

let ans = fs.readFileSync('a.txt', 'utf-8');
ans = ans.replace(/\s+/g, ' ').trim();
console.log(ans);

fs.writeFileSync('a.txt', ans);



// other promisified approach 

fs.readFile('a.txt', 'utf-8')
    .then(data => data.replace(/\s+/g, ' ').trim())
    .then(ans => {
        console.log(ans)
        return ans
    })
    .then((ans) => fs.writeFile('a.txt', ans));
