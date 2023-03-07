import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Container from "./global/container/container";

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="*" element={<p>Not Found</p>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="store" element={<p>store</p>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
