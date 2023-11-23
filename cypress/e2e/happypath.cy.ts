describe("happy Path", () => {
  it("should login and render the employees table", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.findByLabelText(/Correo electrónico/i).type("c.quispe@culqi.com");
    cy.findByLabelText(/Contraseña/i).type("admin123");
    cy.findByRole("button", { name: "Iniciar sesión" }).click();
    cy.intercept(
      "GET",
      "https://fepruebatecnicaculqi-backend-production.up.railway.app/empleados?limit=8&page=1",
      {
        fixture: "employees.json",
      }
    );

    cy.findAllByTestId("employee").should("have.length", 8);
  });
});
