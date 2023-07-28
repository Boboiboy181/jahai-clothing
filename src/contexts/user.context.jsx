import { createContext, useEffect, useReducer } from 'react'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../Utils/firebase/firebase.utils'
import { createAction } from '../Utils/reducer/reducer.utils'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null
})

const USER_ACTION = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandle type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const { currentUser } = state
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION.SET_CURRENT_USER, user))
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
