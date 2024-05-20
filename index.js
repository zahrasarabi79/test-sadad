document.addEventListener('DOMContentLoaded', () => {
  const tabContentsContainer = document.getElementById('tab-contents');
  const template = document.getElementById('tab-template').content.cloneNode(true);

  // Append the cloned content from the template to the tab contents container
  tabContentsContainer.appendChild(template);
});

function openTab(tabNumber) {
  console.log(tabNumber);
  // remove active class
  document.querySelectorAll('.tab-content').forEach((content) => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab-link').forEach((content) => {
    content.classList.remove('active');
  });
  // add active class
  document.getElementById(`tab${tabNumber}`).classList.add('active');
  document.getElementById(`tab-link${tabNumber}`).classList.add('active');
}
