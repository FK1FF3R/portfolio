const mudar = () => {
    const corpo = document.querySelector('body');
    const header = document.querySelector('#header');
    const logo = document.querySelector('#logo-title');
    const titulos = document.querySelectorAll('.title');
    const nav = document.querySelector('#nav-bar');
    const navLinks = document.querySelectorAll('.nav-links');
    const btn = document.querySelector('#contact');

    header.style.borderBottom = '3px solid var(--fundo)';
    corpo.style.backgroundColor = 'var(--cor-fonte)';
    corpo.style.color = 'var(--fundo)';
    logo.style.color = 'var(--fundo)';
    nav.style.backgroundColor = 'var(--fundo)';
    btn.style.boxShadow = '4px 4px 0 0 var(--cor-fonte)';
    btn.style.border = 'solid 3px var(--cor-fonte)';

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
