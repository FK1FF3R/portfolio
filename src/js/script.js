const dark = document.querySelector('.bi-moon-stars');
const light = document.querySelector('.bi-brightness-high');
const corpo = document.querySelector('body');
const header = document.querySelector('#header');
const logo = document.querySelector('#logo-title');
const titulos = document.querySelectorAll('.title');
const nav = document.querySelector('#nav-bar');
const navLinks = document.querySelectorAll('.nav-links');
const btn = document.querySelector('#contact');
const card = document.querySelectorAll('.card');
const tittleStack = document.querySelector('#tittle-stack');

// dark.addEventListener('click', () => {
    
// });

const mudar = () => {
    header.style.borderBottom = '3px solid var(--fundo)';
    corpo.style.backgroundColor = 'var(--cor-fonte)';
    corpo.style.color = 'var(--fundo)';
    logo.style.color = 'var(--fundo)';
    nav.style.backgroundColor = 'var(--fundo)';
    btn.style.boxShadow = '4px 4px 0 0 var(--cor-fonte)';
    btn.style.border = 'solid 3px var(--cor-fonte)';
    dark.style.display = 'none';
    light.style.display = 'block';
    light.style.color = 'var(--cor-fonte)';
    tittleStack.style.color = 'var(--fundo)';
    tittleStack.style.backgroundColor = 'var(--cor-fonte)';
    tittleStack.style.border = '3px solid var(--fundo)';
    
    
    for (let i = 0; i < card.lenght; i++) {
        // card[i].style.border = 'solid 3px var(--fundo)';
        card[i].style.boxShadow = '4px 4px 0 0 var(--fundo)';
    }

    for(let i = 0; i < navLinks.length; i++){
        navLinks[i].style.color = 'var(--cor-fonte)';

        navLinks[i].addEventListener('mouseover', () => {
            navLinks[i].style.textDecoration = 'var(--cor-fonte) underline 3px';
        })  

        navLinks[i].addEventListener('mouseout', () => {
            navLinks[i].style.textDecoration = 'none';
        })
    }

    for(let i = 0; i < titulos.length; i++){    
        titulos[i].style.color = 'var(--red)';
    }
}


const voltar = () => {
    header.removeAttribute('style');
    corpo.removeAttribute('style');
    logo.removeAttribute('style');
    nav.removeAttribute('style');
    btn.removeAttribute('style');
    dark.style.display = 'block';
    light.style.display = 'none';

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].removeAttribute('style');
    }

    for (let i = 0; i < titulos.length; i++) {
        titulos[i].removeAttribute('style');
    }
};


const redirecionar = () => {
    const quiz = document.querySelector('.quiz');
    const crud = document.querySelector('.crud');
    const donate = document.querySelector('.donate');

    quiz.addEventListener('click', () => {
        window.open('https://github.com/FreitasProcopio/Quiz_Squad06', '_blank');
    });

    crud.addEventListener('click', () => {
        window.open('https://github.com/FK1FF3R/Mini-Projeto-M2', '_blank');
    });  

    donate.addEventListener('click', () => {
        window.open('https://github.com/FK1FF3R/DonateHub', '_blank');
    });
    
}