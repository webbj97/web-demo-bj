// ObjServer.prototype.walk = function (data) {
//     Object.keys(data).forEach(key => {
//         console.log(key)
//     })
// }
// ObjServer.prototype.test = '1'

// function ObjServer (data){
//     this.data = data
//     console.log(this,'this')
//     this.walk(data)
// }

// let obj = {
//     name: 'yuguahng',
//     age: '123'
// }

// var aa = new ObjServer(obj)
// console.log(aa.walk(obj))
// ObjServer(obj)
Observer.prototype = {
    walk: function (data) {
        let self = this;
        Object.keys(data).forEach((key) => {
            console.log(this)
            // console.log(key);
        })
    }
}

let obj = {
    name: '12',
    age: '23'
}
function Observer(data) {
    this.data = data;
    console.log(this)
    console.log(this.walk)
    // this.walk(data);
}
Observer(obj)

