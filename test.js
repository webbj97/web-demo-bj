function Foo(name) {
    this.name = name;
    console.log('Foo:', this.name);
}
Foo.prototype.myName = function() {
    console.log('Foo-myName:', this.name);
};

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
    console.log('Bar:', this.label)
}
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function() {
    console.log('Bar-myLabel:',this.label+1)
    this.label+='1'
    return this.label;
};
var a = new Bar("a", "obj a");
var b = new Bar("b", "obj b");
a.myName(); // "a"
a.myLabel(); // "obj a"
console.log('---')
b.myName(); // "a"
b.myLabel(); // "obj a"