// https://docs.cypress.io/api/introduction/api.html

describe("Loading layout", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("div", "Paul Keen");
  });

  it("Move to name", () => {
    cy.visit("/#name");
    cy.contains("label", "First Name");
  });
});
