const closeSidebar = document.getElementById('close-sidebar');
const openSidebar = document.getElementById('open-sidebar');

//Implementing the closing of the sidebar 
closeSidebar.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
})

//Implementing the opening of the sidebar
openSidebar.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex';
})