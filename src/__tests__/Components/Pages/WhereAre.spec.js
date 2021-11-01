import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';

import AboutSectionMenu from "./../../../Components/Partials/AboutSectionMenu";
import WhereAre from "./../../../Components/Pages/WhereAre";

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

describe("Show the Where Are page", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default params)", () => {
            const instance = create(<WhereAre />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Show Where Are page", () => {
        act(() => {
            render(<WhereAre />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("Where Are");
        expect(container.querySelector("p").textContent).toBe("This is the where are page");
    });

    it("Show the about section menu", () => {
        const wrapper = shallow(<WhereAre />);
        expect(wrapper.contains(<AboutSectionMenu />)).toBe(true);
    });

    xit("Show almost one link/button to Place details", () => {

    });

    xit("Click on link/button to Place details", () => {

    });
});