import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from './components/Header'
import { DictationPage } from "./pages"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Header />
        <DictationPage />    
    </QueryClientProvider>
  )
}

export default App