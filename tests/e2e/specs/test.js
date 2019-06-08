// https://docs.cypress.io/api/introduction/api.html

describe("Loading layout", () => {
  it("Success scenario to manage resume", () => {
    cy.contains("Start").click();

    cy.url().should("include", "/name");
    cy.contains("label", "First Name");

    cy.get("#first-name")
      .type("First Name")
      .should("have.value", "First Name")
      .trigger("change")

    cy.get("[data-cy-preview-block]").should('contain', "First Name");

    cy.get("#last-name").type("Last").should("have.value", "Last")

    cy.contains("Next").click();

    cy.url().should("include", "/subtitle");
    cy.contains("Subtitle");

    cy.get("#subtitle")
      .type("Founder")
      .should("have.value", "Founder")
      .trigger("change")

    cy.get("[data-cy-preview-block]").should('contain', "Founder");

    cy.contains("Next").click();

    cy.url().should("include", "/email");
    cy.contains("Email");

    cy.get("#email")
      .type("paul@example.com")
      .blur()
      .should("have.value", "paul@example.com");

    cy.get("[data-cy-preview-block]").should('contain', "| paul@example.com");

    cy.contains("Prev").click();

    cy.url().should("include", "/subtitle");
    cy.contains("Subtitle");

    cy.get("#subtitle")
      .type("{home}Co-")
      .should("have.value", "Co-Founder")
      .trigger("change")

    cy.get("[data-cy-preview-block]").should('contain', "Co-Founder");

    cy.get("#subtitle")
      .type("{end}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")
      .should("have.value", "")
      .trigger("change")

    cy.get("[data-cy-preview-block]").should('not.contain', "Co-Founder");
    cy.get("[data-cy-preview-block]").should('not.contain', "| paul@example.com");
    cy.get("[data-cy-preview-block]").should('contain', "paul@example.com");

    cy.contains("Prev").click();

    cy.get("#last-name")
      .clear()
      .type("New Last")
      .blur()
      .should("have.value", "New Last")

    cy.get("[data-cy-preview-block]").should('contain', "New Last");


  });
});
