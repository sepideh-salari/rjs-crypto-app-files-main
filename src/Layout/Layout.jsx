import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto Currency Exchange</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Sepideh.Salari</p>
      </footer>
    </>
  );
}

export default Layout;
