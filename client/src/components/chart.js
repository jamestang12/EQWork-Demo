import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'

const Chart = ({statsDaily, stateTitle}) => {

    const [title, setTitle] = useState("")
    const [dataSet, setDataSet] = useState()
    const [data, setData] = useState({
        labels:["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"],
        datasets: [
            {
              label: 'Rainfall',
              lineTension: 0.5,
              backgroundColor: 'rgba(63,81,181,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: []
            }
          ]
    })
    useEffect(() => {
        let value = data.datasets
        value[0].data = statsDaily
        setData({...data, data:value})
        setTitle(`Daily stats: ${stateTitle}`)
    }, [statsDaily, stateTitle])

    return (
        <div>
            <Line
                data={data}
                options={{
                    title:{
                      display:true,
                      text:title,
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
