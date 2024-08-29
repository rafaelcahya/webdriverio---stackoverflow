import { expect } from "@wdio/globals";
import QuestionPage from "../../../pageObject/QuestionPage";
import Cookies from "../../../pageObject/Cookies";
import TaggedPage from "../../../pageObject/TaggedPage";
import LoginPage from "../../../pageObject/LoginPage";

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