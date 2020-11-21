import { h, render } from 'preact';
import {Button} from "./components/atoms/button/button";

const App = () => {
    return (
        <div className="container text-center mx-auto bg-yellow-100 rounded-lg my-8 py-12">
            <h1 className="text-5xl mb-12">Hello from Parcel and Tailwind!</h1>
            <p className="text-xl mb-12 w-3/6 mx-auto">
                This project has <b>Parcel ^2.X.X</b> with <b>Tailwind ^2.X.X</b> working. Thanks to :global in ./index.pcss you can use
                tailwind classes everywhere, and thanks to "css-modules" you also can use .pcss locally and import
                the styles per file.
            </p>
            <Button>Hover me, click me and leave area or make the page smaller!</Button>
        </div>
    )
}

render(<App />, document.getElementById('root'));