function choice(arr) {
	let index =  Math.floor(Math.random() * arr.length)
	return arr[index]
}
function remove(arr, item) {
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === item) {
			return arr.splice(i, 1)
		}
	}
	// return arr.splice(item,1)
}

export {
	choice,remove
}