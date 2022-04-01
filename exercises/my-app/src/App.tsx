import './App.css'
import First from './components/basics/First'
import WithParameters from './components/basics/WithParameters'
import FragmentEx from './components/basics/Fragment'
import Random from "./components/basics/Random"
import Cards from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentList from './components/loop/StudentList'
import ProductsTable from './components/loop/ProductsTable'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import UserInfo from './components/conditional/UserInfo'


export default function App() {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Cards title='#01 Primeiro Exemplo' color={'#008'}><First></First></Cards>
                <Cards title='#02 Exemplo com parâmetros' color={'#004f19'}><WithParameters title='Situação do Aluno' student='Maria' grade={9.9} /></Cards>
                <Cards title='#02 Exemplo com parâmetros' color={'#004f19'}><WithParameters title='Situação do Aluno' student='Pedro' grade={6.9} /></Cards>
                <Cards title='#03 Fragmento' color={'#da8429'}><FragmentEx /></Cards>
                <Cards title='#04 Número Aleatório' color={'#620762'}><Random min={1} max={60} /></Cards>

                <Cards title='#05 Componente com filhos' color={'#589'}>
                    <Family lastName='Ferreira'>
                        <FamilyMember name='Pedro' />
                        <FamilyMember name='Ana' />
                        <FamilyMember name='Gustavo' />
                    </Family>
                </Cards>

                <Cards title='#06 Repetição' color={'#995'}><StudentList /></Cards>
                <Cards title='#07 Tabela' color={'#557'}><ProductsTable /></Cards>

                <Cards title='#08 Renderização Condicional' color={'#157'}>
                    <EvenOrOdd number={2} />
                    <UserInfo user={{name: 'Fernando'}}/>
                    <UserInfo /> 
                </Cards>
            </div>
        </div>
    )
}