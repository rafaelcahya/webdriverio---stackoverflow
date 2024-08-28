import { $ } from "@wdio/globals";
import Page from "./page";

class QuestionPage extends Page {
    get leftSidebar() {
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

    get newestFilterBtn() {
        return $("a[data-nav-value='Newest']");
    }

    get activeFilterBtn() {
        return $("a[data-nav-value='Active']");
    }

    get bountiesFilterBtn() {
        return $("a[data-nav-value='Bounties']");
    }

    get unansweredFilterBtn() {
        return $("a[data-nav-value='Unanswered']");
    }

    get moreFilterBtn() {
        return $("button[data-se-uql-target='toggleMoreButton']");
    }

    get moreFilterPopoverBtn() {
        return $("div[data-se-uql-target='morePopover']");
    }

    get frequentFilterBtn() {
        return $("//a[contains(text(), 'Frequent')]");
    }

    get scoreFilterBtn() {
        return $("//a[contains(text(), 'Score')]");
    }

    get filterBtn() {
        return $("button[data-se-uql-target='toggleFormButton']");
    }

    get filterContainer() {
        return $("#uql-form");
    }

    get noAnswerFilter() {
        return $("input[value='NoAnswers']");
    }

    get noAcceptedFilter() {
        return $("input[value='NoAcceptedAnswer']");
    }

    get hasBountyFilter() {
        return $("input[value='Bounty']");
    }

    get newestSort() {
        return $("input[value='Newest']");
    }

    get recentActivitySort() {
        return $("input[value='RecentActivity']");
    }

    get mostVotesSort() {
        return $("input[value='MostVotes']");
    }

    get mostFrequentSort() {
        return $("input[value='MostFrequent']");
    }

    get bountyEndingSoonSort() {
        return $("input[value='BountyEndingSoon']");
    }

    get myWatchedtags() {
        return $("input[value='Watched']");
    }

    get followingTag() {
        return $("input[value='Specified']");
    }

    get tagContainer() {
        return $(".js-tag-editor");
    }

    get followingTagField() {
        return $(".js-tageditor-replacing");
    }

    get tagSuggestionContainer() {
        return $(".tag-suggestions");
    }

    get tagSuggestion() {
        return $(".js-tag-suggestion");
    }

    get tagSuggestionRendered() {
        return $$(".rendered-element");
    }

    get deleteTagSuggestionBtn() {
        return $(".js-delete-tag");
    }

    get applyFilterBtn() {
        return $("button[data-se-uql-target='applyButton']");
    }

    get cancelBtn() {
        return $("button[data-action='se-uql#cancelEditor']");
    }

    get contentQuestion() {
        return $(".js-post-summary");
    }

    get titleContent() {
        return $(".s-post-summary--content-title");
    }

    get questionHeader() {
        return $("#question-header");
    }

    get tagPost() {
        return $(".post-tag");
    }

	get postName(){
		return $("div.s-user-card--link a")
	}

    get tagPopup(){
        return $(".tag-popup")
    }
    
    get watchTagBtn(){
        return $("button[data-action='favorite']")
    }
    
    get unwatchTagBtn(){
        return $("button[data-action='clear']")
    }

    get ignoreTagBtn(){
        return $("button[data-action='ignore']")
    }

    get signupModal(){
        return $("#signup-modal-container")
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
}

export default new QuestionPage();
