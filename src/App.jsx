import { Navbar, Home,} from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext, useState } from 'react';

export const myContext = createContext(null);

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-[100vh] bg-color'>
        <Navbar />

        <myContext.Provider value={{ selectedProducts, setSelectedProducts }}>
          <Home />
        </myContext.Provider>
      </div>
    </QueryClientProvider>
  )
}

export default App
