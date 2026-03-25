const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  // Write your code here
	let res=[]
	let subarr=[]
	let sum=0;
	for(let num of arr){
		if(sum+num>n){
			res.push(subarr);
			subarr=[num]
			sum=num
		}
		else{
			subarr.push(num)
			sum+=num;
			}
	}
	if (subarr.length > 0) {
    res.push(subarr);
  }
  return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
