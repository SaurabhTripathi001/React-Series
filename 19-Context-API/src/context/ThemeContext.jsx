//contextAPI
//steps
//1. Create Karo Context
//2.Provide data
//3.use data

import React, { createContext, useState } from 'react'

//Creating Context
export const themeDataContext = createContext();

const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light')
  return (
    // as ThemeContext is parent of App so showing children of Themecontext i.e app through props
    <div>
        {/* Providing Data And using in navbar */}
        <themeDataContext.Provider value={[theme,setTheme]}>
            {props.children}
        </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext