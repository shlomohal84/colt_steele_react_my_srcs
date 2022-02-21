// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
const data =
	[
		{ id: 4, name: "Charmander", type: "fire", experience: 62 },
		{ id: 7, name: "Squirtle", type: "water", experience: 63 },
		{ id: 11, name: "Metapod", type: "bug", experience: 72 },
		{ id: 12, name: "Butterfree", type: "flying", experience: 178 },
		{ id: 25, name: "Pikachu", type: "electric", experience: 112 },
		{ id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
		{ id: 94, name: "Gengar", type: "poison", experience: 225 },
		{ id: 133, name: "Eevee", type: "normal", experience: 65 },
	]

const player1 = { id: 1, deck: [], isWinner: false };
const player2 = { id: 2, deck: [], isWinner: false }

function random(arr) { return Math.floor(Math.random() * arr.length) }

function shuffleDecks() {
	const temp = data.map(elm => { return { ...elm } });
	for (let i = 0; i < data.length; i++) {
		let randomIdx
		if (player1.deck.length < 4) {
			randomIdx = random(temp);
			player1.deck.push(temp[randomIdx]);
			temp.splice(randomIdx, 1)
		} else {
			randomIdx = random(temp);
			player2.deck.push(temp[randomIdx]);
			temp.splice(randomIdx, 1)
		}
	}
}
shuffleDecks()
console.log(player1)
console.log(player2)
export { player1, player2 }