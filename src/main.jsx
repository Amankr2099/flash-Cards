import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ContextProvider} from './Components/ContextAPI/Context.jsx'
import { UserProvider } from './Components/ContextAPI/userContext.jsx'
import { CardProvider } from './Components/ContextAPI/cardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CardProvider>
         <App />
      </CardProvider>
    </UserProvider>
  </React.StrictMode>, 
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>, 
// )
