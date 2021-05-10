// SELECT FIELDS & DIVS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// FUNCTION #1 of 4
function buildCharts(patientID) {

    // READ & INTERPRET THE DATA
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Read in the JSON data
    d3.json("samples.json").then((data => {
        console.log(data)

        // Define samples
        var samples = data.samples
        console.log(samples[0])

        // Filter by patient ID
        var filteredSample = samples.filter(bacteriaInfo => bacteriaInfo.id === patientID)[0]

        // BAR CHART - NOTE: do console logs to check
        // Grab sample_values for the bar chart
        var sample_values = filteredSample.sample_values

        // Use otu_ids as the labels for bar chart
        var otu_ids = filteredSample.otu_ids

        // use otu_labels as the hovertext for bar chart
        var otu_labels = filteredSample.otu_labels

        // Filter for top 10 otu-ids
        var top_ten = otu_ids.filter()

        // BUBBLE CHART
        // Create the trace
        var trace1 = {
            // Use otu_ids for the x values
            x: otu_ids,
            // Use sample_values for the y values
            y: sample_values,
            // Use otu_labels for the text values
            text: otu_labels,
            mode: 'markers',
            marker: {
                // Use otu_ids for the marker colors
                color: otu_ids,
                // Use sample_values for the marker size
                size: sample_values
            }
        };

        var data = [trace1];

        // Define plot layout
        var layout = {
            title: "Belly Button Samples",
            xaxis: { title: "OTU IDs" },
            yaxis: { title: "Sample Values" }
        };

        // Display plot
        Plotly.newPlot('bubble', data, layout)

        // GAUGE CHART
        // SAMPLE FROM PLOTLY DOCUMENTATION
        // var data = [
        //     {
        //         domain: { x: [0, 1], y: [0, 1] },
        //         value: 270,
        //         title: { text: "Speed" },
        //         type: "indicator",
        //         mode: "gauge+number"
        //     }
        // ];

        // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        // Plotly.newPlot('myDiv', data, layout);

        // DISPLAY SAMPLE METADATA (1 person's demographic data)

        // DISPLAY KEY-VALUE PAIRS FROM METADATA JSON OBJECT ON PAGE

        // UPDATE ALL PLOTS ANY TIME A NEW SAMPLE IS SELECTED
    }))


};

// FUNCTION #2 of 4
function populateDemoInfo(patientID) {

    var demographicInfoBox = d3.select("#sample-metadata");

    d3.json("samples.json").then(data => {
        console.log(data)
    })
}

// FUNCTION #3 of 4
function optionChanged(patientID) {
    console.log(patientID);
    buildCharts(patientID);
    populateDemoInfo(patientID);
}

// FUNCTION #4 of 4
function initDashboard() {
    var dropdown = d3.select("#selDataset")
    d3.json("samples.json").then(data => {
        var patientIDs = data.names;
        patientIDs.forEach(patientID => {
            dropdown.append("option").text(patientID).property("value", patientID)
        })
        buildCharts(patientIDs[0]);
        populateDemoInfo(patientIDs[0]);
    });
};

initDashboard();





