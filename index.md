## Este repositório tem como propósta guardar exemplos dos fundamentos do React com alguns exercícios e projetos

Aqui você vai encontrar exercícios sobre as bases do React, utilização de determinados padrões, hooks, redux e alguns projetos práticos. 

### Componentes baseados em classe

Aqui você vai ter exemplos de componentes baseados em classe, utilização de estados do componente e a modularização de um projeto com esse padrão.

```javascript
import { Component } from "react";
import './Calculator.css'
import Button from "../components/Button";
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props: any) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation: any) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (error) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }

    }

    addDigit(n: any) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label='AC' click={this.clearMemory} triple />
                <Button label='/' click={this.setOperation} operation />
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='*' click={this.setOperation} operation />
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='-' click={this.setOperation} operation />
                <Button label='1' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='3' click={this.addDigit} />
                <Button label='+' click={this.setOperation} operation />
                <Button label='0' click={this.addDigit} double />
                <Button label='.' click={this.addDigit} />
                <Button label='=' click={this.setOperation} operation />
            </div>
        )
    }
}
```



### Componentes funcionais

Também tem vários exemplos de componentes funcionais, já que o javascript e o typescript são fortemente baseados em funções. Exemplos na prática de componentes funcionais, aplicações com hooks e vários outros exemplos bastante interessantes, até mesmo a criação de seus próprios hooks. 

```javascript
import { useEffect, useState } from "react"

export const useFetch = (url: any, method: any = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {
        fetch(url, { method }).then(resp => resp.json()).then(json => setResponse({
            data: json,
            loading: false
        }))
    }, [url, method])

    return response
} 
```
### Contato e Ajuda

Caso queira entrar em contato ou verificar mais informações sobre o repositório veja no [github](https://github.com/Vinicius-AndradeM/React-study).
