import React from "react";

class Exchange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            values: []
        };
    }

    componentDidMount() {
        console.log('lalkaaa');
        let request = fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", {
            method: 'GET'
        });
        request.then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        values: result
                    })
                },
                (error) => {
                    console.log('error');
                    console.log(error);
                }
            )
    }

    render() {
        const values = this.state.values;
        console.log(values);
        if (!this.state.isLoaded) {
            return (
                <div>Loading!</div>
            )
        }
        return (
            <table className="fishes">
                <thead><tr>
                    <td>Валюта</td>
                    <td>Покупка</td>
                    <td>Продажа</td>
                </tr></thead>
                <tbody>
                    {Object.keys(this.state.values).map(key => {
                        return (
                            <tr key={key}>
                                <td>{values[key].ccy}</td>
                                <td>{values[key].buy}</td>
                                <td>{values[key].sale}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        )
    }
}

export default Exchange;