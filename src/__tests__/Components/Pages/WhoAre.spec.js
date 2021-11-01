import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';

import AboutSectionMenu from "./../../../Components/Partials/AboutSectionMenu";
import WhoAre from "./../../../Components/Pages/WhoAre";

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

describe("Show the Who Are page", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default params)", () => {
            const instance = create(<WhoAre />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Render Component", () => {
        act(() => {
            render(<WhoAre />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("Who Are");
        expect(container.querySelector("p").textContent).toBe("This is the who are page");
    });

    it("Show Who Are page", () => {
        const wrapper = shallow(<WhoAre />);
        expect(wrapper.contains(<AboutSectionMenu />)).toBe(true);
    });

    it("Show the about section menu", () => {
        const wrapper = shallow(<WhoAre />);
        expect(wrapper.contains(<AboutSectionMenu />)).toBe(true);
    });

    xit("Show almost one link/button to Person details", () => {

    });

    xit("Click on link/button to Person details", () => {

    });
});