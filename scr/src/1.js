let age = Symbol('name');
let name = Symbol('age');
let name1 = Symbol('name');
let obj = {
    name: 'xx',
    [age]: 18,
    [name]: 'lisi',
    [name1]: 'yy'
};
console.log(obj[name1]);