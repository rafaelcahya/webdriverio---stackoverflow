import { $ } from "@wdio/globals";
import Page from "./page";

class LoginPage extends Page {
    get emailField() {
        return $("#email");
    }

    get errorMsgEmptyEmail() {
        return $(
            "//p[contains(text(), 'Email cannot be empty.')]"
        );
    }

    get errorMsgInvalidEmail() {
        return $(
            "//p[contains(text(), 'The email is not a valid email address.')]"
        );
    }

    get errorMsgUnregisteredEmail() {
        return $(
            "//p[contains(text(), 'No user found with matching email')]"
        );
    }

    get passwordField() {
        return $("#password");
    }

    get errorMsgEmptyPass() {
        return $(
            "//p[contains(text(), 'Password cannot be empty.')]"
        );
    }

	get hidePasswordToggle(){
		return $(".js-hide-password")
	}

	get showPasswordToggle(){
		return $(".js-show-password")
	}

    get loginBtn() {
        return $("#submit-button");
    }

    openLoginPage() {
        return super.openSOF("users/login");
    }

    async login() {
        await this.openLoginPage();
        await this.emailField.waitForDisplayed();
        await this.emailField.setValue("cahyaputraugira99@gmail.com");
        await this.passwordField.setValue("yaya123123");
        await this.loginBtn.waitForClickable();
        await this.loginBtn.click();
        await expect(browser).toHaveUrl("https://stackoverflow.com/");
    }
}

export default new LoginPage();
