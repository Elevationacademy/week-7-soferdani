// const Matrix = require("./Matrix");
class GoldRush extends Matrix {
	constructor(row, col, numOfCoins) {
		super(row, col)
		this.alter(0, 0, 1);
		this.alter(row - 1, col - 1, 2)
		this.createCoins(row, col, numOfCoins = 5)
		this.player1Score = 0
		this.player2Score = 0
	}

	movePlayer(player, moveTo) {
		let playerPos = this.findCoordinate(player);
		switch (moveTo) {
			case "down":
				if (this.canYouMove(playerPos.r + 1)) {
					if (this.get(playerPos.r + 1, playerPos.c) === 'c') {
						if (player === 1) {
							this.player1Score += 10
						} else {
							this.player2Score += 10
						}
						this.alter(playerPos.r, playerPos.c, "*");
						this.alter(playerPos.r + 1, playerPos.c, player);
					}
				} else {
					break;
				}
			case "up":
				if (this.canYouMove(playerPos.r - 1)) {
					if (player === 1) {
						this.player1Score += 10
					} else {
						this.player2Score += 10
					}
					this.alter(playerPos.r, playerPos.c, "*");
					this.alter(playerPos.r - 1, playerPos.c, player);
				} else {
					break;
				}
			case "right":
				if (this.canYouMove(playerPos.c + 1)) {
					if (player === 1) {
						this.player1Score += 10
					} else {
						this.player2Score += 10
					}
					this.alter(playerPos.r, playerPos.c, "*");
					this.alter(playerPos.r, playerPos.c + 1, player);
				} else {
					break;
				}
			case "left":
				if (this.canYouMove(playerPos.c - 1)) {
					if (player === 1) {
						this.player1Score += 10
					} else {
						this.player2Score += 10
					}
					this.alter(playerPos.r, playerPos.c, "*");
					this.alter(playerPos.r, playerPos.c - 1, player);
				} else {
					break;
				}
			default:
				break;
		}
	}
	

	canYouMove(togo) {
		if (togo === -1 || this.matrix.length === togo || this.matrix[0].length === togo) {
			return false
		} else {
			return true
		}
	}

	coinGenerate(rMax,cMax) {
		//create one coin
		let rVal = Math.floor(Math.random() * rMax)
		let cVal = Math.floor(Math.random() * cMax)
		// check if this coin is good
		if (((rVal === 0 && cVal === 0) || (rVal === this.matrix.length - 1 && cVal === this.matrix[0].length - 1))) {
			return false 
		} else {
			if (this.get(rVal,cVal)=== 'c') {
				return false
			} else {
				this.alter(rVal, cVal, 'c')
			}
		}
	}

	createCoins(rMax,cMax, numOfCoins) {
		for (let i = 0; i < numOfCoins; i++) {
			if (this.coinGenerate(rMax, cMax)) {
				numOfCoins--
			} else {
				this.coinGenerate(rMax, cMax)
			}
		}
	}

}

// const board = new GoldRush(5, 5);
// board.print()

// board.print()

