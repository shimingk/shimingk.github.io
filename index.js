console.log("Welcome to my portfolio page!");
document.querySelector('.theme-toggle-button').addEventListener
  ('click', () => {
    document.body.classList.toggle('dark');
    console.log('bubble!')
  })