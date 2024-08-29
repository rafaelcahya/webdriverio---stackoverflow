import {expect} from '@wdio/globals'
import LoginPage from '../../../pageObject/LoginPage';
import Cookies from '../../../pageObject/Cookies';
import Navbar from '../../../pageObject/Navbar';
import UserProfilePage from '../../../pageObject/UserProfilePage';

describe('Navbar', () => {
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

	it('should be able to navigate to stackoverflow homepage', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.sofLogo.click()
		await expect(browser).toHaveUrl("https://stackoverflow.com/")
	});

	it('should be able to show product popover', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.productBtn.click()
		await expect(Navbar.productPopover).toBeDisplayed()
	});

	it('should be able to navigate to overflowAI page', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.overflowAIBtn.click()
		await expect(browser).toHaveUrl("https://stackoverflow.co/teams/ai/?utm_medium=referral&utm_source=stackoverflow-community&utm_campaign=top-nav-bar&utm_content=overflowai")
	});

	it("should be able to show search popup", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await expect(Navbar.searchPopup).toBeDisplayed();
    });

    it("should be able to navigate to search guide page", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchHelpBtn.waitForClickable();
        await Navbar.searchHelpBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/help/searching"
        );
    });

    it("should be able to search within tag", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("[reactjs]");
        await browser.keys("Enter");
    });

    it("should be able to search by author", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("user: Berns");
        await browser.keys("Enter");
    });

    it("should be able to search by exact phrase", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("javascript");
        await browser.keys("Enter");
    });

    it("should be able to search by collective content", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("collective: 'javascript'");
        await browser.keys("Enter");
    });

    it("should be able to search based on number of answer", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("answers:10");
        await browser.keys("Enter");
    });

    it("should be able to search based on score", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("score:10");
        await browser.keys("Enter");
    });

    it("should be able to search based on is answer", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("is:answer");
        await browser.keys("Enter");
    });

    it("should be able to search based on is question", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("is:question");
        await browser.keys("Enter");
    });

    it("should be able to search based on is accepted", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.searchField.setValue("isaccepted:yes");
        await browser.keys("Enter");
    });

    it("should be able to navigate to ask question page", async () => {
		await Navbar.navbarContainer.waitForExist()
        await Navbar.searchField.waitForExist();
        await Navbar.searchField.click();
        await Navbar.askQuestionBtn.waitForClickable()
        await Navbar.askQuestionBtn.click()
        await expect(browser).toHaveUrl("https://stackoverflow.com/questions/ask")
        await expect(AskNavbar.title).toBeDisplayed()
        await browser.keys("Enter");
    });

	it('should be able to navigate to user profile page', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.userProfileBtn.click()
		await expect(browser).toHaveUrl("https://stackoverflow.com/users/27066906/cahya-testing")
	});

	it('should be able to show inbox dialog', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.inboxBtn.click()
		await expect(Navbar.inboxDialog).toBeDisplayed()
	});

	it('should be able to show achievement dialog', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.achievementBtn.click()
		await expect(Navbar.achievementDialog).toBeDisplayed()
	});

	it('should be able to show help dialog', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.helpBtn.click()
		await expect(Navbar.helpDialog).toBeDisplayed()
	});

	it.only('should be able to show site switcher dialog', async () => {
		await Navbar.navbarContainer.waitForExist()
		await Navbar.siteSwitcherBtn.click()
		await expect(Navbar.siteSwitcherDialog).toBeDisplayed()
		await browser.pause(2000)
	});
});