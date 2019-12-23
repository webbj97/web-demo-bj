const inp = [
    ['foo', 'bar'],
    ['baz', 42]
];
var obj = {}
for(key of inp){
    obj[key[0]] = key[1]
}
console.log('obj:', obj);

