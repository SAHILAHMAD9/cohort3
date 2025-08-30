var cnt = 0;
// for (var i = 0; i < 10; i++){
//    setTimeout(function () {
//     console.log(i); 
//    },i*1000)
// }
let counter = 0;


const updateCounter = () => {
    counter++;
    console.log(counter);
};

setInterval(updateCounter, 1000);
