import { createServer } from "../support/wsServer";
describe("WebSocket Chat", () => {
  let wsServer = createServer("ws://localhost:8080");

  before(() => {
    cy.visitWithWsStub("/");
  });

  it("is expected to hide the chat section on visit", () => {
    cy.get("#chat").should("not.be.visible");
  });

  describe("setting a nickname", () => {
    before(() => {
      cy.get("#nick").type("Thomas");
      cy.get("#set-nick-button").click();
    });

    it("is expected to display a welcome message that contains the set nickname", () => {
      cy.get("#flash-message").should("contain.text", "Welcome Thomas!");
    });

    it("is expected to hide the set nickname section", () => {
      cy.get("#nickname").should("not.be.visible");
    });

    it("is expected to show the chat", () => {
      cy.get("#chat").should("be.visible");
    });
  });

  // it("is expected to display an incomming message", () => {
  //   cy.incommingMessage(wsServer, {
  //     nick: "Elvita",
  //     message: "Hi Thomas, this is interesting!",
  //   });
  //   cy.get('#messages').should('contain.text', "Elvita: Hi Thomas, this is interesting!")
  // });
});
