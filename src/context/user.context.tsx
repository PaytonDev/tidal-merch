import React, { createContext, ReactNode, useState } from 'react'

interface IProps {
  children?: ReactNode
}

interface IUserContext {
  currentUser: any
  setCurrentUser: any
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: () => {},
})

export const UserProvider = ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
