import { expect } from "@wdio/globals";
import QuestionPage from "../../../../pageObject/QuestionPage";
import Cookies from "../../../../pageObject/Cookies";
import TaggedPage from "../../../../pageObject/TaggedPage";
import LoginPage from "../../../../pageObject/LoginPage";
import AskQuestionPage from "../../../../pageObject/AskQuestionPage";

describe("Content", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await LoginPage.login();
        await Cookies.cookiesPopup.waitForDisplayed();
        await Cookies.acceptAllCookiesBtn.click();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("should be able to show search popup", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await expect(QuestionPage.searchPopup).toBeDisplayed();
    });

    it("should be able to navigate to search guide page", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchHelpBtn.waitForClickable();
        await QuestionPage.searchHelpBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/help/searching"
        );
    });

    it("should be able to search within tag", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("[reactjs]");
        await browser.keys("Enter");
    });

    it("should be able to search by author", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("user: Berns");
        await browser.keys("Enter");
    });

    it("should be able to search by exact phrase", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("javascript");
        await browser.keys("Enter");
    });

    it("should be able to search by collective content", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("collective: 'javascript'");
        await browser.keys("Enter");
    });

    it("should be able to search based on number of answer", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("answers:10");
        await browser.keys("Enter");
    });

    it("should be able to search based on score", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("score:10");
        await browser.keys("Enter");
    });

    it("should be able to search based on is answer", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("is:answer");
        await browser.keys("Enter");
    });

    it("should be able to search based on is question", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("is:question");
        await browser.keys("Enter");
    });

    it("should be able to search based on is accepted", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.searchField.setValue("isaccepted:yes");
        await browser.keys("Enter");
    });

    it.only("should be able to navigate to ask question page", async () => {
        await QuestionPage.searchField.waitForExist();
        await QuestionPage.searchField.click();
        await QuestionPage.askQuestionBtn.waitForClickable()
        await QuestionPage.askQuestionBtn.click()
        await expect(browser).toHaveUrl("https://stackoverflow.com/questions/ask")
        await expect(AskQuestionPage.title).toBeDisplayed()
        await browser.keys("Enter");
        await browser.pause(2000)
    });

    it("should be navigate to article", async () => {
        await QuestionPage.titleContent.waitForClickable();
        await QuestionPage.titleContent.click();
        await expect(QuestionPage.questionHeader).toBeDisplayed();
    });

    it("should be able to navigate to Tagged Question page", async () => {
        await QuestionPage.contentQuestion.waitForExist();
        await QuestionPage.tagPost.click();
        await expect(TaggedPage.tagQuestionPage).toBeDisplayed();
    });

    it("should be able to navigate to profile", async () => {
        await QuestionPage.contentQuestion.waitForExist();
        const profileName = await QuestionPage.postName.getAttribute("href");
        await QuestionPage.postName.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com" + profileName
        );
    });

    it("should be able to show popup on hovering over tag", async () => {
        await QuestionPage.contentQuestion.waitForExist();
        await QuestionPage.tagPost.moveTo();
        await expect(QuestionPage.tagPopup).toBeDisplayed();
    });

    // it("should be able to watch tag", async () => {
    //     await QuestionPage.contentQuestion.waitForExist();
    //     await QuestionPage.searchField.setValue("[javascript]")
    //     await browser.keys("Enter")
    //     await QuestionPage.tagPost.moveTo();
    //     await QuestionPage.watchTagBtn.waitForClickable();
    //     await QuestionPage.watchTagBtn.click();
    //     await expect(QuestionPage.unwatchTagBtn).toBeDisplayed();
    // });

    // it("should be able to unwatch tag", async () => {
    //     await QuestionPage.contentQuestion.waitForExist();
    //     await QuestionPage.searchField.setValue("[javascript]")
    //     await browser.keys("Enter")
    //     await QuestionPage.tagPost.moveTo();
    //     await QuestionPage.unwatchTagBtn.waitForClickable();
    //     await QuestionPage.unwatchTagBtn.click();
    //     await expect(QuestionPage.watchTagBtn).toBeDisplayed();
    // });

    // it("should be able to click ignore tag", async () => {
    //     await QuestionPage.contentQuestion.waitForExist();
    //     await QuestionPage.searchField.setValue("[javascript]")
    //     await browser.keys("Enter")
    //     await QuestionPage.tagPost.moveTo();
    //     await QuestionPage.watchTagBtn.waitForClickable();
    //     await QuestionPage.watchTagBtn.click();
    //     await QuestionPage.unwatchTagBtn.waitForClickable();
    //     await QuestionPage.unwatchTagBtn.click();
    // });
});