import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'

const Chart = () => {

    const [dataSet, setDataSet] = useState()
    const [data, setData] = useState({
        labels:["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"],
        datasets: [
            {
              label: 'Rainfall',
              lineTension: 0.5,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: []
            }
          ]
    })
    useEffect(() => {
        //  setDataSet([100,200,300,50,100,90,80])
        let value = data.datasets
        value[0].data = [100,200,300,50,100,90,80]
        setData({...data, data:value})
    }, [])

    console.log(data)
    return (
        <div>
            <Line
                data={data}
                options={{
                    title:{
                      display:true,
                      text:'Average Rainfall per month',
                      fontSize:20
                    },
                    legend:{
                      display:false,
                      position:'right'
                    }
                  }}
            />
        </div>
    )
}

export default Chart
