// Get all elements with class="tabcontent" and hide them
let tabcontent = document.getElementsByClassName('tabcontent');
for (let i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = 'none';
}

// Get all elements with class="tablinks" and remove the class "active"
let tablinks = document.getElementsByClassName('tablinks');
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace('active', '');
}

// Show the current tab, and add an "active" class to the button that opened the tab
const openTab = (event, tabName) => {
  // Hide all tab content
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  // Remove the "active" class from all tablinks
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }
  // Show the specific tab content
  document.getElementById(tabName).style.display = 'block';
  // Add the "active" class to the button that opened the tab
  if (!event.currentTarget.classList.contains('active')) {
    event.currentTarget.classList.add('active');
  }
};
