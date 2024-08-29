import { $ } from "@wdio/globals";
import Page from "./page";

class QuestionPage extends Page {
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

    get saveCustomFilterBtn(){
        return $("//button[contains(text(), 'Save custom filter')]")
    }

    get customFilterPopup(){
        return $(".s-modal--dialog")
    }

    get customFilterCloseBtn(){
        return $(".js-modal-close")
    }

    get titleCustomFilter(){
        return $("#uql-name-field")
    }

    get errorMsgEmptyTitle(){
        return $("div[contains(text(), 'Title is missing.)]")
    }

    get saveFilterBtn(){
        return $("button[data-se-uql-target='saveButton']")
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
}

export default new QuestionPage();
