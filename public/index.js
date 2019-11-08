const monthyPayments = (event) => {
    let principal = document.forms["myform"]["prince"].value;
    const deposit = document.forms["myform"]["Deposit"].value;
    const year = document.forms["myform"]["years"].value;
    const interest = document.forms["myform"]["interest"].value;
    principal = principal - deposit;
    if(principal !== "" && deposit !== "" && year !== "" && interest !== ""){
        const r = (interest / 12) / 100;
        const N = year * 12;
        const numarator = (r * principal);
        const denominotor = 1 - (1 + r) ** -N; 
        const sum = numarator / denominotor;
        console.log(sum);
        calculateInterest(principal, r,N, sum);
    }else{
        alert("field missing");
    }
}

const calculateInterest = (inicialAmount,monthlyInterest,period, monthly) => {
    const interestPaid = [];
    const year = [];
    const inicialAmountPaid = [];
    let count = 1;

    for(let i = 12; i <= period;i += 12){
        let firstPart = (inicialAmount * monthlyInterest ) - monthly;
        let numarator = (1 + monthlyInterest ) ** i - 1;
        let lastPart = monthly * i;
        let middle = numarator / monthlyInterest;
        let answer = (firstPart * middle) + lastPart;
        console.log(answer);
        const inincilPaid = lastPart - answer;
        inicialAmountPaid.push((inincilPaid / lastPart) * 100);
        interestPaid.push((answer / lastPart) * 100);
        year.push(count);
        count++;
   }
  /*  var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: year,
                datasets: [{
                    label: 'amount paid towards interest',
                    data: interestPaid,
                    fill: false,
                    backgroundColor: 'rgba(0, 255, 0, 0.8)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    barThickness: 20
                },{
                    label: 'amount paid towards incial amount',
                    data: inicialAmountPaid,
                    fill: false,
                    backgroundColor: 'rgba(0, 0, 255, 0.8)',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 1,
                    barThickness: 20
                }]
            },
            options: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: "red",
                        fontSize: 23
                    }
                },
                scales: {
                    yAxes: [{
                        fontSize: 18,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                }
            }
        });*/
}