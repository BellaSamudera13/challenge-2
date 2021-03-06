import React from 'react'

class BMI extends React.Component{
    constructor(){
        super();
        this.state = {
            tinggi: null,
            berat: null,
            bmi: null,
            status: ""
        }
    }
    hitung = (e) => {
        e.preventDefault();
        const tinggi = parseInt(this.refs.tinggi.value)/100;
        const berat = parseInt(this.refs.berat.value);
        let bmi;
        let status

        bmi = berat / Math.pow(tinggi,2);
        console.log(bmi);

        if (bmi >= 30.0) {
            status = "Status Berat Badan: Obesitas"
        } else if (bmi >= 25.0) {
            status = "Status Berat Badan: Kelebihan Berat Badan"
        } else if (bmi >= 18.5) {
            status = "Status Berat Badan: Ideal"
        } else {
            status = "Status Berat Badan: Kekurangan Berat Badan"
        }

        this.setState({
            tinggi, berat, bmi, status
        });

        this.refs.tinggi.value = null;
        this.refs.berat.value = null;
    }
    render(){
        return(
            <div>
                <center>
                <div class="alert alert-primary" role="alert" >
                    <h3>Body Mass Index</h3>
                </div>
                <form onSubmit={this.hitung}>
                    <label>Tinggi:  </label>
                    <input type="number" ref="tinggi"  ></input>
                    <br/>
                    <label>Berat:  </label>
                    <input type="number" ref="berat" ></input>
                    <br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br/> <h5>Hasil</h5>
                <p >{this.state.status}</p>
                </center>
            </div>
        )
    }

}
export default BMI;  