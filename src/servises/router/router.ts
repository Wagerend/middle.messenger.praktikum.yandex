import { Route } from './route';

class Router{

    private static instance: Router;
    public routes ;
    public history;
    private currentRoute;
    private rootQuery;
    
    constructor(rootQuery){
        if(Router.instance){
            return Router.instance;
        }

        this.routes = [];
        this.history = window.history;
        this.currentRoute = null;
        this.rootQuery = rootQuery;

        Router.instance = this;
    }

    public use(pathName, block, props): Router{
        const route = new Route(pathName, block, {...props,rootQuery: this.rootQuery});
        this.routes.push(route);
        return this;
    }

    public start(): void{
        window.onpopstate = (event:any) => {
            this.onRoute(event.currentTarget.location.pathname);
        };

        this.onRoute(window.location.pathname);
    }

    private onRoute(pathName: string): void{
        const route = this.getRoute(pathName);

        if(this.currentRoute){
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        //route.render(route, pathName);
        route.render();
    }

    public go(pathName: string): void{
        this.history.pushState({},'',pathName);
        this.onRoute(pathName);
    }

    public back(): void{
        this.history.back();
    }

    public forward(): void{
        this.history.forward();
    }

    public getRoute(pathName: string): Route{
        return this.routes.find(route => route.match(pathName)) ??
               this.routes.find(route => route.match('*'));
    }
}

export const router = new Router('#TM');