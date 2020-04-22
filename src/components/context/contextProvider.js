import React, { useReducer } from 'react';
import Context from './context'

import axios from 'axios'

//reducer
import reducer, { initialState } from '../reducers/reducer'


export default function contextProvider(props) {
    
    const [ state, dispatch ] = useReducer(reducer, initialState)

    // const getPosts = async () => {
    //     try{
    //         // dispatch({ type: 'SENDING_REQUEST' });
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await res.json()
    //         // dispatch({ type: 'REQUEST_FINISHED' })
    //         dispatch({ type: 'SET_POSTS', payload: data })
    //     }
    //     catch(err){
    //         console.log(err, ' errrrr')
    //     }
    // }

    const fetchData = _ => {
            axios.get('https://covid19.mathdro.id/api')
            .then(res => res)
            .then(res => {
                // dispatch( { type: 'SENDING_REQUEST' } )
                // dispatch( { type: 'REQUEST_FINISHED' } )
                dispatch( { type: 'SET_POSTS', payload: res.data } )
            })
    }

    const dailyData = _ => {
            axios.get('https://covid19.mathdro.id/api/daily')
            .then(res => res)
            .then(res => {
                // dispatch( { type: 'SENDING_REQUEST' } )
                // dispatch( { type: 'REQUEST_FINISHED' } )
                dispatch( { type: 'SET_DAILY_DATA', payload: res.data } )
            })
    }

    const countries = _ => {
            axios.get('https://covid19.mathdro.id/api/countries')
            .then(res => res)
            .then(res => {
                // dispatch( { type: 'SENDING_REQUEST' } )
                // dispatch( { type: 'REQUEST_FINISHED' } )
                dispatch( { type: 'SET_COUNTRIES', payload: res.data } )
            })
    }

    const singleCountry = (country) => {
            axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(res => res)
            // .then(res => res.data)
            // .then(res => console.log(res.data, ' succss'))
            .then(res => {
                dispatch( { type: 'SET_SINGLE_COUNTRY', payload: res.data } )
            })
    }

    return (
        <Context.Provider value={{ state, dispatch, fetchData, dailyData, countries, singleCountry }}>
            { props.children }
        </Context.Provider>
    )
}

