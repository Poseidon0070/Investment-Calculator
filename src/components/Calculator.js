import style from "./Calculator.module.css"
const Calculator = () => {
    return (
        <div className={`container ${style['Form']} mt-5 bg-success rounded-3`}>
            <form>
                <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column mt-4">
                        <label className="font-monospace">Current Saving($)</label>
                        <input type="number" className="form-control mb-4 btn btn-success btn-outline-light"></input>
                        <label className="font-monospace">Expected Interest(%, PER YEAR)</label>
                        <input type="number" className="form-control btn btn-success btn-outline-light"></input>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <label className="font-monospace">Yearly Saving($)</label>
                        <input type="number" className="form-control mb-4 btn btn-success btn-outline-light"></input>
                        <label className="font-monospace">Investment Duration(YEARS)</label>
                        <input type="number" className="form-control btn btn-success btn-outline-light"></input>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-4">
                    <input type="button" className="btn btn-success btn-outline-dark mb-4" value="  Reset  "></input>
                    <input type="button" className="btn btn-dark mb-4" value="  Calculate  "></input>
                </div>
            </form>
        </div>
    )
}

export default Calculator;