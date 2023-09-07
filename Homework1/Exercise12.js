//Ex.12
// Given an object. Invert it (keys become values and values become keys). If there is more than key for
// that given value create an array.



let originalObj1 = 
{
    a: '1',
    b: '2',
};

let originalObj2 = 
{
    a: '1',
    b: '2',
    c: '2'
}
let originalObj3 = 
{
    a: '1',
    b: '2',
    c: '2',
    d: '2'
}

function invertObj(obj) {
    let invertedObj = {};
    for (let key in obj)
    {
        let value = obj[key]
        if (invertedObj.hasOwnProperty(value))
        {
           if (Array.isArray(invertedObj[value]))
           {
            invertedObj[value].push(key);
           }
           else 
           {
            invertedObj[value] = Array.of(invertedObj[value], key)
           }
        }
        else
        {
            invertedObj[value] = key;
        }
    }
   
    return invertedObj;
}

console.log(invertObj(originalObj1));
console.log(invertObj(originalObj2));
console.log(invertObj(originalObj3));