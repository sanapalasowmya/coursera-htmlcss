var x="Hello World";
var a=function(){
	x="message"
	console.log("Inside a "+x);
	b();
}
function b(){
	console.log("Inside b "+x);
}
a();
console.log(b);
b.version="b.0.12.0";
console.log(b.version);
console.log(b.toString());
function makeMul(mul){
	var myfun=function(x){
		return mul*x;
	};
	return myfun;
}
var m=makeMul(3);
console.log(m(100));

// passing functiond as arguments
function dom(x,oper){
	return oper(x);
}
console.log(dom(5,m));
function Circle(radius){
	this.radius=radius;
	console.log(this)
	console.log(radius);
	this.getArea=function(){
		return Math.PI*Math.pow(this.radius,2);
	};
}
var mycir=new Circle(10);
console.log(mycir.getArea());
// console.log(Circle(10));




var lic={
	radius:10,
	getArea:function(){
		console.log(this);
		return Math.PI*Math.pow(this.radius,2);
	}
	}
console.log(lic.getArea());
var w={
	radius:10,
	getArea:function(){
		var self=this
		console.log(this);
		var incr=function(){
			self.radius=20;
		}
		incr();
		console.log(this.radius);
		return Math.PI*Math.pow(this.radius,2);
	}
};
console.log(w.getArea());
var a=Array();
a[0]=90;
a[3]=12;
console.log(a);