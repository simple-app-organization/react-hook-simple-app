import React from 'react';
import { create } from 'react-test-renderer';

import Footer from './../../../Components/Partials/Footer'

describe("Show the Footer site", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default params)", () => {
            const instance = create(<Footer />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    xit("Show Footer site", () => {

    });
    
});