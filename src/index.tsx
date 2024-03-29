import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import App from './App'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<Provider store={store}>
    <App />
</Provider>)