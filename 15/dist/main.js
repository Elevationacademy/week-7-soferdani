// const { futimesSync } = require("fs")

$("#push").on("click", function () {
    let word = $("#valFromUesr").val()
    $("#valFromUesr").val("")
    pushToDb(word)
    loadPage ()
})

const loadPage = async function () {
    $("#insertHere").empty()
    let data = await $.get("/get")
    data.forEach(d => {
        $("#insertHere").append(`<p>${d.word}</p>`)
    })
}

const pushToDb = async function (word) {
    const res = await $.post('/post', {word})
}

loadPage()