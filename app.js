const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls', 'controlz');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


/* This is how you shift the green color from btn to btn */
function PageTrans() {
    /* Button click active class */
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'; /* that little space is important */
        });
    }
    /* program each active section */
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            /* remove active from other btn or section */
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            /* Hide sections */
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    /* Toggle light dark */
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    });
}


PageTrans()

