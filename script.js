  const roles = ["Software Developer", "Frontend Developer", "Web Developer", "Java Developer"];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const domain = document.getElementById("who");

  function typeEffect() {
    const current = roles[roleIndex];
    
    if (!deleting && charIndex < current.length) {
      // typing forward
      domain.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeEffect, 100);
    } 
    else if (deleting && charIndex > 0) {
      // deleting backward
      domain.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } 
    else {
      // switch between typing and deleting
      if (!deleting) {
        deleting = true;
        setTimeout(typeEffect, 1000); // pause before deleting
      } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // next role
        setTimeout(typeEffect, 200); // small pause before typing next
      }
    }
  }

  // Start the animation
  typeEffect();
