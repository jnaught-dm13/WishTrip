describe("All Content", () => {
  const inputText = "Cypress Testing";
  it("Does Not Do Much", () => {
    expect(true).to.equal(true);
  });

  it("Visits landing  page", () => {
    cy.visit("/");
    cy.contains("Login");
  });
  it("Clicks Trips Link", () => {
    cy.visit("/");
    cy.contains("Trips").click();
    cy.url().should("include", "/trips");
  });
  it("Clicks Plan Link", () => {
    cy.visit("/");
    cy.contains("Plan").click();
    cy.url().should("include", "/plan");
  });
  it("Clicks Profile Link", () => {
    cy.visit("/");
    cy.contains("Profile").click();
    cy.url().should("include", "/profile");
  });
  it("Clicks Home Link", () => {
    cy.visit("/");
    cy.contains("Home").click();
    cy.url().should("include", "/");
  });
  it("Clicks Login Link adds text to input field", () => {
    cy.visit("/");
    cy.contains("Login").click();
    cy.url().should("include", "/login");
    cy
      .get("[data-cypress-add-input]")
      .type(inputText)
      .should("have.value", inputText)
      .get("[data-cypress-button-add]")
      .click()
      .get("[data-cypress-add-input]")
      .should("have.value", null);
  });
});