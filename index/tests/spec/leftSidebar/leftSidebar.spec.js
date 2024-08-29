import { expect } from "@wdio/globals";
import LeftSidebar from "../../../pageObject/LeftSidebar";
import Cookies from "../../../pageObject/Cookies";
import LoginPage from "../../../pageObject/LoginPage";

describe("Sidebar in Question page", async () => {
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

    it("should be able to navigate to Stackoverflow Home page", async () => {
        await LeftSidebar.homeBtn.waitForClickable();
        await LeftSidebar.homeBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/");
    });

    it("should be able to navigate to Stackoverflow Question page", async () => {
        await LeftSidebar.questionBtn.waitForClickable();
        await LeftSidebar.questionBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/questions");
    });

    it("should be able to navigate to Stackoverflow Tags page", async () => {
        await LeftSidebar.tagBtn.waitForClickable();
        await LeftSidebar.tagBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/tags");
    });

    it("should be able to navigate to Users page", async () => {
        await LeftSidebar.userBtn.waitForClickable();
        await LeftSidebar.userBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/users");
    });

    it("should be able to navigate to Companies page", async () => {
        await LeftSidebar.companiesBtn.waitForClickable();
        await LeftSidebar.companiesBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/jobs/companies"
        );
    });

    it("should be able to appear Popover Labs on clicking Labs title", async () => {
        await LeftSidebar.labsBtn.waitForClickable();
        await LeftSidebar.labsBtn.click();
        await expect(LeftSidebar.popoverLabs).toBeDisplayed();
    });

    it("should be able to navigate to Labs Page", async () => {
        await LeftSidebar.labsBtn.waitForClickable();
        await LeftSidebar.labsBtn.click();
        await expect(LeftSidebar.popoverLabs).toBeDisplayed();
        await LeftSidebar.learnMoreAboutLabsBtn.waitForClickable();
        await LeftSidebar.learnMoreAboutLabsBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.co/labs/");
    });

    it("should be able to navigate to Jobs page", async () => {
        await LeftSidebar.jobsBtn.waitForClickable();
        await LeftSidebar.jobsBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/jobs?source=so-left-nav"
        );
    });

    it("should be able to navigate to Discussion page", async () => {
        await LeftSidebar.discussionBtn.waitForClickable();
        await LeftSidebar.discussionBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/beta/discussions"
        );
    });

    it("should be able to appear a Collective Popup", async () => {
        await LeftSidebar.collectionBtn.waitForClickable();
        await LeftSidebar.collectionBtn.click();
        await expect(LeftSidebar.collectionPopover).toBeDisplayed();
    });

    it("should be able to navigate to Collective page", async () => {
        await LeftSidebar.collectionBtn.waitForClickable();
        await LeftSidebar.collectionBtn.click();
        await expect(LeftSidebar.collectionPopover).toBeDisplayed();
        await LeftSidebar.learnMoreAboutCollectiveBtn.waitForClickable();
        await LeftSidebar.learnMoreAboutCollectiveBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/collectives"
        );
    });

    it("should be able to navigate to All Collective page", async () => {
        await LeftSidebar.exploreAllCollectiveLink.waitForClickable();
        await LeftSidebar.exploreAllCollectiveLink.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/collectives-all"
        );
    });

    it("should be able to navigate to Overflow AI Learn More page", async () => {
        await LeftSidebar.leftSidebarContainer.scrollIntoView();
        await LeftSidebar.learnMoreBtn.waitForClickable();
        await LeftSidebar.learnMoreBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.co/teams/ai/?utm_medium=referral&utm_source=stackoverflow-community&utm_campaign=side-bar&utm_content=overflowai-learn-more"
        );
    });
    
    it("should be able to navigate to Overflow AI Explore Teams page", async () => {
        await LeftSidebar.leftSidebarContainer.scrollIntoView();
        await LeftSidebar.exploreTeamsBtn.waitForClickable();
        await LeftSidebar.exploreTeamsBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.co/teams/?utm_medium=referral&utm_source=stackoverflow-community&utm_campaign=side-bar&utm_content=explore-teams"
        );
    });

    it('should be able to show popover teams', async () => {
        await LeftSidebar.leftSidebarContainer.scrollIntoView();
        await LeftSidebar.popoverTeamsBtn.waitForClickable()
        await LeftSidebar.popoverTeamsBtn.click()
        await expect(LeftSidebar.popoverTeams).toBeDisplayed()
    });

    it('should be able to navigate to teams page', async () => {
        await LeftSidebar.popoverTeamsBtn.waitForClickable()
        await LeftSidebar.popoverTeamsBtn.click()
        await LeftSidebar.popoverTeams.waitForExist()
        await LeftSidebar.learnMoreAboutTeamsBtn.waitForClickable()
        await LeftSidebar.learnMoreAboutTeamsBtn.click()
        await expect(browser).toHaveUrl("https://stackoverflow.co/teams/")
    });

    it('should be able to navigate to stackoverflow teams page', async () => {
        await LeftSidebar.exploreTeamsBtn.waitForClickable()
        await LeftSidebar.exploreTeamsBtn.click()
        await expect(browser).toHaveUrl("https://stackoverflow.co/teams/?utm_medium=referral&utm_source=stackoverflow-community&utm_campaign=side-bar&utm_content=explore-teams-compact")
    });

    it('should be able to show the teams were move popover', async () => {
        await LeftSidebar.yourTeamsBtn.waitForClickable()
        await LeftSidebar.yourTeamsBtn.click()
        await expect(LeftSidebar.teamsWereMovedPopover).toBeDisplayed()
    });
});
