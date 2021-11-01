import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

import SiteRoutes from "../../../Components/Sections/SiteRoutes";

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

describe("Allowed the primary navigation of the site", () => {
    
    it("Go to page Home page", () => {
        render(
            <MemoryRouter initialEntries={["/"]}
                initialIndex={0}>
                <SiteRoutes />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("Home page");
        expect(container.querySelector("p").textContent).toBe("This is the home page");
    });

    it("Go to page About", () => {
        render(
            <MemoryRouter initialEntries={["/", "/about"]}
                initialIndex={1}>
                <SiteRoutes />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("About Us page");
        expect(container.querySelector("p").textContent).toBe("This is the about us page");
    });

    it("Go to page Contact", () => {
        render(
            <MemoryRouter initialEntries={["/", "/contact"]}
                initialIndex={1}>
                <SiteRoutes />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("Contact page");
        expect(container.querySelector("p").textContent).toBe("This is the contact page");
    });

    it("Go to page Not Found", () => {
        render(
            <MemoryRouter initialEntries={["/", "/notfound"]}
                initialIndex={1}>
                <SiteRoutes />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("404 Page not found");
        expect(container.querySelector("p").textContent).toBe("The page is not found");
    });

    it("Go to page Error", () => {
        render(
            <MemoryRouter initialEntries={["/", "/error"]}
                initialIndex={1}>
                <SiteRoutes />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("Error Page");
        expect(container.querySelector("p").textContent).toBe("Sorry, there are some errors...");
    });
});