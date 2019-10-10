// promise

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         console.log('1')
//         resolve()
//         // setTimeout(resolve, ms);
//         console.log('3')
//     });
// }

// timeout(100).then(() => {
//     console.log('2');
// }).catch(()=>{
//     console.log('error')
// });

// console.log('4')

const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject('余光测试')
    }, 3000);
})

const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(p1)
    }, 1000);
})

p2.then(res => console.log(res+'1')).catch((err) => console.log(err))