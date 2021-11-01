import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';

import AboutSectionMenu from "./../../../Components/Partials/AboutSectionMenu";
import About from "./../../../Components/Pages/About";

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

describe("Show the About Us page", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default params)", () => {
            const instance = create(<About />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Show about page", () => {
        act(() => {
            render(<About />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("About Us page");
        expect(container.querySelector("p").textContent).toBe("This is the about us page");
    });

    it("Show the about section menu", () => {
        const wrapper = shallow(<About />);
        expect(wrapper.contains(<AboutSectionMenu />)).toBe(true);
    });

    it("Show link to Who Are page", () => {
        render(<About />, container);
        expect(container.querySelectorAll("a[href='/about/whoare']")[0].textContent).toBe("Who Are");
    });

    it("Show link to Where Are page", () => {
        act(() => {
            render(<About />, container);
        });
        expect(container.querySelectorAll("a[href='/about/whereare']")[0].textContent).toBe("Where Are");
    });
});