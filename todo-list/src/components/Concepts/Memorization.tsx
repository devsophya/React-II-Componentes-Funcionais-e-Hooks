import { useCallback, useMemo, useState } from "react";

interface MemorizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memorization: React.FC<MemorizationProps> = ({
  financialData,
}) => {
  const [showValues, setShowValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log("Calculando o total de receitas...");
      return (total += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutComes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      console.log("Calculando o total de despesas...");
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes]);

  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutComes * (1 - desconto);
    },
    [totalOutComes]
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memorization</h1>

      <h2>useMemo</h2>

      <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : "XXXXX"}`}</p>
      <br />
      <p>{`Total de Despesas: R$ ${showValues ? totalOutComes : "XXXXX"}`}</p>

      <br />
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "Ocultar Valores" : "Mostrar Valores"}
      </button>
    </div>
  );
};
