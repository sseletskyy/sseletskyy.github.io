(function () {
  const onDOMContentLoaded = () => {
    console.log(`@@ DOMContentLoaded`);

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#folders a');
    const foldersSideBarEl = document.querySelector('#folders');
    const localStorageKey = 'stickyFolders'; // Key for local storage
    const checkboxEl = document.getElementById(localStorageKey);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.id;

            // Remove active class from all links
            navLinks.forEach((link) => link.classList.remove('font-bold', 'underline'));

            // Add active class to the corresponding link
            const activeLink = document.querySelector(`#folders a[href="#${targetId}"]`);
            if (activeLink) {
              activeLink.classList.add('font-bold', 'underline');
            }
          }
        });
      },
      {
        threshold: 0.05, // Adjust threshold as needed (0.5 means 50% of the section must be visible)
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Function to be called when the checkboxEl is clicked
    function checkboxClicked() {
      // Perform your desired actions here
      if (checkboxEl && checkboxEl.checked) {
        // Do something when checked
        foldersSideBarEl?.classList.remove('opacity-0');
        foldersSideBarEl?.classList.add('opacity-100');
      } else {
        // Do something when un-checked
        foldersSideBarEl?.classList.remove('opacity-100');
        foldersSideBarEl?.classList.add('opacity-0');
      }
    }

    const onCheckboxChange = () => {
      localStorage.setItem(localStorageKey, checkboxEl.checked); // Store boolean as string
      checkboxClicked(); // Call the click function
    };

    // Optional: Smooth scrolling when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default jump behavior
        // @ts-ignore
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const savedState = localStorage.getItem(localStorageKey);
    if (savedState !== null && checkboxEl) {
      checkboxEl.checked = savedState === 'true'; // Convert string to boolean
    }

    // Save state to local storage when checkbox is clicked
    checkboxEl && checkboxEl.addEventListener('change', onCheckboxChange);

    checkboxClicked();
  };
  if (window.location.hostname === 'juliaseletska.com') {
    return;
  }

  document.addEventListener('astro:page-load', onDOMContentLoaded);
})();
