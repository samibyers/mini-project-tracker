//header

function countTime () {
    console.log("second")
    var currentTime = moment().format("ll [at] LTS")
    $("#currentTime").text(currentTime)
}
setInterval(countTime, 1000)