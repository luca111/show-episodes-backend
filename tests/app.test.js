const app = require("../app.js");
const fetch = require("node-fetch");

test("The standard initial api call should return 50 entries", () => {
    expect.assertions(1);
    return fetch("http://localhost:3000/shows-api?offset=0&entries=50")
    .then(response => response.json())
    .then(data => {
        expect(data.length).toBe(50);
    });
});
