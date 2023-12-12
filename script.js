function fibonacci(num) {
// your code here
	if(num==1)return 0;
	if(num==2)return 1;

	var a=0;
	var b=1;
	for(var i=3;i<=num;i++){
		var c=a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
