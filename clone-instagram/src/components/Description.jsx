import React from "react";
import { useState } from "react";

const Description = ({ texto, limitePalavras = 20 }) => {
  const listaPalavras = texto.split(" ");

  const [estaExpandido, setEstaExpandido] = useState(false);

  const cortarTexto = listaPalavras.length > limitePalavras;

  const textoInicial = listaPalavras.slice(0, limitePalavras).join(" ");
  const textoRestante = listaPalavras.slice(limitePalavras).join(" ");

  return (
    <div>
      <span className="fw-semibold me-1">amorabernesse</span>

      <span>
        {textoInicial}
        {cortarTexto &&
          (!estaExpandido ? (
            <span>
              <span className="fw-semibold mx-1">...</span>

              <span
                className="text-secondary"
                onClick={() => setEstaExpandido(true)}
              >
                mais
              </span>
            </span>
          ) : (
            <span>{" " + textoRestante}</span>
          ))}
      </span>
    </div>
  );
};

export default Description;
