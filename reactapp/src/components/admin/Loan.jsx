import { useState } from 'react';

import './Loan.css'

const Loan = () => {

    const [year, setYear] = useState(0);

    const [months, setMonths] = useState(0);

    const [amount, setAmount] = useState(0);

    const [rate, setrate] = useState(0);

    const [result, setresult] = useState([]);

    const [flag, setflag] = useState(false);

    const [err, seterr] = useState('');

    const calculate = (e) => {

        e.preventDefault();

        if (amount === 0) {

            seterr('please enter amount');

        } else if (rate === 0) {

            seterr('please enter rate of interest');

        } else if (year === 0 && months === 0) {

            seterr('please enter Loan Period');

        }

        else {

            var month = 0;

            console.log(typeof (year), year, typeof (months), months);

            if (year !== 0 && months !== 0) {

                month = parseInt((year * 12).toString()) + parseInt(months.toString());

            } else if (year !== 0) {

                month = year * 12;

            } else {

                month = months;

            }

            console.log(typeof (month), month, typeof (year), year, typeof (months), months);

            var i;

            month = parseInt(month.toString());

            console.log(typeof (month));

            for (i = 1; i <= month; i++) {

                let payment1 = ((amount * rate / 1200) * Math.pow((1 + rate / 1200), month)) / (Math.pow((1 + rate / 1200), month) - 1)

                let pp1 = payment1 * Math.pow(1 + rate / 1200, (i - 1 - (month)));

                let int1 = payment1 - pp1;

                let loanBalance = (int1 / (rate / 1200)) - pp1;


                
                console.log(payment1);
                
                let row = {
                
                    payment: Math.round(payment1 * 100) / 100,
                
                    pp: Math.round(pp1 * 100) / 100,
                
                    int: Math.round(int1 * 100) / 100,
                
                    loanBalance: Math.round(loanBalance * 100) / 100
                
                }
                
                console.log(row);
                
                setresult(result => [...result, row]);
            }

            
            setflag(true);
        }



    };

    
    const clear = () => {
    
        setflag(false);
    
        setresult([]);
    
        setAmount(0);
    
        seterr('');
    
        setrate(0);
    
        setMonths(0);
    
        setYear(0);
    
    
    }


    
    return (
    
    <div className='.Loan'>
    
            <header className="App-header">
    
                <h2>Loan EMI Calculator</h2>
    
            </header>
    
            <div id="home-page">



                <div>



                    {!flag ?

<div className='container'>

                            <form className='form'>

                                <div className='row g-3'>

                                    <div className='col md-6'>

                                        <label className='form-label'>Loan Amount </label>

                                    </div>

                                    <div className='col'>

                                        <input className='form-control' type="number" placeholder="" onChange={(e) => setAmount(e.target.value)} required></input>

                                    </div>

                                </div>



                                <div className='row g-3'>

                                    <div className='col md-6'>

                                        <label className='form-label' position="floating">Rate of Interest</label>

                                    </div>

                                    <div className='col md-6'>

                                        <input className='form-control' type='number' onChange={(e) => setrate(e.target.value)} required />

                                    </div>

                                </div>



                                <div className='row g-3'>

                                    <div className='col md-6'>

                                        <label className='form-label' position='floating'>Loan Period(years)</label>

                                    </div>

                                    <div className='col md-6'>

                                        <input className='form-control' type="number" placeholder="Enter Loan period in years" onChange={(e) => setYear(e.target.value)} required></input>

                                    </div>

                                </div>

            <div>

                <h5>or</h5>

            </div>

            <div className='row g-3'>

                                    <div className='col md-6'>

                                        <label className='form-label' position='floating'>Loan Period(months)</label>

                                    </div>

                                    <div className='col md-6'>

                                        <input className='form-control' type="number" placeholder="Enter Loan period in Months" onChange={(e) => setMonths(e.target.value)} required></input>

                                    </div>

                                </div>



                                <div className=''>

                                    <button className='calculate' onClick={e => calculate(e)} type='submit'>Calculate</button>

                                </div>

                            </form>

                            {err &&

<div class="card">

                                    <div class="card-body">

                                        {err}

                                    </div>

                                </div>

}

                        </div>

:

<div>

                            <table className="table table-success table-striped table-hover">

                                <thead>

                                    <tr >

                                        <th>Payment No.</th>

                                        <th>Payment Amount</th>

                                        <th>Principal Amount Paid</th>

                                        <th>Interest Amount Paid</th>

                                        <th>Loan Outstanding balance</th>

                                    </tr>

                                </thead>

                                <tbody>

                                {result.map((row, index) => (



<tr key={index}>

                                            <td>{index + 1}</td>

                                            <td>{row.payment}</td>

                                            <td>{row.pp}</td>

                                            <td>{row.int}</td>

                                            <td>{row.loanBalance}</td>

                                        </tr>



))}

                                </tbody>



                            </table>

                            <button className='calculate' onClick={clear}>Back</button>

                        </div>

}

                </div>

            </div>

        </div>

);

};



export default Loan;
