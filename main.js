let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Futura científica y programadora para la difusión de la información y concientización.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
