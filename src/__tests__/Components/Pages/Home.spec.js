import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { create } from 'react-test-renderer';

import Home from "./../../../Components/Pages/Home";

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

describe("Show a home page", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<Home />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Show home page", () => {
        act(() => {
            render(<Home />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("Home page");
        expect(container.querySelector("p").textContent).toBe("This is the home page");
    });

    xit("Show the header", () => {
    });

    xit("Show the site menu", () => {
    });

    xit("Show the site footer", () => {
    });

    xit("Show first message to users", () => {
    });

    xit("I press the next button", () => {
    });
});