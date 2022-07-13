document.addEventListener('DOMContentLoaded', function () {




    // Chart #1

    let data1 = {
        // A labels array that can contain any sort of values
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        // Our series array that contains series objects or in this case series data arrays
        series: [
            [5, 2, 4, 2, 0]
        ]
    };

    new Chartist.Line('#chart1', data1);





    // Chart #2 multiple lines with some options

    let data2 = {
        // A labels array that can contain any sort of values
        labels: ['01/2022', '02/2022', '03/2022', '04/2022', '05/2022', '06/2022', '07/2022'],
        // Our series array that contains series objects or in this case series data arrays
        series: [
            [5, 10, 14, 19, 15, 12, 6],
            [6, 8, 12, 16, 21, 17, 11],
            [5, 9, 13, 17, 17, 13, 9],
            [11, 13, 18, 22, 25, 30, 19]
        ]
    };

    let options2 = {
        showPoint: false,

        lineSmooth: false,

        axisX: {
            showGrid: false
        }
    };

    new Chartist.Line('#chart2', data2, options2);





    // Chart #3

    var data3 = {
        // A labels array that can contain any sort of values
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        // Our series array that contains series objects or in this case series data arrays
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    };

    var options3 = {
        seriesBarDistance: 15
    };

    //use css breakpoints to make charts responsive
    var responsiveOptions3 = [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
            seriesBarDistance: 10,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value;
                }
            }
        }],
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar('#chart3', data3, options3, responsiveOptions3);





    // Chart #4

    let data4 = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        // Using the series objects instead of the arries, allows series to be be named
        series: [{
            name: 'series-1',
            data: [5, 2, -4, 2, 0, -2, 5, -3]
        }, {
            name: 'series-2',
            data: [4, 3, 5, 3, 1, 3, 6, 4]
        }, {
            name: 'series-3',
            data: [2, 4, 3, 1, 4, 5, 3, 2]
        }]
    };

    let options4 = {
        fullWidth: true,
        // Within the series options you can use the series names
        // to specify configuration that will only be used for the
        // specific series.
        series: {
            'series-1': {
                lineSmooth: Chartist.Interpolation.step()
            },
            'series-2': {
                lineSmooth: Chartist.Interpolation.simple(),
                showArea: true
            },
            'series-3': {
                showPoint: false
            }
        }
    };

    let responsiveOptions4 = [
        // You can even use responsive configuration overrides to
        // customize your series configuration even further!
        ['screen and (max-width: 320px)', {
            series: {
                'series-1': {
                    lineSmooth: Chartist.Interpolation.none()
                },
                'series-2': {
                    lineSmooth: Chartist.Interpolation.none(),
                    showArea: false
                },
                'series-3': {
                    lineSmooth: Chartist.Interpolation.none(),
                    showPoint: true
                }
            }
        }]
    ];

    new Chartist.Line('#chart4', data4, options4, responsiveOptions4);

});