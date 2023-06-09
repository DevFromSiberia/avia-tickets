import { createRoot } from 'react-dom/client'
import App from './app/App'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
)
