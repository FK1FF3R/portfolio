const dark = document.querySelector('.bi-moon-stars');
const light = document.querySelector('.bi-brightness-high');
const corpo = document.querySelector('body');
const header = document.querySelector('#header');
const logo = document.querySelector('#logo-title');
const titulos = document.querySelectorAll('.title');
const nav = document.querySelector('#nav-bar');
const navLinks = document.querySelectorAll('.nav-links');
const btn = document.querySelector('#contact');

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
        titulos[i].style.color = 'var(--cor4)';
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
