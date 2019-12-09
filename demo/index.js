// const a = [
//     {name: 123, title: '我',subs:[1,2]},{name: 123, title: '我',subs:[1,2]},
//     {name: 1, title: '他',subs:[1,2,3]},{name: 1, title: '你',subs:[1]},
// ]
// function unionTitle(a){
//     return new Promise((resolve, reject) => {
//         resolve(a);
//     }).then((val)=>{
//         var res = new Map()
//         return val.filter(a => {
//             return !res.has(a.title) && res.set(a.title, 1);
//         })
//     }).then((val)=>{
//         var min = val[0].subs
//         val.forEach(e => {
//             if(e.subs.length < min.length){
//                 min = e
//             }
//         });
//         return min
//     })
// }

// function* aaa(){
//     yield '111'
//     yield '222'
//     yield console.log('3')
//     yield console.log('4')
//     return console.log('5')
// }
// var res = aaa()
// res.next()
// res.next()
// res.next()
// res.next()
// res.next()
// res.next()

function* demo() {
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError
  
    console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK
}
var demoData = demo()
demoData.next()
demoData.next()
demoData.next()