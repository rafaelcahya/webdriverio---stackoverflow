import { $ } from "@wdio/globals";
import Page from "./page";

class UserProfilePage extends Page {
	get userProfilePage(){
		return $("body.user-page")
	}
}

export default new UserProfilePage();
