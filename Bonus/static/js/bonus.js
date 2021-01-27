// from data.js
var tableData = data;

// console.log(tableData)
var tbody = d3.select("tbody");
d3.select("table").attr("class", "table table-striped");

function Tablerender(tableData2) {
    console.log(tableData2);
    var tbody = d3.select("tbody");
    tbody.text("");
    for (var UFO=0; UFO < tableData2.length; UFO++) {
        // console.log(tableData[UFO]);
        var tr = tbody.append("tr");
        tr.append("td").text(tableData2[UFO].datetime)
        tr.append("td").text(tableData2[UFO].city);
        tr.append("td").text(tableData2[UFO].state)
        tr.append("td").text(tableData2[UFO].country)
        tr.append("td").text(tableData2[UFO].shape)
        tr.append("td").text(tableData2[UFO].durationMinutes)
        tr.append("td").text(tableData2[UFO].comments)
    }
};

Tablerender(tableData)

// tableData.forEach(function(UFOSighting) {
//       console.log(UFOSighting);
//       var tr = tbody.append("tr")
//   tr.append("td").text(UFOSighting.datetime)
//   tr.append("td").text(UFOSighting.city)
//   tr.append("td").text(UFOSighting.state)
//   tr.append("td").text(UFOSighting.country)
//   tr.append("td").text(UFOSighting.shape)
//   tr.append("td").text(UFOSighting.durationMinutes)
//   tr.append("td").text(UFOSighting.comments)
// });

// tableData.forEach(function(UFOSighting) {
//       console.log(UFOSighting);
//       var row = tbody.append("tr");
//     });

var button = d3.select("#filter-btn")
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var table = d3.select("table");
    // table.html("");
    var inputElement1 = d3.select("#datetime");
    var inputValue1 = inputElement1.property("value");
    console.log(inputValue1)
    var inputElement2 = d3.select("#city");
    var inputValue2 = inputElement2.property("value");
    console.log(inputValue2);
    var inputElement3 = d3.select("#state");
    var inputValue3 = inputElement3.property("value");
    console.log(inputValue3)
    var inputElement4 = d3.select("#country");
    var inputValue4 = inputElement4.property("value");
    console.log(inputValue4)
    var inputElement5 = d3.select("#shape");
    var inputValue5 = inputElement5.property("value");
    console.log(inputValue5)
    // console.log(tableData);
    var filtered1 = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue1);
    var filtered2 = filtered1.filter(UFOsighting => UFOsighting.city === inputValue2);
    var filtered3 = filtered2.filter(UFOsighting => UFOsighting.state === inputValue3);
    var filtered4 = filtered3.filter(UFOsighting => UFOsighting.country === inputValue4);
    var filtered5 = filtered4.filter(UFOsighting => UFOsighting.shape === inputValue5);
    // console.log(filtered);
    // tbody.html("");
    Tablerender(filtered5);

// Tablerender(filtered)

};


