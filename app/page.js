import Counter from './components/Counter';
import ProjectInfo from './components/ProjectInfo';
import Store from './components/Store';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js Homework</h1>
      
      <hr style={{width: '100%'}} />

      <h2>Counter Components</h2>
      <Counter incrementAmount={1} buttonColor="lightblue" />
      <Counter incrementAmount={2} buttonColor="lightgreen" />

      <hr style={{width: '100%'}} />

      <ProjectInfo />

      <hr style={{width: '100%'}} />

      <Store />
      
    </main>
  );
}
