// https://docs.cypress.io/api/introduction/api.html

describe("Loading layout", () => {
  function expectsOnNamePage() {
    cy.url().should("include", "/name");
    cy.contains("label", "First Name");
  }

  function handleNameFormInputs() {
    cy.get("#first-name")
      .type("First Name")
      .should("have.value", "First Name")
      .trigger("change");

    cy.get("[data-cy-preview-block]").should("contain", "First Name");

    cy.get("#last-name")
      .type("Last")
      .should("have.value", "Last");
  }

  it("Success scenario to manage resume", () => {
    cy.visit("/");

    cy.get("[data-cy=nav-next]").click();

    expectsOnNamePage();

    handleNameFormInputs();

    cy.get("[data-cy=nav-next]").click();

    cy.url().should("include", "/subtitle");
    cy.contains("Subtitle");

    cy.get("#subtitle")
      .type("Founder")
      .should("have.value", "Founder")
      .trigger("change");

    cy.get("[data-cy-preview-block]").should("contain", "Founder");

    cy.get("[data-cy=nav-next]").click();

    cy.url().should("include", "/email");
    cy.contains("Email");

    cy.get("#email")
      .type("paul@example.com")
      .blur()
      .should("have.value", "paul@example.com");

    cy.get("[data-cy-preview-block]").should("contain", "| paul@example.com");

    cy.get("[data-cy=nav-next]").click();

    cy.url().should("include", "/experience");
    cy.contains("Experience");

    cy.contains("Add Job").click();

    cy.get("[data-cy-new-highlight]:last()")
      .type("New Highlight")
      .blur()
      .should("have.value", "");

    cy.get("[data-cy-highlight]:last").should("have.value", "New Highlight");
    cy.get("[data-cy-preview-block]").should("contain", "New Highlight");

    cy.get("[data-cy='job-title']")
      .type("Job Title")
      .blur()
      .should("have.value", "Job Title");

    cy.get("[data-cy-preview-block]").should("contain", "Job Title");

    cy.contains("Delete").click();

    cy.get("[data-cy-highlight]").should("have.length", 0);

    cy.contains("Add Job").click();
    cy.contains("Delete Job").click();

    cy.get("[data-cy=nav-prev").click();
    cy.get("[data-cy=nav-prev").click();

    cy.url().should("include", "/subtitle");
    cy.contains("Subtitle");

    cy.get("#subtitle")
      .type("{home}Co-")
      .should("have.value", "Co-Founder")
      .trigger("change");

    cy.get("[data-cy-preview-block]").should("contain", "Co-Founder");

    cy.get("#subtitle")
      .type(
        "{end}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}"
      )
      .should("have.value", "")
      .trigger("change");

    cy.get("[data-cy-preview-block]").should("not.contain", "Co-Founder");
    cy.get("[data-cy-preview-block]").should(
      "not.contain",
      "| paul@example.com"
    );
    cy.get("[data-cy-preview-block]").should("contain", "paul@example.com");

    cy.get("[data-cy=nav-prev").click();

    cy.get("#last-name")
      .clear()
      .type("New Last")
      .blur()
      .should("have.value", "New Last");

    cy.get("[data-cy-preview-block]").should("contain", "New Last");
  });
});
