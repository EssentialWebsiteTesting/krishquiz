document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = [
      { name: 'John Doe', category: 'bcba', image: 'john-doe.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { name: 'Jane Smith', category: 'technician', image: 'jane-smith.jpg', bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { name: 'Michael Johnson', category: 'administrator', image: 'michael-johnson.jpg', bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
      // Add more team members as needed
    ];
  
    const teamGrid = document.getElementById('teamGrid');
  
    // Function to populate team members based on category
    function populateTeam(category) {
      teamGrid.innerHTML = '';
      teamMembers.forEach(member => {
        if (member.category === category) {
          const card = document.createElement('div');
          card.classList.add('team__card');
          card.innerHTML = `
            <img src="assets/${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
          `;
          card.addEventListener('click', function() {
            openModal(member);
          });
          teamGrid.appendChild(card);
        }
      });
    }
  
    // Function to open modal with detailed information
    function openModal(member) {
      const modal = document.getElementById('teamModal');
      const modalName = document.getElementById('modalName');
      const modalImage = document.getElementById('modalImage');
      const modalBio = document.getElementById('modalBio');
  
      modalName.textContent = member.name;
      modalImage.src = `assets/${member.image}`;
      modalBio.textContent = member.bio;
  
      modal.style.display = 'block';
  
      // Close modal when clicking on close button or outside modal content
      const modalClose = document.getElementById('modalClose');
      modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  
    // Event listeners for category buttons
    const categoryButtons = document.querySelectorAll('.category__btn');
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');
        populateTeam(category);
      });
    });
  });
  