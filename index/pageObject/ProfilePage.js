import { $ } from "@wdio/globals";
import Page from "./page";

class ProfilePage extends Page {
    get profilePage() {
        return $("#content");
    }
}

export default new ProfilePage();
