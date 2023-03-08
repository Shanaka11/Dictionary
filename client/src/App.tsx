import { 
  QueryClient, 
  QueryClientProvider 
} from 'react-query'
import {
  Routes,
  Route
} from "react-router-dom"
import { ProtectedRoute } from './auth'
import { Header } from './components/Header'
import { DictationPage } from "./pages"
import HomePage from './pages/HomePage'
import WordsPage from './pages/WordsPage'

const queryClient = new QueryClient()

function App() {

  return (

    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route 
          path='/dictation' 
          element={
            <ProtectedRoute>
              <DictationPage />
            </ProtectedRoute>
          } 
        />
        <Route
          path='/words'
          element={
            <ProtectedRoute>
              <WordsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </QueryClientProvider>
  )
}

export default App