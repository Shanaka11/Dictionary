import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from './components/Header'
import { ToastProvider } from './components/Toast'
import { DictationPage } from "./pages"

const queryClient = new QueryClient()

function App() {

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
          <Header />
          <DictationPage />    
      </QueryClientProvider>
    </ToastProvider>
  )
}

export default App