import { expect } from "@wdio/globals";
import LoginPage from "../../../pageObject/LoginPage";

describe("Login", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await LoginPage.openLoginPage();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("should be able to input valid email", async () => {
        await LoginPage.emailField.waitForExist();
        await LoginPage.emailField.setValue("test@test.com");
        await expect(LoginPage.emailField).toHaveValue("test@test.com");
    });

    it("should be able to show error message when email is empty", async () => {
        await LoginPage.emailField.waitForExist();
        await LoginPage.emailField.setValue("");
        await LoginPage.passwordField.waitForExist();
        await LoginPage.passwordField.setValue("test123");
        await LoginPage.loginBtn.waitForClickable();
        await LoginPage.loginBtn.click();
        await expect(LoginPage.errorMsgEmptyEmail).toHaveText(
            "Email cannot be empty."
        );
    });

    it("should be able to show error message when email is in invalid format", async () => {
        await LoginPage.emailField.waitForExist();
        await LoginPage.emailField.setValue("testtest.com");
        await LoginPage.passwordField.waitForExist();
        await LoginPage.passwordField.setValue("test123");
        await LoginPage.loginBtn.waitForClickable();
        await LoginPage.loginBtn.click();
        await expect(LoginPage.errorMsgInvalidEmail).toHaveText(
            "The email is not a valid email address."
        );
    });

    it("should be able to show error message when email is unregistered", async () => {
        await LoginPage.emailField.waitForExist();
        await LoginPage.emailField.setValue("testtest@test.com");
        await LoginPage.passwordField.waitForExist();
        await LoginPage.passwordField.setValue("test123");
        await LoginPage.loginBtn.waitForClickable();
        await LoginPage.loginBtn.click();
        await expect(LoginPage.errorMsgUnregisteredEmail).toHaveText(
            "No user found with matching email"
        );
        await browser.pause(2000);
    });

    it("should be able to input password", async () => {
        await LoginPage.passwordField.waitForExist();
        await LoginPage.passwordField.setValue("test123");
        await expect(LoginPage.emailField).toHaveValue("test123");
    });

    it("should be able to show error message when password is empty", async () => {
        await LoginPage.emailField.waitForExist();
        await LoginPage.emailField.setValue("test@test.com");
        await LoginPage.passwordField.waitForExist();
        await LoginPage.passwordField.setValue("");
        await LoginPage.loginBtn.waitForClickable();
        await LoginPage.loginBtn.click();
        await expect(LoginPage.errorMsgEmptyPass).toHaveText(
            "Password cannot be empty."
        );
    });

    it("should be able to show password", async () => {
        await LoginPage.passwordField.waitForExist();
        await LoginPage.passwordField.setValue("test123");
        await LoginPage.showPasswordToggle.waitForClickable();
        await LoginPage.showPasswordToggle.click();
        await expect(LoginPage.showPasswordToggle).not.toBeDisplayed();
        await expect(LoginPage.hidePasswordToggle).toBeDisplayed();
        await expect(LoginPage.passwordField).toHaveAttribute("type", "text");
    });

    it.only("should be able to hide password", async () => {
        await LoginPage.passwordField.waitForExist();
        await LoginPage.passwordField.setValue("test123");
        await LoginPage.showPasswordToggle.waitForClickable();
        await LoginPage.showPasswordToggle.click();
        await LoginPage.hidePasswordToggle.waitForClickable();
        await LoginPage.hidePasswordToggle.click();
        await expect(LoginPage.hidePasswordToggle).not.toBeDisplayed();
        await expect(LoginPage.showPasswordToggle).toBeDisplayed();
        await expect(LoginPage.passwordField).toHaveAttribute("type", "password");
        await browser.pause(2000);
    });
});
