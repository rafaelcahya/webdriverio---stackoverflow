import { expect } from "@wdio/globals";
import QuestionPage from "../../../../pageObject/QuestionPage";
import Cookies from "../../../../pageObject/Cookies";

describe("Sidebar in Question page", async () => {
    before(async () => {
        await browser.maximizeWindow();
        await QuestionPage.openSOF();
        await Cookies.cookiesPopup.waitForDisplayed();
        await Cookies.acceptAllCookiesBtn.click();
        await QuestionPage.leftSidebar.waitForExist();
    });

    it("should be navigate to Stackoverflow Home page", async () => {
        await QuestionPage.homeBtn.waitForClickable();
        await QuestionPage.homeBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/");
    });

    it("should be navigate to Stackoverflow Question page", async () => {
        await QuestionPage.questionBtn.waitForClickable();
        await QuestionPage.questionBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/questions");
    });

    it("should be navigate to Stackoverflow Tags page", async () => {
        await QuestionPage.tagBtn.waitForClickable();
        await QuestionPage.tagBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/tags");
    });

    it("should be able to navigate to Users page", async () => {
        await QuestionPage.userBtn.waitForClickable();
        await QuestionPage.userBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/users");
    });

    it("should be able to navigate to Companies page", async () => {
        await QuestionPage.companiesBtn.waitForClickable();
        await QuestionPage.companiesBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/jobs/companies"
        );
    });

    it("should be appear Popover Labs on clicking Labs title", async () => {
        await QuestionPage.labsBtn.waitForClickable();
        await QuestionPage.labsBtn.click();
        await expect(QuestionPage.popoverLabs).toBeDisplayed();
        await browser.pause(2000);
    });

    it("should be navigate to Labs Page", async () => {
        await QuestionPage.labsBtn.waitForClickable();
        await QuestionPage.labsBtn.click();
        await expect(QuestionPage.popoverLabs).toBeDisplayed();
        await QuestionPage.learnMoreAboutLabsBtn.waitForClickable();
        await QuestionPage.learnMoreAboutLabsBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.co/labs/");
        await browser.pause(2000);
    });

    it("should be able to navigate to Jobs page", async () => {
        await QuestionPage.jobsBtn.waitForClickable();
        await QuestionPage.jobsBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/jobs?source=so-left-nav"
        );
    });

    it("should be able to navigate to Discussion page", async () => {
        await QuestionPage.discussionBtn.waitForClickable();
        await QuestionPage.discussionBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/beta/discussions"
        );
    });

    it("should be able to appear a Collective Popup", async () => {
        await QuestionPage.collectionBtn.waitForClickable();
        await QuestionPage.collectionBtn.click();
        await expect(QuestionPage.collectionPopover).toBeDisplayed();
    });

	it('should be navigate to Collective page', async () => {
		await QuestionPage.collectionBtn.waitForClickable()
		await QuestionPage.collectionBtn.click()
		await expect(QuestionPage.collectionPopover).toBeDisplayed()
		await QuestionPage.learnMoreAboutCollectiveBtn.waitForClickable()
		await QuestionPage.learnMoreAboutCollectiveBtn.click()
		await expect(browser).toHaveUrl("https://stackoverflow.com/collectives")
	});

	it('should be navigate to All Collective page', async () => {
		await QuestionPage.exploreAllCollectiveLink.waitForClickable()
		await QuestionPage.exploreAllCollectiveLink.click()
		await expect(browser).toHaveUrl("https://stackoverflow.com/collectives-all")
	});

	it('should be navigate to Overflow AI Learn More page', async () => {
		await QuestionPage.leftSidebar.scrollIntoView()
		await QuestionPage.learnMoreBtn.waitForClickable()
		await QuestionPage.learnMoreBtn.click()
		await expect(browser).toHaveUrl("https://stackoverflow.co/teams/ai/?utm_medium=referral&utm_source=stackoverflow-community&utm_campaign=side-bar&utm_content=overflowai-learn-more")
	});

	it('should be navigate to Overflow AI Explore Teams page', async () => {
		await QuestionPage.leftSidebar.scrollIntoView()
		await QuestionPage.exploreTeamsBtn.waitForClickable()
		await QuestionPage.exploreTeamsBtn.click()
		await expect(browser).toHaveUrl("https://stackoverflow.co/teams/?utm_medium=referral&utm_source=stackoverflow-community&utm_campaign=side-bar&utm_content=explore-teams")
        await browser.pause(2000);
	});
});
