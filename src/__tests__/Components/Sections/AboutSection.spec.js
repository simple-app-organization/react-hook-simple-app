import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter, Switch } from "react-router-dom";

import AboutSection from "../../../Components/Sections/AboutSection";

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

describe("Allowed the navigation of About Section", () => {

    xit("Go to page About", () => {
        render(
            <MemoryRouter initialEntries={["/", "/about"]}
                initialIndex={1}>
                <AboutSection />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("About Us page");
        expect(container.querySelector("p").textContent).toBe("This is the about us page");
    });

    xit("Go to page Who Are", () => {
        render(
            <MemoryRouter initialEntries={["/", "/about/whoare"]}
                initialIndex={1}>
                <AboutSection />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("Contact page");
        expect(container.querySelector("p").textContent).toBe("This is the contact page");
    });

    xit("Go to page Where Are", () => {
        render(
            <MemoryRouter initialEntries={["/", "/about/whereare"]}
                initialIndex={1}>
                <AboutSection />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("Contact page");
        expect(container.querySelector("p").textContent).toBe("This is the contact page");
    });
});