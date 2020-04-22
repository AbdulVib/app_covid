import React, { useContext, useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import AppContext from '../../context/context'

import styles from './CountryPicker.css'

export default function CountryPicker() {

    const { state, countries, singleCountry } = useContext(AppContext)

    const [ country, setCountry ] = useState('')

    useEffect(() => {
        countries();
        // console.log('hello world')
    }, [])
   
    useEffect(() => {
        if(country.length){
            // console.log('hello')
            singleCountry(country)
            // console.log(state, ' inside state')

            // setFilterCountry(singleCountry(country))
            // console.log('handle succss')
        }
        
    }, [ country ])

    //
    const handleChange = e => {
        if(e.target.value === 'global'){
            console.log('suceess')
        }
        setCountry(e.target.value)
        // co
    }
    

    // country.length && singleCountry(country)


    // console.log(state, ' outside-state')
    // console.log(country, ' state country')
    return (
        <div>
            <select onChange={ handleChange } style={{ width:'250px'}}>
            <option value="">Global</option>
                {
                    state.countries.length && state.countries.map(i => <option key={ i.name } value={ i.name }>{ i.name }</option> )
                }
            </select>
        </div>
        // <FormControl className={ styles.FormControl }>
        //     <NativeSelect defaultValue="" onChange={ handleChange }>
        //         <option value="">Global</option>
        //         {
        //             state.countries.length && state.countries.map(i => <option key={ i.name } value={ i.name }>{ i.name }</option> )
        //         }
        //     </NativeSelect>
        // </FormControl>
    )
}
