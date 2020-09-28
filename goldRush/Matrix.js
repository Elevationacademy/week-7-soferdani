/* Write your code below */
class Matrix {
	constructor(row, col) {
		this.matrix = this.generateMatrix(row, col);
	}

	generateMatrix(row, col) {  //good
        const valToInsert = "*";
        let matrix = []
		let counter = 1;
        for (let r = 0; r < row; r++) {
            let temp = []
			for (let c = 0; c < col; c++) {
				temp.push(valToInsert);
            }
            matrix.push(temp)
        }
        return matrix
	}

	print() { //good
		console.log(this.matrix);
	}

	get(rowNum, colNum) { //good
		return this.matrix[rowNum][colNum];
	}

	alter(rowNum, colNum, newVal) { //good
        
        this.matrix[rowNum][colNum] = newVal;
	}

	printRow(row) { //good
		console.log(this.matrix[row]);
	}

	printColumn(col) { //good
		let colToPrint = [];
		for (let r = 0; r < this.matrix[this.matrix.length - 1]; r++) {
			colToPrint.push(this.matrix[r][col]);
		}
		console.log(colToPrint);
    }
    
    findCoordinate(value) {
        for (let r = 0; r < this.matrix.length; r++){
            for (let c = 0; c < this.matrix[r].length; c++){
                if (this.matrix[r][c] === value) {
                    return {r,c}
                }
            }
        }
    }   

}

// module.exports = Matrix