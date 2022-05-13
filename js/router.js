import { Page } from './modifyPage.js'


const page = new Page;

export class Router {

    routes = {}

    add(routeName, page, bg) {
        this.routes[routeName] = {page, bg};
    }

    route(event) {
        event = event || window.event;
        console.log(event)
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        this.handle()
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname].page || this.routes[404].page
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
            .then(() => {
                page.setPageStyle(this.routes[pathname].page)
            })
    }
}