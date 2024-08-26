import { $ } from "@wdio/globals";
import Page from "./page";

class Cookies extends Page {
	get cookiesPopup(){
		return $('#onetrust-banner-sdk')
	}

    get acceptAllCookiesBtn() {
        return $("#onetrust-accept-btn-handler");
    }

    openSOF() {
        return super.openSOF("questions");
    }
}

export default new Cookies();
