const getHelloLink = require("./eng-spa");

test("Returns lowercase translatiom", () => {
    expect(getHelloLink("HELLO")).toBe("/hello");
    expect(getHelloLink("HOLA")).toBe("/hola");
});
