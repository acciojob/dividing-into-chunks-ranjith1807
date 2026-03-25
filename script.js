const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  // Write your code here
	let res=[]
	let arr=[]
	let sum=0;
	for(let num of arr){
		if(sum+num>n){
			res.push(arr);
			arr=[num]
			sum=num
		}
		else{
			arr.push(num)
			sum+=num;
			}
	}
	if (arr.length > 0) {
    res.push(arr);
  }
  return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
