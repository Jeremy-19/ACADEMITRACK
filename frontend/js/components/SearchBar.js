export function SearchBar() {
    return `
    <input 
      type="text" 
      placeholder="Search..." 
      style="
        padding: 0.5rem 1rem;
        width: 200px;
        border-radius: 5px;
        border: 1px solid rgba(128, 128, 128, 0.2);
        font-size: 1rem;
        outline: none;
        transition: border 0.2s;
      "
      onfocus="this.style.borderColor='#007bff';" 
      onblur="this.style.borderColor='rgba(128, 128, 128, 0.2)';"
    />
  `;
}
