const labels=['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const labels2=['Mon','Tues','Wed','Thur','Fri','Sat','Sun']
      
    

export const singleData={
        labels,
        datasets:[{
            data:[25,28,15,32,28,24,26,30,33,35,32,20],
            tension:0.4,
            borderColor:'blue'
        },{
//            data:[13,23,10]
        }]
    }

export const singleData2={
        labels:['Shoes', 'Jeans','Accessories', 'Bag','T-shirts','Outwear'],
        datasets:[{
            data:[25,28,15,32,28,24,26],
            borderColor:'blue'
        },{
//            data:[13,23,10]
        }]
    }

export const userData=[
    {
        properties:{
            labels:labels2,
            datasets:[{
                data:[25,50,15,32,28,24,26],
                tension:0.4,
                borderColor:'blue',
                pointRadius:0,
            }],
            barThickness:0.2,
        },
        chartType:'Line',
        title:'Daily Income',
        value: 345
        
    },
    {
        properties:{
            labels:labels2,
            datasets:[{
                data:[25,28,15,32,28,24,26],
                tension:0.4,
                borderColor:'blue',
                backgroundColor:'rgba(255, 99, 132, 0.2)'
            }]
        },
        chartType:'Bar',
        title:'Daily Expense',
        value: 380
        
    },
    {
        properties:{
            labels:labels2,
            datasets:[{
                data:[25,30,15,32,28,36,26],
                tension:0.4,
                borderColor:'blue',
                pointRadius:0,
            }],
            barThickness:0.2,
        },
        chartType:'Line',
        title:'Weekly Income',
        value: 5380
        
    },
    {
        properties:{
            labels:labels2,
            datasets:[{
                data:[25,28,15,32,28,24,26],
                tension:0.4,
                borderColor:'blue',
                backgroundColor:'rgba(255, 99, 132, 0.2)'
            }]
        },
        chartType:'Bar',
        title:'Weekly Expense',
        value: 4320
        
    }
]