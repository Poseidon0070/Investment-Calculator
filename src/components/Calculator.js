import style from "./Calculator.module.css"
import {useState} from "react"
const Calculator = (props) => {
    const [investment, changeInvestment] = useState("")
    const [interest, changeInterest] = useState("")
    const [saving, changeSaving] = useState("")
    const [duration, changeDuration] = useState("")
    let investmentHandler = (event) => changeInvestment(event.target.value)
    let interestHandler = (event) => changeInterest(event.target.value)
    let savingHandler = (event) => changeSaving(event.target.value)
    let durationHandler = (event) => changeDuration(event.target.value)
    let submitHandler = (event) => {
        event.preventDefault()
        let investmentData = {
            investment : investment,
            interest : interest,
            saving : saving,
            duration : duration
        }
        props.sendData(investmentData)
    }
    let resetHandler = () => {
        changeInvestment("")
        changeInterest("")
        changeSaving("")
        changeDuration("")
        props.removeData(true)
    }
    return (
        <div className={`container ${style['Form']} mt-5 bg-success rounded-3`}>
            <form onSubmit={submitHandler}>
                <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column mt-4">
                        <label className="font-monospace">Current Saving($)</label>
                        <input type="number" value={investment} className="form-control mb-4 btn btn-success btn-outline-light" onChange={investmentHandler}></input>
                        <label className="font-monospace">Expected Interest(%, PER YEAR)</label>
                        <input type="number" value={interest} className="form-control btn btn-success btn-outline-light" onChange={interestHandler}></input>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <label className="font-monospace">Yearly Saving($)</label>
                        <input type="number" value={saving} className="form-control mb-4 btn btn-success btn-outline-light" onChange={savingHandler}></input>
                        <label className="font-monospace">Investment Duration(YEARS)</label>
                        <input type="number" value={duration} className="form-control btn btn-success btn-outline-light" onChange={durationHandler}></input>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-4">
                    <input type="button" className="btn btn-success btn-outline-dark mb-4" value="  Reset  " onClick={resetHandler}></input>
                    <input type="submit" className="btn btn-dark mb-4" value="  Calculate  "></input>
                </div>
            </form>
        </div>
    )
}

export default Calculator;