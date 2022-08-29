import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../index.css'
import './styles.css'

export const TransactionPage = () => {
    const [ transactions, setTransactions ] = useState([]);
    const [ name, setName ] = useState('');
    const [ amount, setAmount ] = useState('');

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('transactions'));
        if (items) {
            setTransactions(items);
        }
      }, []);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const transactionsAmounts = transactions
                        .map(transaction => transaction.amount);

    const handleName = (event)=> {
        setName(event.target.value);
    }

    const handleAmount = (event)=> {
        setAmount(event.target.value)
    }

    const handleClick =() => {
        var today = new Date();
        let seconds = today.getSeconds();
        seconds = seconds <= 9 ? '0' + seconds : seconds;
        var crrdate = today.getHours() + ":" + today.getMinutes() + ":" + seconds;

        setTransactions([...transactions, {id: transactions.length + 1, name: name, amount: Number(amount), date: crrdate}]);
    }

    const handleRemoveTransaction = (index) => {
        setTransactions([
          ...transactions.slice(0, index),
          ...transactions.slice(index + 1, transactions.length)
        ]);
      }

    return (
        <>
            <span>Ir para: </span><Link to='/home' className='link-pages-login'>Home</Link>
            <h2>Controle de despesas</h2>

            <div className="container">
            <h4>Saldo atual</h4>
            
            <h1 id="balance" className="balance">R$
                {
                    transactionsAmounts
                    .reduce((acc, transaction) => acc + transaction, 0)
                    .toFixed(2)
                }
            </h1>

            <div className="inc-exp-container">
                <div>
                <h4>Receitas</h4>
                <p id="money-plus" className="money plus">R$
                    {
                        transactionsAmounts
                        .filter(value => value > 0)
                        .reduce((acc, value) => acc + value, 0)
                        .toFixed(2)
                    }
                </p>
                </div>

                <div>
                <h4>Despesas</h4>
                <p id="money-minus" className="money minus">R$
                    {
                        Math.abs(
                            transactionsAmounts
                            .filter(value => value < 0)
                            .reduce((acc, value) => acc + value, 0)
                            .toFixed(2)
                        )
                    }
                </p>
                </div>
            </div>

            <h3>Transações</h3>
            
            <ul id="transactions" className="transactions">
                {transactions.map((transaction, index) => (
                    <li 
                        className={transaction.amount < 0 ? 'minus': 'plus'}
                        key={transaction.id}
                    >
                        {transaction.name}
                        <span> 
                            <b>
                                {transaction.amount < 0 ? '-' : '+'} R$  {Math.abs(transaction.amount).toFixed(2)}
                            </b> 
                            <br />
                                {transaction.date}
                        </span>
                        <button 
                            className="delete-btn"
                            onClick={()=>handleRemoveTransaction(index)}>
                                x
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Adicionar transação</h3>
            
            <div id="form" >
                <div className="form-control">
                <label htmlFor ="text">Nome</label>
                <input 
                    type="text" 
                    id="text"  
                    placeholder="Nome da transação" 
                    onChange={handleName}
                />
                </div>

                <div 
                    className="form-control"
                   
                >
                <label htmlFor ="amount">Valor <br />
                    <small>(negativo - despesas, positivo - receitas)</small>
                </label>
                <input 
                    type="number"
                    step="0.01"
                    id="amount"
                    placeholder="Valor da transação"
                    onChange={handleAmount}
                />
                </div>
                    <button className="btn" onMouseDown={handleClick}>Adicionar</button>
            </div>
            </div>
        </>
    );
}