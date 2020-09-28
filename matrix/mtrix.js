let m = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];

for (i = 0; i < m.length; i++) {
	for (j = 0; j < m[i].length; j++) {
		// console.log(m[i][j]);
	}
}

const get = function (matrix, rowNum, colNum) {
	return matrix[rowNum][colNum];
};

// get(1,1)

const printFunc = function (matrix) {
	for (i = 0; i < matrix.length; i++) {
		let line = "";
		for (j = 0; j < matrix[i].length; j++) {
			line += matrix[i][j] + "\t";
		}
		console.log(line);
	}
};

// printFunc (m)

let g = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];

const printRow = function (matrix, rowNum) {
	let line = "";
	for (i = 0; i < matrix[rowNum].length; i++) {
		line += matrix[rowNum][i] + "\t";
	}
	console.log(line);
};

printRow(g, 2);

const alter = function (matrix, rowNum, colNum, valToUpdate) {
    matrix[rowNum][colNum] = valToUpdate
    console.log(matrix[rowNum][colNum]);
};

alter(g, 0, 0, "dani")
console.log(g);