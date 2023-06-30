import '@/styles/globals.css'
import '@/styles/markdown.css'

import { AuthProvider } from '@/state/Context';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
