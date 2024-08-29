import { $ } from "@wdio/globals";
import Page from "./page";

class Navbar extends Page {
	get navbarContainer(){
		return $(".s-topbar--container")
	}

	get sofLogo(){
		return $(".s-topbar--logo")
	}

	get productBtn(){
		return $(".js-products-menu")
	}

	get productPopover(){
		return $("#products-popover")
	}

	get overflowAIBtn(){
		return $("//a[contains(text(), 'OverflowAI')]")
	}

	get searchField(){
        return $(".js-search-field")
    }

    get searchPopup(){
        return $("#top-search")
    }

    get searchHelpBtn(){
        return $("//a[contains(text(), 'Search help')]")
    }

    get askQuestionBtn(){
        return $("//a[contains(text(), 'Ask a question')]")
    }

	get userProfileBtn(){
		return $("#user-profile-button")
	}

	get inboxBtn(){
		return $(".js-inbox-button")
	}

	get inboxDialog(){
		return $(".inbox-dialog")
	}

	get achievementBtn(){
		return $(".js-achievements-button")
	}

	get achievementDialog(){
		return $(".achievements-dialog")
	}

	get helpBtn(){
		return $(".js-help-button")
	}
	
	get helpDialog(){
		return $(".help-dialog")
	}

	get siteSwitcherBtn(){
		return $(".js-site-switcher-button")
	}

	get siteSwitcherDialog(){
		return $(".siteSwitcher-dialog")
	}
}

export default new Navbar();
