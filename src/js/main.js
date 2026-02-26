const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.set
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Alterna para tema claro
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        // Alterna para tema escuro
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Opcional: Detectar preferência do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Opcional: Salvar preferência ao fechar a página
window.addEventListener('beforeunload', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme) {
        localStorage.setItem('theme', currentTheme);
    }
});