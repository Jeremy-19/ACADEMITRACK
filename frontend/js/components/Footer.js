// frontend/js/components/Footer.js
export function Footer() {
  const year = new Date().getFullYear();
  return `
    <footer style="
      background: white;
      color: black;
      padding: 1rem;
      text-align: center;
      font-size: 0.9rem;
      margin-top: 2rem;
      font-family: Arial, sans-serif;
      box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1); 
    ">
      <p>© ${year} Student Performance Dashboard. This is just an interview presentation from JEREMY PUN.</p>
    </footer>
  `;
}
