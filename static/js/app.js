// Select input field
var idSelect = d3.select("#selDataset");

// Read in the JSON data
d3.json("data/samples.json").then((data => {