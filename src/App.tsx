import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./global/container/container";
import { lazy, Suspense } from "react";
import Home from "./routes/home/home";

// const Home = lazy(() => import('./routes/home/home'))

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="*" element={<p>Not Found</p>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="store" element={<p>store</p>}/>
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  )
}

export default App
