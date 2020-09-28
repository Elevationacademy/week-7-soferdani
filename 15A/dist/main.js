$("#push").on("click", function () {
	let word = $("#valFromUesr").val();
	$("#valFromUesr").val("");
	pushToDB(word);
	loadPage();
});

const loadPage = async function () {
	$("#insertHere").empty();
	let dataa = await $.get("/get");
	console.log(dataa);
    dataa.forEach(d => {;
		$("#insertHere").append(`<p>${d.word}</p>`);
	});
};

const pushToDB = async function (word) {
	const res = await $.post("/posta", { word });
	console.log(res);
};

loadPage();
