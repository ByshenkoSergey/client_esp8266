import { BrowserRouter } from "react-router-dom";
import { Nawbar, Manual_start, Scheduller } from './pages/index.ts'

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 w-full h-full'>
        <Nawbar />
        <Manual_start />
        <Scheduller />
      </div>
    </BrowserRouter>
  )
}

export default App
