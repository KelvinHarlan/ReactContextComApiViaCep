import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './compnents/Context';


function App() {
  const { dataCep } = useContext(ThemeContext);
  const cidade = dataCep.localidade;
  const rua = dataCep.logradouro;
  const uf = dataCep.uf;
  const ddd = dataCep.ddd;



  return (
    <>
      <h1>API CEP</h1>
      <div className="box">
        <label className="green">Cidade: </label>
        <p>{cidade}</p>
      </div>
      <div className="box">
        <label className="green">Rua: </label>
        <p>{rua}</p>
      </div>
      <div className="box">
        <label className="green">UF: </label>
        <p>{uf}</p>
      </div>
      <div className="box">
        <label className="green">DDD: </label>
        <p>{ddd}</p>
      </div>
    </>
  )
}

export default App
