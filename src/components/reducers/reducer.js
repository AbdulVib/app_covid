export const initialState = {
    fetchData: null,
    dailyData: [],
    countries: [],
    singleCountry: []
  };
  

const reducer = (state , action) => {
    switch (action.type) {

        case 'SET_POSTS':
            // console.log('fetched')
            return {
                ...state,
                fetchData: action.payload
            }
        case 'SET_DAILY_DATA':
            // console.log('fetched')
            return {
                ...state,
                dailyData: [...state.dailyData, ...action.payload]
            }
        case 'SET_COUNTRIES':
            // console.log('fetched')
            return {
                ...state,
                countries: [...state.countries, ...action.payload.countries]
            }
        case 'SET_SINGLE_COUNTRY':
            // console.log('fetched')
            return {
                ...state,
                dailyData: [ action.payload ],
                singleCountry: [ action.payload ]
                // singleCountry: [ action.payload ]
            }

        default:
            return state
    }
}

export default reducer
