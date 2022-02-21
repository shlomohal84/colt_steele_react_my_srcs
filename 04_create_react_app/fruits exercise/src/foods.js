function createArr(arr) {
	let emojiValue = 127815;
	for (let i = 0; i < 10; i++) {
		let temp = String.fromCodePoint(emojiValue)
		arr.push(temp)
		emojiValue++
	}
	return arr
}


export {createArr}