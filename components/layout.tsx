import styles from "../styles/Home.module.css";
import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="../">Navbar</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/flashcard/classic">Classic flashcard</Link>
              {/* <a className="nav-link active" href="/flashcard/classic"> */}
              {/* Classic flashcard */}
              {/* </a> */}
            </li>
            <li className="nav-item">
              <Link href="/flashcard/inpu">Input flashcard</Link>
              {/* <a className="nav-link active" href="/flashcard/inpu">
                Input flashcard
              </a> */}
            </li>
            <li className="nav-item">
              <Link href="/flashcard/form"> Radio flashcard</Link>

              {/* <a className="nav-link active" href="/flashcard/form">
                Radio flashcard
              </a> */}
            </li>
          </ul>
        </div>
      </nav>

      <div>{children}</div>

      <footer className={styles.footer}>Powered by Nordine 2022</footer>
    </div>
  );
};
