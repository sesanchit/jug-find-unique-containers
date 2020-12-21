function Solution(A, target) {
	A.sort((a, b) => {
		return a - b;
	});
	let uniqueElements = [];
	FindUniqueElements(0, 0, target, uniqueElements, A);
}

function FindUniqueElements(startIndex, sum, target, uniqueElements, arr) {
	if (sum == target) {
		console.log(uniqueElements);
		return;
	}

	for (let i = startIndex; i < arr.length; i++) {

		if (sum + arr[i] > target)
			continue;

		if (i == 1 &&
			arr[i] == arr[i - 1] &&
			i > startIndex)
			continue;

		uniqueElements.push(arr[i]);

		FindUniqueElements(i + 1, sum + arr[i],
			target, uniqueElements, arr);

		uniqueElements.pop();
	}
}

console.log("ARRAY --> [10,5,15,20] || TARGET --> 20");
Solution([10, 5, 15, 20], 20);
console.log("ARRAY --> [100,50,10,200,75,75, 80, 70] || TARGET --> 150");
Solution([100, 50, 10, 200, 75, 75, 80, 70], 150);
