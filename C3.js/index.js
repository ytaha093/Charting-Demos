document.addEventListener('DOMContentLoaded', function () {

    c3.generate({
        // Specify where the chart will go based on css selector
        bindto: '#chart1',
        data: {
            // Specify the data to display with an array (fist index is dataset name)
            columns: [
                ['data1', 30, 200, 100, 400, 150, 150],
            ]
        }
    });

    c3.generate({
        // Specify where the chart will go based on css selector
        bindto: '#chart2',
        data: {
            // Specify the data to display with an array (fist index is dataset name)
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ],
            // each object can be configured in many ways, all can be found on wiki
            // in this case the data object has an exes that can be configured so the data knows what axis to follow
            axes: {
                data2: 'y2' // ADD
            }
        },
        axis: {
            //adding label to axis
            y: {
                label: { // ADD
                    text: 'Y AXIS LABEL!!!',
                    position: 'outer-middle'
                }
            },
            //declaring a second y axis and adding label to it
            y2: {
                show: true,
                label: {
                    text: 'Y2 Label',
                    position: 'outer-middle'
                }
            }
        }
    });

    c3.generate({
        // Specify where the chart will go based on css selector
        bindto: '#chart3',
        data: {
            // Specify the data to display with an array (fist index is dataset name)
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 140, 220, 110, 190, 325, 45]
            ],
            // Select the medium you want your data to display as (line is default)
            types: {
                data2: 'bar'
                // 'bar', 'gauge'
                // 'line', 'spline', 'step', 'area', 'area-step' are available to stack
            }
        }
    });

    c3.generate({
        // Specify where the chart will go based on css selector
        bindto: '#chart4',
        data: {
            // Specify the data to display with an array (fist index is dataset name)
            columns: [
                ['telus', 300, 350, 300, 320, 400, 310],
                ['shaw', 230, 200, 240, 210, 40, 70],
                ['rogers', 20, 22, 22, 34, 80, 130]
            ],
            types: {
                // Select the mediums you want your data to display as (spline at the end will make smooth the lines out)
                telus: 'area-spline',
                shaw: 'area-spline',
                rogers: 'area-spline'
                // 'bar', 'gauge'
                // 'line', 'spline', 'step', 'area', 'area-step' are available to stack
            },
            //If data is meant to be stacked then datasets must be grouped
            groups: [['telus', 'shaw', 'rogers']]
        }

    });

    c3.generate({
        // Specify where the chart will go based on css selector
        bindto: '#chart5',
        data: {
            // Specify the data to display with an array (fist index is dataset name)
            columns: [
                ['thing 1', 21, 32, 11, 32, 40, 22],
                ['thing 2', 23, 20, 24, 21, 40, 30],
                ['thing 3', 25, 15, 17, 11, 19, 15],
                ['thing 4', 10, 9, 11, 21, 40, 30],
                ['thing 5', 20, 22, 22, 34, 45, 55],
                ['total', 99, 98, 85, 119, 184, 152]
            ],
            // Select the mediums you want your data to display as (spline at the end will make smooth the lines out)
            types: {
                'thing 1': 'bar',
                'thing 2': 'bar',
                'thing 3': 'bar',
                'thing 4': 'bar',
                'thing 5': 'bar',
                'total': 'bar'
                // 'bar', 'gauge'
                // 'line', 'spline', 'step', 'area', 'area-step' are available to stack
            },
            // Select the color of a specific dataset
            colors: {
                total: '#acf000',
            }
        }

    });

    let chart = c3.generate({
        // Specify where the chart will go based on css selector
        bindto: '#chart6',
        data: {
            // Specify the data to display with an array (gauge only takes 1 value)
            columns: [
                ['data', 10]
            ],
            // Select the mediums you want your data to display as
            type: 'gauge',
        }
    });

    async function dothing() {

        setTimeout(function () {
            chart.load({
                columns: [['data', (((chart.data.values('data')[0] + 13) * 1.17) % 101)]]
            });

            dothing();
        }, 2200);


    }

    dothing();

});


