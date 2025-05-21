import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #1a1a1a;
    --secondary: #ff4d00;
    --accent: #ffcc00;
    --background: #121212;
    --text: #f5f5f5;
    --text-secondary: #b3b3b3;
    --success: #00cc66;
    --warning: #ffcc00;
    --error: #ff3333;
    --border-radius: 4px;
    --transition: all 0.3s ease;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--primary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }

  /* Classes de utilidade */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 0.75rem;
    }
  }
`;

export default GlobalStyles;
