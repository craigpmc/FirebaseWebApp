'use strict';

describe('average',() => {
    it('Should calculating an average', (done) => {
        const array = [
            { dateOfBirth: "1981-07-29" },
            { dateOfBirth: "1987-01-09" },
            { dateOfBirth: "1951-12-21" },
            { dateOfBirth: "1995-03-17" },
            { dateOfBirth: "1992-09-10" },
        ];

        let average = 0;

        array.map((pilot) => {
            const date = new Date(pilot.dateOfBirth);
            const today = new Date();

            const timeDiff = Math.abs(today.getTime() - date.getTime());
            const age = Math.ceil(timeDiff / (1000 * 3600 * 24)) / 365;
            average += age;
        });

        (average / array.length).should.equal(35.85643835616438);
        done();
    });
});