let arrayOne=[1,2,5,3,5,5,4,5];

arrayOne.push(15,24);//add
console.log(arrayOne);
console.log(arrayOne.push(999));//lenght
console.log(arrayOne);

arrayOne.pop();//last element remove;
console.log(arrayOne);
console.log(arrayOne.pop());//last element obtain;
console.log(arrayOne);

console.log(arrayOne.shift());//first element remove
console.log(arrayOne);//first element obtain

console.log(arrayOne.unshift(77));//lenght
console.log(arrayOne);//first element add

console.log(arrayOne.includes(3));//Search
console.log(arrayOne.concat(22,33,44));//connect
console.log(arrayOne);

console.log(arrayOne.join());//join
console.log(arrayOne.join('- T -'))
console.log(arrayOne);
console.log(arrayOne.indexOf(5));//find index
console.log(arrayOne.lastIndexOf(5))//last find index
console.log(arrayOne.length)//lenght
console.log(arrayOne.slice(2,5))//2-5 secir
console.log(arrayOne.slice(undefined,7))//0-7
console.log(arrayOne.splice(2,3));// cut
console.log(arrayOne);
console.log(arrayOne.splice(2,3, 'hello', 'world', '2'));//cut and add
console.log(arrayOne);

console.log(arrayOne.sort());//a-z
console.log(arrayOne.sort((a,b)=>a-b ))//1-999, a-z


let arrayTwo=[10,20,30,40];
console.log(arrayTwo);
const result =arrayTwo.forEach((element, index, array)=>{
    console.log(element);
});
const result1 =arrayTwo.forEach((_, index)=>{
    console.log(index);
});

const result2=arrayTwo.map((item)=>{
    return item*5;
})
console.log(result2);
console.log(arrayTwo);
