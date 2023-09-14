const List = (props) => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    let investment = Number(props.data.investment)
    let interest = Number(props.data.interest)
    let saving = Number(props.data.saving)
    let duration = Number(props.data.duration)
    let totalSaving = investment
    let investedCapital = investment
    let totalInterest = 0
    let currInterest = 0
    let data = []
    for(let i=1;i<=duration;i++){
        currInterest = totalSaving*(interest/100)
        totalInterest = totalInterest + currInterest
        investedCapital = investedCapital + saving
        totalSaving = totalSaving + currInterest + saving
        data.push([i,totalSaving,currInterest,totalInterest,investedCapital])
    }
    if(props.clear || data.length===0){
        return (
            <div className="container d-flex justify-content-center font-monospace mt-4">
                <h3>No investment calculated yet.</h3>
            </div>
        )
    }
    return (
        <div className="container mt-5" style={{width:"60%"}}>
            <table className="table text-center table-striped">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Saving</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((currentRow) => {
                        return (
                            <tr>
                                <td>{currentRow[0]}</td>
                                <td>{USDollar.format(currentRow[1])}</td>
                                <td>{USDollar.format(currentRow[2])}</td>
                                <td>{USDollar.format(currentRow[3])}</td>
                                <td>{USDollar.format(currentRow[4])}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default List;