import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";

import SiteRoutes from "./../../../Components/Sections/SiteRoutes";
import NotFound from "./../../../Components/Pages/NotFound";
import App from "./../../../Components/App";
import Header from "./../../../Components/Partials/Header";
import Footer from "./../../../Components/Partials/Footer";

Enzyme.configure({ adapter: new Adapter() });
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Show the Error page", () => {

    describe("Snapshots", () => {
    
        xit("Matches the snapshot (with default title)", () => {
            const instance = create(<NotFound />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    xit("Show Error page", () => {
        act(() => {
            render(<NotFound />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("404 Page not found");
        expect(container.querySelector("p").textContent).toBe("The page is not found");
    });
    
    xit("Show the header", () => {
        const wrapper = shallow(
            <App />
        );
        expect(wrapper.contains(<Header />)).toBe(true);
    });

    xit("Show the site menu", () => {
    });

    xit("Show the site footer", () => {
    });

});