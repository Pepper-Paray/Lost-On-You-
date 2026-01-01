import { useState } from "react";
import "./App.css";

function App() {
  const [examplesShown, setExamplesShown] = useState(false);

  return (
    <>
      <header>
        <h1 className="title">Toxic Exes Awareness</h1>
        <p className="subtitle">
          Understanding red flags, emotional patterns, and how to protect your
          peace.
        </p>
      </header>

      <section className="card">
        <h2>What Is a Toxic Ex?</h2>
        <p>
          A toxic ex is someone whose behavior drains your energy, manipulates
          your emotions, or disrupts your healing after the relationship ends.
          Recognizing these patterns helps you move forward with clarity and
          strength.
        </p>
      </section>

      <section className="card">
        <h2>Common Red Flags</h2>
        <ul>
          <li>Love-bombing followed by sudden withdrawal</li>
          <li>Blaming you for their actions</li>
          <li>Using guilt to control your decisions</li>
          <li>Showing up only when they need something</li>
          <li>Disrespecting your boundaries</li>
        </ul>
      </section>

      <section className="card">
        <h2>Examples of Toxic Behaviors</h2>
        <button onClick={() => setExamplesShown(!examplesShown)}>
          {examplesShown ? "Hide Examples" : "Show Examples"}
        </button>

        {examplesShown && (
          <ul className="examples">
            <li>Sending mixed signals to keep you emotionally hooked</li>
            <li>
              Talking badly about you to others while acting friendly in private
            </li>
            <li>Trying to make you jealous to get attention</li>
            <li>Ignoring your needs but expecting you to meet theirs</li>
          </ul>
        )}
      </section>

      <footer className="footer">
        <p>
          Healing starts with awareness. Protect your peace, trust your
          intuition, and choose connections that honor your worth.
        </p>
      </footer>
    </>
  );
}

export default App;
