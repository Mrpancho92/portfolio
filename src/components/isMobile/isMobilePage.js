import { useMediaQuery } from 'react-responsive';
const IsMobilePage = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 575px)` });
    if (isMobile) {
        const overFlow = document.getElementById('burger-checkbox');
        const close = document.querySelector('.menu-list');
        const menu = document.querySelector('.menu');
        const menuItem = document.querySelectorAll('.menu-item');
        const burger = document.querySelector('.burger');
        // Закрытие-открытие бургер меню по нажатию на сам бургер
        overFlow.addEventListener('click', () => {
            if (overFlow.checked) {
                document.body.style.overflow = "hidden";
                menu.style = `
                 position: fixed;
                 top: 0;
                 left: 0;
                 width: 100%;
                 height: 100%;
                 z-index: 1;
                 background-color: rgba(0, 0, 0, 0.5);
                   `
                close.style = `
                display: grid;
                `
                burger.style = `
                left: 85%;
                z-index: 5;
                `
             } else {
                document.body.style.overflow = "";
                menu.style = ``;
                close.style = ``;
                burger.style = ``;
             }
        })
        // Закрытие бургер меню по нажатию на поле вне зоны бургер меню
       window.addEventListener('click', (e) => {
        if (e.target === menu && overFlow.checked === true ) {
            overFlow.checked = false;
            document.body.style.overflow = "";
            menu.style = ``;
            close.style = ``;
            burger.style = ``;
        }
       });
         // Закрытие бургер меню по нажатию на навигационный элемент (ссылку страницу) 
       Array.from(menuItem).forEach(item => {
            item.addEventListener('click', () => {
                overFlow.checked = false;
                document.body.style.overflow = "";
                menu.style = ``;
                close.style = ``;
                burger.style = ``;
            });
       });
    }  
}
export default IsMobilePage;
