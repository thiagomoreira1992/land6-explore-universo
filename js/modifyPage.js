export class Page {

    regex = new RegExp("([a-z]\\w+)(?=.html)")



    // /*Background Importation*/
    // --bgi-mountain1: url(./assets/mountains-universe-1.png);
    // --bgi-mountain2: url(./assets/mountains-universe-2.png);
    // --bgi-mountain3: url(./assets/mountains-universe-3.png);

    bgHome = 'url(./assets/mountains-universe-1.png)';
    bgUniverse = 'url(./assets/mountains-universe-2.png)';
    bgExploration = 'url(./assets/mountains-universe-3.png)';

    btnHome = document.querySelector('.home');
    btnUniverse = document.querySelector('.universe');
    btnExploration = document.querySelector('.exploration');
    logo = document.querySelector('.logo');


    resetActive() {
        this.btnHome.classList.remove('active');
        this.btnUniverse.classList.remove('active');
        this.btnExploration.classList.remove('active');
    }

    setPageStyle(page) {
        const regexExec = this.regex.exec(page)[0] || 'home';
        
        this.resetActive()
        document.querySelector(`.${regexExec}`).style.cursor = 'default';
        document.querySelector(`.${regexExec}`).classList.add('active');

        switch (regexExec) {
            case 'home':
                document.body.style.backgroundImage = this.bgHome;
                this.logo.style.cursor = 'auto';
                break;
            case 'universe':
                document.body.style.backgroundImage = this.bgUniverse;
                this.logo.style.cursor = 'pointer';
                break;
            case 'exploration':
                document.body.style.backgroundImage = this.bgExploration;
                this.logo.style.cursor = 'pointer';
                break;        
            default:

                break;
        }

    }

}