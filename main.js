// CUIMS Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar items interactive hover effects / click behavior
  const menuItems = document.querySelectorAll('.sidebar-menu li');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Deactivate other items
      menuItems.forEach(i => i.classList.remove('active'));
      // Activate clicked item
      item.classList.add('active');
      
      // If it's an expandable menu item, we can toggle an expand state
      if (item.classList.contains('has-submenu')) {
        const icon = item.querySelector('.chevron-icon');
        if (icon) {
          // Simple visual rotation to show toggle
          const isRotated = icon.style.transform === 'rotate(90deg)';
          icon.style.transform = isRotated ? '' : 'rotate(90deg)';
        }
      }
    });
  });

  // Search input interaction
  const searchInput = document.querySelector('.search-input');
  const searchContainer = document.querySelector('.search-container');
  
  if (searchInput && searchContainer) {
    searchInput.addEventListener('focus', () => {
      searchContainer.classList.add('focused');
    });
    searchInput.addEventListener('blur', () => {
      searchContainer.classList.remove('focused');
    });
  }
});
