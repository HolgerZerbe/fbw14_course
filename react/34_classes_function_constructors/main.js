class ReactComponent {
    constructor () {

    }

    shouldComponentRender () {
        // to do
    }

    render () {
        // to do
    }
}

// stateful -> erbt von ReactComponent
class App extends ReactComponent {
    constructor() {
        super();
    }
    render()  {
        // to do
    }
}

// ALTERNATIV:

// function App() {
//    ReactComponent.constructor.call(this) 
// }

// App.prototype.render = function() {

// }


const app = new App();


// stateless -> weil er nicht von ReactComponent erbt
function Header()  {
    return '<div>Header</div>'
}