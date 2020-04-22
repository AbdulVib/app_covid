import React, { useContext, useEffect } from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'

import styles from './Cards.css'

import AppContext from "../../context/context";

export default function Cards() {
    const { state, dispatch, fetchData } = useContext(AppContext);
    
    useEffect(() => {
        fetchData()
    }, [])

    let getConfirmed, getDeaths, getRecovered, getLastUpdate = ''

    if(state.fetchData){
        const { confirmed, deaths, recovered, lastUpdate } = state.fetchData
        getConfirmed = confirmed.value
        getDeaths = deaths.value
        getRecovered = recovered.value
        getLastUpdate = lastUpdate
        // console.log(confirmed , ' confirmed')
        // console.log(lastUpdate , ' lastupdate')
        // console.log(recovered , ' recover')
        // console.log(deaths , ' deaths')
    }

    //county name
    let name = 'All'
    let singleCountryConfirmed, singleCountryDeath, singleCountryRecovered = ''
    if(state.singleCountry.length){
        name = state.singleCountry[0].confirmed.detail 
        singleCountryConfirmed = state.singleCountry[0].confirmed.value 
        singleCountryDeath = state.singleCountry[0].deaths.value 
        singleCountryRecovered = state.singleCountry[0].recovered.value 
    }

    // console.log(state.fetchData, ' fetch')
    console.log(singleCountryConfirmed, ' single')

    return (
        <div className={ styles.CardContainer }>
            <h1 style={{ textAlign: 'center', marginBottom: 'inherit'}}>{ state.singleCountry.length ? name.slice(name.indexOf('/') + 1).split('/')[4] : name }</h1>
            <div style={{ border: '1px solid red', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '32%', border: '1px solid grey', padding: '10px', textAlign: 'center'}}>
                    <h2>Infected</h2> <br />
                    <h4>{ getConfirmed ? <CountUp start={ 0 } end={ state.singleCountry.length ? singleCountryConfirmed : getConfirmed } duration={ 2.5 } separator="," /> : 'Loading ...' }</h4> <br />
                    <strong>{ getLastUpdate ? new Date(getLastUpdate).toDateString() : 'Loading ...' }</strong> <br />
                    <h5>Number of active cases of COVID-19</h5>
                </div>
                <div style={{ width: '32%', border: '1px solid grey', padding: '10px', textAlign: 'center'}}>
                    <h2>Recovered</h2> <br />
                    <h4>{ getRecovered ? <CountUp start={ 0 } end={ state.singleCountry.length ? singleCountryRecovered : getRecovered } duration={ 2.5 } separator="," /> : 'Loading ...' }</h4> <br />
                    <strong>{ getLastUpdate ? new Date(getLastUpdate).toDateString() : 'Loading ...' }</strong> <br />
                    <h5>Number of Recoveries from COVID-19</h5>
                </div>
                <div style={{ width: '32%', border: '1px solid grey', padding: '10px', textAlign: 'center'}}>
                    <h2>Deaths</h2> <br />
                    <h4>{ getDeaths ? <CountUp start={ 0 } end={ state.singleCountry.length ? singleCountryDeath : getDeaths } duration={ 2.5 } separator="," /> : 'Loading ...' }</h4> <br />
                    <strong>{ getLastUpdate ? new Date(getLastUpdate).toDateString() : 'Loading ...' }</strong> <br />
                    <h5>Number of deaths caused by COVID-19</h5>
                </div>
            </div>
            {/* <Grid container spacing={3} justify="center">
                <Grid item component={ Card } xs={12} md={3} className={`${ styles.Card } ${ styles.Infected }`}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Infected</Typography>
                        <Typography variant="h5">{ getConfirmed ? <CountUp start={ 0 } end={ state.singleCountry.length ? singleCountryConfirmed : getConfirmed } duration={ 2.5 } separator="," /> : 'Loading ...' }</Typography>
                        <Typography color="textSecondary">{ getLastUpdate ? new Date(getLastUpdate).toDateString() : 'Loading ...' }</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                
                <Grid item component={ Card } xs={12} md={3} className={`${ styles.Card } ${ styles.Recovered }`}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography variant="h5">{ getRecovered ? <CountUp start={ 0 } end={ state.singleCountry.length ? singleCountryRecovered : getRecovered } duration={ 2.5 } separator="," /> : 'Loading ...' }</Typography>
                        <Typography color="textSecondary">{ getLastUpdate ? new Date(getLastUpdate).toDateString() : 'Loading ...' }</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                
                <Grid item component={ Card } xs={12} md={3} className={`${ styles.Card } ${ styles.Deaths }`}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{ getDeaths ? <CountUp start={ 0 } end={ state.singleCountry.length ? singleCountryDeath : getDeaths } duration={ 2.5 } separator="," /> : 'Loading ...' }</Typography>
                        <Typography color="textSecondary">{ getLastUpdate ? new Date(getLastUpdate).toDateString() : 'Loading ...' }</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid> */}
        </div>
    )
}
