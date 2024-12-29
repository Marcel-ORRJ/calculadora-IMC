import React, { useState } from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState(null);

    const calcularIMC = () => {
        const alturaMetros = parseFloat(altura) / 100;
        const imc = parseFloat(peso) / (alturaMetros * alturaMetros);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 24.9) classificacao = "Peso normal";
        else if (imc < 29.9) classificacao = "Sobrepeso";
        else if (imc < 34.9) classificacao = "Obesidade Grau 1";
        else if (imc < 39.9) classificacao = "Obesidade Grau 2";
        else classificacao = "Obesidade Grau 3";

        setResultado({ imc: imc.toFixed(2), classificacao });
    };

    return (
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <div className={styles.formGroup}>
                <label>Altura (cm):</label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Ex.: 170"
                />
            </div>
            <div className={styles.formGroup}>
                <label>Peso (kg):</label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Ex.: 70"
                />
            </div>
            <button onClick={calcularIMC} className={styles.btn}>
                Calcular
            </button>
            {resultado && (
                <div className={styles.resultado}>
                    <p>
                        <strong>IMC:</strong> {resultado.imc}
                    </p>
                    <p>
                        <strong>Classificação:</strong> {resultado.classificacao}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Formulario;