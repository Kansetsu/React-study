import products from "../../data/products"
import './ProductsTable.css'
export default function Products(prop: any) {
    const trProducts = products.map((products, i) => {
        return (
            <tr key={products.id} className={i % 2 === 0 ? 'Even' : 'Odd'}>
                <td >{products.id}</td>
                <td>{products.name}</td>
                <td>R$ {products.price}</td>
            </tr>
        )
    })

    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {trProducts}
                </tbody>
            </table>
        </div>

    )
}