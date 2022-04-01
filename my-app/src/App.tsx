import './App.css'
import First from './components/basics/First'
import WithParameters from './components/basics/WithParameters'
import FragmentEx from './components/basics/Fragment'
import Random from "./components/basics/Random"
import Cards from './components/layout/Card'

export default function App(props: any) {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Cards titulo='#01 Primeiro Exemplo'><First></First></Cards>
                <Cards titulo='#02 Exemplo com parâmetros'><WithParameters titulo='Situação do Aluno' aluno='Maria' nota={9.9} /></Cards>
                <Cards titulo='#02 Exemplo com parâmetros'><WithParameters titulo='Situação do Aluno' aluno='Pedro' nota={6.9} /></Cards>
                <Cards titulo='#03 Fragmento'><FragmentEx /></Cards>
                <Cards titulo='#04 Número Aleatório'><Random min={1} max={60} /></Cards>
            </div>
        </div>
    )
}