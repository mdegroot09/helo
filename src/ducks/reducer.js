const initialState = {
  data: ''
}

const UPDATE_DATA = 'UPDATE_DATA'

export function updateData(data) {
	return {
		type: UPDATE_DATA,
		payload: data
	}
}

export default function reducer(state = initialState, action){
  const {type, payload} = action
  switch (type) {
    case UPDATE_DATA:
      const {data} = payload
      return {...state, data}
    default:
      return state;
  }
}