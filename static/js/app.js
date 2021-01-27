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
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // console.log(tableData);
    var filtered = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);
    // console.log(filtered);
    // tbody.html("");
    Tablerender(filtered);

// Tablerender(filtered)

};


