import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import DetailPage from "../pages/DetailPage"
import AddPage from "../pages/AddPage"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path='/add' element={<AddPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter