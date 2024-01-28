describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.contains("Tomb Raider");
    cy.contains("Fortnite").click();

    cy.url().should("include", "/65b384aff50a2f66de349309");
    cy.contains("Swap").click();

    // Select PS4
    cy.get(
      ".sc-bcXGCL > .hcuFek > .hJzyOz > .xUHpL > .jyHcwD > .sc-ksBlXE > :nth-child(1)"
    )
      .select("PS4")
      .should("have.value", "PS4");

    // Wait for game options to be populated based on the selected platform
    cy.get(
      ".sc-bcXGCL > .hcuFek > .hJzyOz > .xUHpL > .jyHcwD > .sc-ksBlXE > :nth-child(2)"
    )
      .select("Gta VI")
      .should("have.value", "Gta VI");

    // cy.contains("Add Game").eq(1).click();

    // Verify that the added game is displayed on the screen
    // cy.contains("Gta VI").should("exist");
  });
});
