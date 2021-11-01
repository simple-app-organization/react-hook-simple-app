import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { create } from 'react-test-renderer';

import Contact from "./../../../Components/Pages/Contact";

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

describe("Show the Contact Confirm page", () => {

    describe("Snapshots", () => {
    
        xit("Matches the snapshot (with default title)", () => {
            const instance = create(<Contact />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    xit("Show contact confirm page", () => {
        act(() => {
            render(<Contact />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("Contact page");
        expect(container.querySelector("p").textContent).toBe("This is the contact page");
    });

    xit("Show the data sent", () => {

    });
});