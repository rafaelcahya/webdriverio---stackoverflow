import { expect } from "@wdio/globals";
import QuestionPage from "../../../../pageObject/QuestionPage";

describe("Access Question Page", async () => {
    before(async () => {
        await browser.maximizeWindow();
        await QuestionPage.openSOF();
    });

    it("should be able to access Question page", async () => {
        await QuestionPage.openSOF("questions");
        await expect(browser).toHaveUrl("https://stackoverflow.com/questions");
    });
});
