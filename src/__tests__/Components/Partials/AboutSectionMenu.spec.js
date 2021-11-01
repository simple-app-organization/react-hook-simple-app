import React from 'react';
import { create } from 'react-test-renderer';

import AboutSectionMenu from './../../../Components/Partials/AboutSectionMenu'

describe("Show the About Section Menu", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default params)", () => {
            const instance = create(<AboutSectionMenu />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    xit("Show About Section Menu", () => {

    });
});