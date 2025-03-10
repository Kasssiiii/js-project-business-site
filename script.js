//  Make the site interactive using JavaScript
// so that when the user clicks, all links in your navbar become visible,
// and when clicked again, they are hidden

const hamburgerButton = document.getElementById("hamburgerID");
const nav = document.getElementById("nav");
hamburgerButton.onclick = () => {
  // previous is null when page loads, 
  // "block" when shown and "none" we set it again
  let previous = nav.style.display;
  if (previous == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
};
