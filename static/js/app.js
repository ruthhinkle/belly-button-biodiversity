// SELECT FIELDS & DIVS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Select input field
var idSelect = d3.select("#selDataset");

// select the user input field
var idSelect = d3.select("#selDataset");

// select the demographic info div's ul list group
var demographicsTable = d3.select("#sample-metadata");

// select the bar chart div
var barChart = d3.select("#bar");

// select the bubble chart div
var bubbleChart = d3.select("bubble");

// select the gauge chart div
var gaugeChart = d3.select("gauge");

// READ & INTERPRET THE DATA
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Read in the JSON data
d3.json("data/samples.json").then((data => {
}))
    // BAR CHART
    // Grab sample_values for the bar chart
    // Use otu_ids as the labels for bar chart
    // use otu_labels as the hovertext for bar chart

    // BUBBLE CHART
    // Use otu_ids for the x values
    // Use sample_values for the y values
    // Use sample_values for the marker size
    // Use otu_ids for the marker colors
    // Use otu_labels for the text values

// DISPLAY SAMPLE METADATA (1 person's demographic data)

// DISPLAY KEY-VALUE PAIRS FROM METADATA JSON OBJECT ON PAGE

// UPDATE ALL PLOTS ANY TIME A NEW SAMPLE IS SELECTED