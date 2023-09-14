import Header from "./components/Header";
import Calculator from "./components/Calculator"
import List from "./components/List"
import { useState } from "react";
const App = () => {
    let [table,clearTable] = useState(false)
    const [investmentData,changeData] = useState({
        investment : "",
        interest : "",
        saving : "",
        duration : ""
    })
    let newData = (data) => {
        changeData(data)
    }
    let removeData = (bool) => {
        clearTable(bool)
    }
    return (
        <>
            <Header></Header>
            <Calculator sendData={newData} removeData={removeData}></Calculator>
            <List data={investmentData} clear={table}></List>
        </>
    )
}

export default App; 