import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { DataContext, data } from '../data/DataContext'
// import { Store } from '../data/Store'

const App = (props: any) => {

    return (
        // <Store>
            <DataContext.Provider value={data}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        // </Store>
    )
}

export default App