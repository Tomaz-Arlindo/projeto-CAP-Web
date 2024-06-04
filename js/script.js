var path = window.location.pathname;
var fileName = path.substring(path.lastIndexOf('/') + 1);
console.log(fileName);

// Cabeçalho
function gerarCabecalho() {
  let newMenu = document.createElement('div');
  let logo = document.createElement('img');
  let nav1 = document.createElement('a');
  let nav2 = document.createElement('a');
  let nav3 = document.createElement('a');
  let darkMode = document.createElement('button');
  
  newMenu.classList.add('menu');
  
  logo.src = '/assets/logo.jpg';

  
  nav1.href = 'index.html';
  nav1.innerHTML = 'Cards';
  
  nav2.href = 'galeria.html';
  nav2.innerHTML = 'Galeria';
  
  nav3.href = 'contato.html';
  nav3.innerHTML = 'Contatos';

  if (nav1.href.split('/')[3] == fileName) {
    nav1.classList.add('active');
  }
  else if (nav2.href.split('/')[3] == fileName) {
    nav2.classList.add('active');
  }
  else {
    nav3.classList.add('active');
  }
  
  darkMode.id = 'toggle-theme';
  darkMode.innerHTML = 'Trocar Tema';
  
  let cabecalho = document.getElementById('cab');
  cabecalho.appendChild(newMenu);
  cabecalho.appendChild(darkMode);
  
  newMenu.appendChild(logo);
  newMenu.appendChild(nav1);
  newMenu.appendChild(nav2);
  newMenu.appendChild(nav3);
}

gerarCabecalho();
  
  
  
  
// Darkmode
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  document.getElementById('toggle-theme').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

// Fade In
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              return;
          } else {
              entry.target.classList.add("visible");
              appearOnScroll.unobserve(entry.target);
          }
      });
  }, appearOptions);

  faders.forEach(fader => {
      appearOnScroll.observe(fader);
  });
});

// Type Effect
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}
const h1 = document.querySelector('h1');
typeWriter(h1);


// Image API
async function fetchRandomDogImage() {
  try {
      let data;
      do {
          const response = await fetch('https://random.dog/woof.json');
          data = await response.json();
        } while (data.url.endsWith('.mp4') || data.url.endsWith('.webm')); // Repete a requisição se a URL terminar com .mp4
      return data.url;

  } catch (error) {
      console.error('Error fetching the random dog image:', error);
      return url;
  }
}

// Seleciona a div "galery" onde queremos adicionar as divs e imagens

if (fileName == "galeria.html") {
  const galery = document.querySelector('.galery');
  
  // Loop sobre o número de divs e imagens que você deseja criar
  for (let i = 1; i <= 25; i++) {
    // Cria uma nova div com a classe "portrait"
    const divPortrait = document.createElement('div');
    divPortrait.classList.add('portrait');
    
    // Cria um elemento img
    const img = document.createElement('img');
    
    // Define atributos para a imagem (src, alt, etc.)
    fetchRandomDogImage()
    .then(url => {
      if (url) {
        img.src = url;
      } else {
        console.error('Falha ao obter o URL da imagem do cachorro.');
      }
    });
    
    img.src = fetchRandomDogImage();
    // Adiciona a imagem como filho da div portrait
    divPortrait.appendChild(img);
    
    // Adiciona a div portrait como filho da div galery
    galery.appendChild(divPortrait);
  }
}


// Tamanho da senha
function detecta(){
  let valor = document.querySelector('#senha').value
  console.log(valor.length)
  if (valor.length < 10){
      document.querySelector('#aviso').innerHTML = "A senha deve conter pelo menos 10 caracteres!"
  }else{
      document.querySelector('#aviso').innerHTML = ""
  }
}