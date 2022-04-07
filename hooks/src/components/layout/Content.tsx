import './Content.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'

const Content = (props: any) => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/useState" element={<UseState />}></Route>
            <Route path="/useEffect" element={<UseEffect />}></Route>
            <Route path="/useRef" element={<UseRef />}></Route>
            <Route path="/useCallback" element={<UseCallback />}></Route>
            <Route path="/useMemo" element={<UseMemo />}></Route>
            <Route path="/useContext" element={<UseContext />}></Route>
            <Route path="/useReducer" element={<UseReducer />}></Route>
            <Route path="/useCustom" element={<UseCustom />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </main>
)

export default Content