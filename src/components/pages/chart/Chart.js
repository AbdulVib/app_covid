import React, { useContext, useEffect } from 'react'

import AppContext from '../../context/context';

//chaet
import { Line, Bar } from 'react-chartjs-2';
// import { Doughnut } from 'react-chartjs-2';

import styles from './Chart.css'

export default function Chart() {
    const { state, dailyData } = useContext(AppContext)
    
    useEffect(() => {
        dailyData()
    }, [])
    

    let reportsList = []
    let confirmList = []
    let deathList = []
    
    if(state.dailyData.length){
        state.dailyData.map(i => {
            reportsList.push(i.reportDate)
            confirmList.push(i.confirmed.total)
            deathList.push(i.deaths.total)
        })
    }

    let reportsChangeList = ''
    let confirmChangeList = ''
    let deathChangeList = ''
    let countryChangeName = ''
    let reportsRecovered = ''

    if(state.singleCountry.length){
        state.singleCountry.map(i => {
            reportsChangeList = (i.lastUpdate)
            confirmChangeList = (i.confirmed.value)
            deathChangeList = (i.deaths.value)
            countryChangeName = (i.recovered.detail)
            reportsRecovered = (i.recovered.value)
        })
    }

    // console.log(reportsChangeList, 'reportsChangeList')
    // console.log(confirmChangeList, 'confirmChangeList')
    // console.log(deathChangeList, 'deathChangeList')
    // console.log(countryChangeName, 'countrychange')
    // console.log(reportsRecovered, ' recoverd')

    // console.log(deathList, ' reportss')

    // if(state.singleCountry){
    //     console.log('hello')
    //     console.log(state.singleCountry.confirmed.value, ' state')
    // }else{
    //     console.log('none')
    // }

    const LineChart = (
      state.dailyData.length ?  <Line 
            data={{
                labels: reportsList.map(i => i),
                datasets: [ {
                    // data: state.singleCountry ? state.singleCountry.confirmed.value : confirmList.map(i => i),
                    data: confirmList.map(i => i),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: deathList.map(i => i),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                } ]
            }} /> : null
    )

    const BarChart = (
      state.singleCountry.length ?  <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [ 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],
                    data: [ confirmChangeList, reportsRecovered, deathChangeList ]
                }]
            }}  
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${ countryChangeName.slice(countryChangeName.indexOf('/') + 1).split('/')[4] }`}
                // title: { display: true, text: `Current state in ${ countryChangeName }`}
            }}  
        /> : null
    )

    console.log(state, ' state')

    // if(state.dailyData.length){
    //     state.dailyData.map(i => {
    //         const { confirmed, deaths, reportDate } = i
    //         console.log(confirmed.total, ' confirmed')
    //         console.log(deaths.total, ' deaths')
    //         console.log(reportDate, ' date')
    //         console.log('=======================================')
    //     })
    //     // console.log('hello ')
    // }
    // else{
    //     console.log('nooooooooooooooooooooo')
    // }

    return (
        <div className={ styles.ChartContainer }>
            { state.singleCountry.length ? BarChart : LineChart }
        </div>
    )
}
