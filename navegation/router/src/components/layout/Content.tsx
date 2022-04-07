import './Content.css'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'
import { Routes, Route } from 'react-router-dom'

const Content = (props: any) => (

    <main className="Content">
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/param/:id' element={<Param />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </main>
)

export default Content