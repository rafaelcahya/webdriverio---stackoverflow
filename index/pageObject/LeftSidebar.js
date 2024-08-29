import { $ } from "@wdio/globals";
import Page from "./page";

class LeftSidebar extends Page {
    get leftSidebarContainer() {
        return $("#left-sidebar");
    }

    get homeBtn() {
        return $("a[href='/']");
    }

    get questionBtn() {
        return $("#nav-questions");
    }

    get tagBtn() {
        return $("a[href='/tags']");
    }

    get userBtn() {
        return $("#nav-users");
    }

    get companiesBtn() {
        return $("#nav-companies");
    }

    get labsBtn() {
        return $("a[aria-controls='popover-labs-left-nav']");
    }

    get popoverLabs() {
        return $("#popover-labs-left-nav");
    }

    get learnMoreAboutLabsBtn() {
        return $("a[href='https://stackoverflow.co/labs/']");
    }

    get jobsBtn() {
        return $("#nav-labs-jobs");
    }

    get discussionBtn() {
        return $("#nav-labs-discussions");
    }

    get collectionBtn() {
        return $("a[aria-controls='popover-discover-collectives']");
    }

    get collectionPopover() {
        return $("#popover-discover-collectives");
    }

    get learnMoreAboutCollectiveBtn() {
        return $("a[href='/collectives']");
    }

    get exploreAllCollectiveLink() {
        return $("a[href='/collectives-all']");
    }

    get learnMoreBtn() {
        return $("//a[contains(text(), 'Learn more')]");
    }

    get exploreTeamsBtn() {
        return $("//a[contains(text(), 'Explore Teams')]");
    }
	
	get closePromotionBtn(){
		return $("button[aria-label='Dismiss this promotion']")
	}

	get popoverTeamsBtn(){
		return $("a[aria-controls='popover-teams-create-cta']")
	}

	get popoverTeams(){
		return $("#popover-teams-create-cta")
	}

	get learnMoreAboutTeamsBtn(){
		return $("//a[contains(text(), 'Learn more about Teams')]")
	}

	get exploreTeamsBtn(){
		return $("//a[contains(text(), 'Explore Teams')]")
	}

	get yourTeamsBtn(){
		return $("button[aria-label='Teams were moved popover']")
	}

	get teamsWereMovedPopover(){
		return $("#teams-were-moved-popover")
	}
}

export default new LeftSidebar();
