import { expect } from "@wdio/globals";
import QuestionPage from "../../../../pageObject/QuestionPage";
import Cookies from "../../../../pageObject/Cookies";
import TaggedPage from "../../../../pageObject/TaggedPage";
import ProfilePage from "../../../../pageObject/ProfilePage";

describe("Content", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await QuestionPage.openSOF();
        await Cookies.cookiesPopup.waitForDisplayed();
        await Cookies.acceptAllCookiesBtn.click();
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

    it("should be able to click watch tag and show the login popup if user is not logged in", async () => {
        await QuestionPage.contentQuestion.waitForExist();
        await QuestionPage.tagPost.moveTo();
        await QuestionPage.watchTagBtn.waitForClickable();
        await QuestionPage.watchTagBtn.click();
        await expect(QuestionPage.signupModal).toBeDisplayed();
        await browser.pause(2000);
    });

    it("should be able to click ignore tag and show the login popup if user is not logged in", async () => {
        await QuestionPage.contentQuestion.waitForExist();
        await QuestionPage.tagPost.moveTo();
        await QuestionPage.watchTagBtn.waitForClickable();
        await QuestionPage.watchTagBtn.click();
        await expect(QuestionPage.signupModal).toBeDisplayed();
    });

    it.only("should be able to click rss button and show the popup", async () => {
        await QuestionPage.contentQuestion.waitForExist();
        await QuestionPage.tagPost.moveTo();
        await QuestionPage.rssBtn.waitForClickable();
        await QuestionPage.rssBtn.click();
        await expect(QuestionPage.rssPopup).toBeDisplayed();
        await browser.pause(2000);
    });
});
