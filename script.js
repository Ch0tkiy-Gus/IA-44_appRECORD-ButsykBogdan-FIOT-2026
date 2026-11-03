function loadLab(url, element) {
    event.preventDefault(); 

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Файл не знайдено');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content-area').innerHTML = html;
            
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
        })
        .catch(error => {
            console.error('Помилка:', error);
            document.getElementById('content-area').innerHTML = '<h2>Помилка завантаження. Файл ще не створено.</h2>';
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('.nav-btn.active');
    loadLab('lab1.html', firstButton);
});