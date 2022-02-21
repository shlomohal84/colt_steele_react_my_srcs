function assignHexArr() {
	let arr = []
	for (let i = 0, j = String.fromCharCode('A'.charCodeAt()); i <= 16; i++) {
		if (i < 10) {
			arr.push(i)
		} else if (i > 10) {
			arr.push(j)
			j = String.fromCharCode(j.charCodeAt() + 1)
		}
	}
	return arr
}

function randomizeHexStr(arr) {
	let str = '#'
	for (let i = 0; i < 6; i++) {
		let rand = Math.floor(Math.random() * arr.length)
		str += arr[rand]
	}
	return str
}

function populateColors() {
	let arr = []
	for (let i = 0; i < 200; i++) {
		let hexString = randomizeHexStr(assignHexArr())
		arr.push(hexString)
	}
	return arr;
}

let colors = populateColors()

function assignColor(arr) {
	let rand = Math.floor(Math.random() * colors.length)
	return arr[rand]
}

module.exports = {
	colors,
	assignColor
}