// Import page to render.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Page from "../pages/Page";
import Home from "../pages/Home";
import About from "../pages/About";

const DefaultContainer = () => {
  // const routePath = '/about';
  // const Element = () => {
  //   return <Home/>
  // }
  return (
    <section>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path="about" element={<About />}></Route>
            <Route path="abcd" element={<Page />}></Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </section >
  )
}

export default DefaultContainer;