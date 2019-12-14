

console.log(1)
console.log(2)
console.log(3)
var promesa1=new Promise((resolve,reject)=>{
	var random1=Math.round(Math.random()*10);
	var random2=Math.round(Math.random()*10);
	var suma=random1+random2;
	setTimeout(function(){
		resolve()
	},5000)
})
.then(()=>{
	console.log("èxtio");
})
.catch(()=>{
	console.log("error");
})

console.log(4)
console.log(5)
console.log(6)
console.log(7)