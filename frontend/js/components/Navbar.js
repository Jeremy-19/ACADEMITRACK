// frontend/js/components/Navbar.js
export function Navbar() {
  return `
    <nav style="
      background: white;
      /* padding = 16px top/bottom, 32px left/right */
      padding: 2rem 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: black;
      font-family: Arial, sans-serif;
      /* box-shadow: horizontal offset 0 (centered), vertical offset 4px (down), blur 6px (soft), color black 10% opacity */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    ">
      <div style="font-size: 1.4rem;">
        ACADEMI <b>TRACK</b>
      </div>
      <div style="display: flex; gap: 1rem;">
        <a href="#dashboard" style="color: black; text-decoration: none;">Dashboard</a>
        <a href="#manage" style="color: black; text-decoration: none;">Manage</a>
        <a href="#reports" style="color: black; text-decoration: none;">Reports</a>
      </div>
    </nav>
  `;
}
