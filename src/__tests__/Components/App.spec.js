import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from "enzyme"
import { act } from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

import App from "./../../Components/App";

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

describe("Startup the application", () => {

    it("Show home page as start page", () => {
        act(() => {
            render(<App />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("Home page");
        expect(container.querySelector("p").textContent).toBe("This is the home page");
    });

    xit("Show error page if an error occurs", () => {

    });
});