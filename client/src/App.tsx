import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './auth'
import Login from './auth/Login'
import { Header } from './components/Header'
import { ToastProvider } from './components/Toast'
import { DictationPage } from "./pages"

const queryClient = new QueryClient()

function App() {

  return (
    <ToastProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
            {/* <Header />
            <DictationPage />     */}
            <Login />
        </QueryClientProvider>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App