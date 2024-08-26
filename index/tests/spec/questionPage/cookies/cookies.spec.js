import {expect} from "@wdio/globals"
import Cookies from "../../../../pageObject/Cookies";
import QuestionPage from "../../../../pageObject/QuestionPage";

describe('Cookies', async () => {
    before(async () => {
        await browser.maximizeWindow();
        await QuestionPage.openSOF();
    });

	it.only('should be appear cookies popup', async () => {
        await Cookies.cookiesPopup.waitForDisplayed();
        await expect(Cookies.cookiesPopup).toBeDisplayed();
		await browser.pause(2000)
	});
});