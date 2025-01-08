
import "./ProductList.css"

const ProductList = () => {
  return (
    <section className="main-content">
        <aside className="filters">
            <h2>Filtros</h2>
            <div className="filters-category">
                <h3>Categorias</h3>
                <label>
                    <input type="checkbox" />
                    <span>Eletre</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span>Emira</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span>Emeya</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span>Evija</span>
                </label>
            </div>

            <div className="filters-category">
                <h3>Tipos</h3>
                <label>
                    <input type="checkbox" />
                    <span>E-tech</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span>Hyper-GT</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span>Bio-tech</span>
                </label>
            </div>
        </aside>

        <main className="collections">
            <div className="options">
                <h2>ALL COLLECTION</h2>
                <div className="sort-options">
                    <label>
                        Ordenar por:
                        <select>
                            <option>Relevante</option>
                            <option>Precio: Menor a Mayor</option>
                            <option>Mayor a Menor</option>
                        </select>
                    </label>
                </div>
            </div>

        </main>
    </section>
  )
}

export default ProductList