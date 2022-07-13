document.addEventListener('DOMContentLoaded', function () {

    // 1
    let labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];

    let datasets = [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]

    let data = {
        labels: labels,
        datasets: datasets
    };

    let config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
        }
    };

    let myChart = new Chart(
        document.getElementById('canvas1'),
        config
    );





    //2
    let labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let data2 = {
        labels: labels2,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3
        }]
    };

    let config2 = {
        type: 'line',
        data: data2,
        options: {
            responsive: true,
        }
    };

    let myChart2 = new Chart(
        document.getElementById('canvas2'),
        config2
    );





    //3
    let labels3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let data3 = {
        labels: labels,
        datasets: [
            {
                label: 'Fully Rounded',
                data: [35, 12, 41, 41, 46, [15, 39], 12],
                borderColor: 'rgb(0,155,0)',
                backgroundColor: 'rgb(0,222,50)',
                borderWidth: 2,
                borderRadius: 33,
                borderSkipped: false,
            },
            {
                label: 'kinda Rounded',
                data: [15, 39, 45, 11, 26, 55, 30],
                borderColor: 'rgb(122,50,122)',
                backgroundColor: 'rgb(222,50,50)',
                borderWidth: 2,
                borderRadius: 9,
            },
            {
                label: 'not Rounded',
                data: [42, 25, 27, 11, 31, 33, 22],
                borderColor: 'rgb(0,153,220)',
                backgroundColor: 'rgb(44,44,222)',
                borderWidth: 2,
                borderRadius: 0,
            }
        ]
    };

    let config3 = {
        type: 'bar',
        data: data3,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'a random bar chart with a title',
                    color: 'rgb(211,0,211)',
                    font: {
                        size: 17
                    }
                },
                subtitle: {
                    display: true,
                    text: 'and a subtitle!!',
                    color: 'red',
                    font: {
                        size: 14,
                        weight: 'bold',
                        style: 'italic'
                    }
                }
            }
        }
    };

    let myChart3 = new Chart(
        document.getElementById('canvas3'),
        config3
    );





    // 4

    let labels4 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let data4 = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [42, -25, 27, -11, 31, -33, 22],
                borderColor: 'rgb(122,211,122)',
                backgroundColor: 'rgb(44,114,55)',
                borderWidth: 2,
                borderRadius: 4,
            },
            {
                label: 'Dataset 2',
                data: [15, -39, 45, 11, 26, -55, -30],
                borderColor: 'rgb(212,111,111)',
                backgroundColor: 'rgb(124,44,50)',
                borderWidth: 2,
                borderRadius: 4,
            }

        ]
    };

    let config4 = {
        type: 'bar',
        data: data4,
        options: {
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart'
                }
            }
        },
    };

    let myChart4 = new Chart(
        document.getElementById('canvas4'),
        config4
    );




    //5

    let labels5 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let data5 = {
        labels: labels5,
        datasets: [
            {
                label: 'My First dataset',
                data: [11, 14, 15, 12, 15, 10, 6],
                borderColor: 'rgb(123,22,22)',
                backgroundColor: 'rgb(222,44,50)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'My Second dataset',
                data: [16, 14, 15, 11, 8, 12, 15],
                borderColor: 'rgb(44,44,123)',
                backgroundColor: 'rgb(33,90,200)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'My Third dataset',
                data: [17, 12, 15, 11, 13, 6, 12],
                borderColor: 'rgb(44,100,22)',
                backgroundColor: 'rgb(33,160,22)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'My Fourth dataset',
                data: [14, 15, 21, 17, 13, 11, 14],
                borderColor: 'rgb(111,66,22)',
                backgroundColor: 'rgb(222,111,22)',
                fill: true,
                tension: 0.3
            }
        ]
    };

    let config5 = {
        type: 'line',
        data: data5,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Line Chart - Stacked Area Chart'
                },
                tooltip: {
                    mode: 'index'
                },
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    };

    let myChart5 = new Chart(
        document.getElementById('canvas5'),
        config5
    );













    function rand() {
        function basicRand() {
            return parseInt((Math.random() + 1).toString().substring(2, 3));
        }

        let b1 = basicRand();
        let b2 = basicRand();
        let b3 = basicRand();
        let b4 = basicRand();

        let superRand = ((((b1 + b2) * (b3 + 1)) / (b4 + 1)) % 10) + 1;

        console.log('1: ' + b1);
        console.log('2: ' + b2);
        console.log('3: ' + b3);
        console.log('4: ' + b4);

        return superRand === 0 ? basicRand() : superRand;
    }

    document.querySelector('#chart5 div').addEventListener('click', function () {
        myChart5.data.datasets.forEach(dataset => {
            dataset.data = [rand(), rand(), rand(), rand(), rand(), rand(), rand()];
        });
        myChart5.update();
    });

    // add area charts and done

});