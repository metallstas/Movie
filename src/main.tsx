import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/App'
import './main.css'

import { store } from './app/store'
import { CssBaseline } from '@mui/material'
import ToggleColorMode from './context/ToggleControlMode'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <ToggleColorMode>
        <CssBaseline />
        <App />
      </ToggleColorMode>
    </Provider>
)
