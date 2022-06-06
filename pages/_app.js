import { Provider, useDispatch, useSelector } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../store'

import '../styles/reset.scss'
import '../styles/globals.scss'
import AuthProvider from "../components/auth/AuthContext"

function MyApp({ Component, pageProps }) {
  const store = useStore()
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>

      </PersistGate>
    </Provider>
  )
}

export default MyApp
