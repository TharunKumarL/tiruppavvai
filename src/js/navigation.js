export function createDayButtons() {
    const daysGrid = document.getElementById('daysGrid');
    
    for (let i = 1; i <= 30; i++) {
        const button = document.createElement('button');
        button.className = 'day-button';
        button.textContent = `Day ${i}`;
        button.dataset.day = i;
        
        if (i === 1) {
            button.classList.add('active');
        }
        
        daysGrid.appendChild(button);
    }
}

export function initializeNavigation(loadDayContent) {
    const daysGrid = document.getElementById('daysGrid');
    
    daysGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('day-button')) {
            document.querySelectorAll('.day-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            e.target.classList.add('active');
            const day = parseInt(e.target.dataset.day);
            loadDayContent(day);
        }
    });
}