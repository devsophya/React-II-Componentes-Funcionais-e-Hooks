import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My ToDo</h1>

          <span>Bem-vinda, Sophya!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={6} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluídas" value={2} />
        </div>
      </div>
    </header>
  );
};
