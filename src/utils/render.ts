export function render(query, block) {
    const root = document.querySelector(query);
    console.log("test")
    root.innerHTML = "";
    root.appendChild(block.getContent());
    return root;
}