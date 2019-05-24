const initialState = {
  username: '',
  id: null
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_ID = 'UPDATE_ID'

export function updateUsername(username) {
	return {
		type: UPDATE_USERNAME,
		payload: username
	}
}

export function updateId(id) {
	return {
		type: UPDATE_ID,
		payload: id
	}
}

export default function reducer(state = initialState, action){
  const {type, payload} = action
  switch (type) {
    case UPDATE_USERNAME:
      return {...state, username: payload}
    case UPDATE_ID:
      return {...state, id: payload}
    default:
      return state;
  }
}