import {
  SET_USER_DOCUMENTS,
  SET_CURRENT_USER_DOCUMENTS,
} from '../../constants/document/documentConstants'

const initial_state = {
  other_user_documents: [],
  current_user_documents: [],
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_USER_DOCUMENTS:
      return (state = { ...state, other_user_documents: action.payload })
    case SET_CURRENT_USER_DOCUMENTS:
      return (state = { ...state, current_user_documents: action.payload })
    default:
      return state
  }
}