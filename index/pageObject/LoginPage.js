import { $ } from "@wdio/globals";
import Page from "./page";

class LoginPage extends Page {
	get emailField(){
		return $("#email")
	}

	get passwordField(){
		return $("#password")
	}

	get loginBtn(){
		return $("#submit-button")
	}
	
    openLoginPage() {
        return super.openSOF("users/login");
    }

	async login() {
		await this.openLoginPage()
		await this.emailField.setValue("cahyaputraugira99@gmail.com");
		await this.passwordField.setValue("yaya123123")
		await this.loginBtn.waitForClickable()
		await this.loginBtn.click()
		await expect(browser).toHaveUrl("https://stackoverflow.com/")
	}
}

export default new LoginPage();
