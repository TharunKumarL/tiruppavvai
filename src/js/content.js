import { dayData } from './data.js';

export function loadDayContent(dayNumber) {
    const data = dayData[dayNumber - 1];
    if (!data) return;
    
    document.getElementById('dayTitle').textContent = data.title;
    document.getElementById('dayDate').textContent = data.date;
    document.getElementById('daySubtitle').textContent = data.subtitle;
    document.getElementById('poemContent').textContent = data.poem;
    document.getElementById('meaningContent').textContent = data.meaning;
}