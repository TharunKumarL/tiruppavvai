import { createDayButtons, initializeNavigation } from './navigation.js';
import { loadDayContent } from './content.js';

document.addEventListener('DOMContentLoaded', () => {
    createDayButtons();
    initializeNavigation(loadDayContent);
    loadDayContent(1);
});