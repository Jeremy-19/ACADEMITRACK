export function StatsCard(title, value) {
    return `
        <div style="
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 15px;
            width: 150px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        ">
            <h4>${title}</h4>
            <p style="font-size: 24px; font-weight: bold;">${value}</p>
        </div>
    `;
}
