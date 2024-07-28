import { Dashboard } from "./pages/dashboard"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App(){
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
  </div>
}

export default App