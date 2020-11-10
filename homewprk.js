let am = ""
am = 30;
alert (am)

let num = 6, S = 'string', B = true, U = undefined, N = null, O= {name:"Johns"};
alert(S)
alert(B)
alert(U)
alert(N)
alert(num)
console.log(O.name)

let age = prompt("How old are you?");

alert(`You age is ${age}`)
if(age > 0 && age <= 17) {
    alert('You are young man')
} if(age > 17 && age < 120) {
    alert('You are old man')
} else {
    alert('Wrong age')
}