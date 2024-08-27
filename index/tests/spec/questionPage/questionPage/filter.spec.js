import { expect } from "@wdio/globals";
import QuestionPage from "../../../../pageObject/QuestionPage";
import Cookies from "../../../../pageObject/Cookies";

describe("Filter", async () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await QuestionPage.openSOF();
        await Cookies.cookiesPopup.waitForDisplayed();
        await Cookies.acceptAllCookiesBtn.click();
    });

    it("should be able to filter by newest", async () => {
        await QuestionPage.newestFilterBtn.waitForClickable();
        await QuestionPage.newestFilterBtn.click();
        await expect(QuestionPage.newestFilterBtn).toHaveElementClass(
            "is-selected"
        );
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?tab=Newest"
        );
    });

    it("should be able to filter by active", async () => {
        await QuestionPage.activeFilterBtn.waitForClickable();
        await QuestionPage.activeFilterBtn.click();
        await expect(QuestionPage.activeFilterBtn).toHaveElementClass(
            "is-selected"
        );
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?tab=Active"
        );
    });

    it("should be able to filter by bounties", async () => {
        await QuestionPage.bountiesFilterBtn.waitForClickable();
        await QuestionPage.bountiesFilterBtn.click();
        await expect(QuestionPage.bountiesFilterBtn).toHaveElementClass(
            "is-selected"
        );
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?tab=Bounties"
        );
    });

    it("should be able to filter by unanswered", async () => {
        await QuestionPage.unansweredFilterBtn.waitForClickable();
        await QuestionPage.unansweredFilterBtn.click();
        await expect(QuestionPage.unansweredFilterBtn).toHaveElementClass(
            "is-selected"
        );
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?tab=Unanswered"
        );
    });

    it("should be able to show More Filter Popover by clicking more filter button", async () => {
        await QuestionPage.moreFilterBtn.waitForClickable();
        await QuestionPage.moreFilterBtn.click();
        await expect(QuestionPage.moreFilterPopoverBtn).toBeDisplayed();
    });

    it("should be able to show More Filter Popover by clicking more filter button", async () => {
        await QuestionPage.moreFilterBtn.waitForClickable();
        await QuestionPage.moreFilterBtn.click();
        await expect(QuestionPage.moreFilterPopoverBtn).toBeDisplayed();
    });

    it("should be able to filter by frequent", async () => {
        await QuestionPage.moreFilterBtn.waitForClickable();
        await QuestionPage.moreFilterBtn.click();
        await expect(QuestionPage.moreFilterPopoverBtn).toBeDisplayed();
        await QuestionPage.frequentFilterBtn.waitForClickable();
        await QuestionPage.frequentFilterBtn.click();
        await expect(QuestionPage.frequentFilterBtn).toHaveElementClass(
            "is-selected"
        );
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?tab=Frequent"
        );
    });

    it("should be able to filter by score", async () => {
        await QuestionPage.moreFilterBtn.waitForClickable();
        await QuestionPage.moreFilterBtn.click();
        await expect(QuestionPage.moreFilterPopoverBtn).toBeDisplayed();
        await QuestionPage.scoreFilterBtn.waitForClickable();
        await QuestionPage.scoreFilterBtn.click();
        await expect(QuestionPage.scoreFilterBtn).toHaveElementClass(
            "is-selected"
        );
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?tab=Votes"
        );
    });

    it("should be able to open filter", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
    });

    it("should be able to filter by No Answers and sorted by Newest", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.noAnswerFilter.waitForClickable();
        await QuestionPage.noAnswerFilter.click();
        await QuestionPage.newestSort.waitForClickable();
        await QuestionPage.newestSort.click();
        await QuestionPage.applyFilterBtn.waitForClickable();
        await QuestionPage.applyFilterBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?sort=Newest&filters=NoAnswers&edited=true"
        );
    });

    it("should be able to filter by No Accepted Answers and sorted by Recent Activity", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.noAcceptedFilter.waitForClickable();
        await QuestionPage.noAcceptedFilter.click();
        await QuestionPage.recentActivitySort.waitForClickable();
        await QuestionPage.recentActivitySort.click();
        await QuestionPage.applyFilterBtn.waitForClickable();
        await QuestionPage.applyFilterBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?sort=RecentActivity&filters=NoAcceptedAnswer&edited=true"
        );
    });

    it("should be able to filter by Has Bounty and sorted by Highest Score", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.hasBountyFilter.waitForClickable();
        await QuestionPage.hasBountyFilter.click();
        await QuestionPage.mostVotesSort.waitForClickable();
        await QuestionPage.mostVotesSort.click();
        await QuestionPage.applyFilterBtn.waitForClickable();
        await QuestionPage.applyFilterBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?sort=MostVotes&filters=Bounty&edited=true"
        );
    });

    it("should be able to filter by No Accepted Answer and Has Bounty combination and sorted by Bounty Ending Soon", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.noAcceptedFilter.waitForClickable();
        await QuestionPage.noAcceptedFilter.click();
        await QuestionPage.hasBountyFilter.waitForClickable();
        await QuestionPage.hasBountyFilter.click();
        await QuestionPage.bountyEndingSoonSort.waitForClickable();
        await QuestionPage.bountyEndingSoonSort.click();
        await QuestionPage.applyFilterBtn.waitForClickable();
        await QuestionPage.applyFilterBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?sort=BountyEndingSoon&filters=NoAcceptedAnswer,Bounty&edited=true"
        );
    });

    it("should be able to filter by No Answer, No Accepted Answer and Has Bounty combination and sorted by Highest Score", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.noAnswerFilter.waitForClickable();
        await QuestionPage.noAnswerFilter.click();
        await QuestionPage.noAcceptedFilter.waitForClickable();
        await QuestionPage.noAcceptedFilter.click();
        await QuestionPage.hasBountyFilter.waitForClickable();
        await QuestionPage.hasBountyFilter.click();
        await QuestionPage.mostVotesSort.waitForClickable();
        await QuestionPage.mostVotesSort.click();
        await QuestionPage.myWatchedtags.waitForClickable();
        await QuestionPage.myWatchedtags.click();
        await QuestionPage.applyFilterBtn.waitForClickable();
        await QuestionPage.applyFilterBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions/tagged?sort=MostVotes&filters=NoAnswers,NoAcceptedAnswer,Bounty&tagMode=Watched&edited=true"
        );
    });

    it("should be able to sorted by Newest and without fill the following tags", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.newestSort.waitForClickable();
        await QuestionPage.newestSort.click();
        await QuestionPage.followingTag.waitForClickable();
        await QuestionPage.followingTag.click();
        await QuestionPage.applyFilterBtn.waitForClickable();
        await QuestionPage.applyFilterBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions?sort=Newest&edited=true"
        );
    });

    it("should be able to sorted by Newest with the following tags", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.newestSort.waitForClickable();
        await QuestionPage.newestSort.click();
        await QuestionPage.followingTag.waitForClickable();
        await QuestionPage.followingTag.click();
        await QuestionPage.followingTagField.waitForEnabled();
        await QuestionPage.followingTagField.setValue("javascript");
        await QuestionPage.applyFilterBtn.waitForClickable();
        await QuestionPage.applyFilterBtn.click();
        await expect(browser).toHaveUrl(
            "https://stackoverflow.com/questions/tagged/javascript?sort=Newest&edited=true"
        );
    });

    it("should be able to show suggestion after fill the the following tags", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.newestSort.waitForClickable();
        await QuestionPage.newestSort.click();
        await QuestionPage.followingTag.waitForClickable();
        await QuestionPage.followingTag.click();
        await QuestionPage.followingTagField.waitForEnabled();
        await QuestionPage.followingTagField.setValue("javascript");
        await expect(QuestionPage.tagSuggestionContainer).toBeDisplayed();
    });

    it("should be able to click the suggestion after fill the the following tags", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.newestSort.waitForClickable();
        await QuestionPage.newestSort.click();
        await QuestionPage.followingTag.waitForClickable();
        await QuestionPage.followingTag.click();
        await QuestionPage.followingTagField.waitForEnabled();
        await QuestionPage.followingTagField.setValue("javascript");
        await expect(QuestionPage.tagSuggestionContainer).toBeDisplayed();
        await QuestionPage.tagSuggestion.waitForDisplayed();
        await QuestionPage.tagSuggestion.click();
        await expect(QuestionPage.tagSuggestionRendered).toBeDisplayed();
    });

    it("should be able to clear the suggestion after fill the the following tags on clicking clear button", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await expect(QuestionPage.filterContainer).toBeDisplayed();
        await expect(QuestionPage.filterContainer).toHaveElementClass(
            "is-expanded"
        );
        await QuestionPage.newestSort.waitForClickable();
        await QuestionPage.newestSort.click();
        await QuestionPage.followingTag.waitForClickable();
        await QuestionPage.followingTag.click();
        await QuestionPage.followingTagField.waitForEnabled();
        await QuestionPage.followingTagField.setValue("javascript");
        await expect(QuestionPage.tagSuggestionContainer).toBeDisplayed();
        await QuestionPage.tagSuggestion.waitForDisplayed();
        await QuestionPage.tagSuggestion.click();
        await expect(QuestionPage.tagSuggestionRendered).toBeDisplayed();
        await QuestionPage.deleteTagSuggestionBtn.click();
        await expect(QuestionPage.tagSuggestion).not.toBeDisplayed();
        await expect(QuestionPage.followingTagField).toHaveValue("");
    });

    it("should be able to add more than 2 following tags", async () => {
        const tags = ["javascript", "java"];
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await QuestionPage.newestSort.waitForClickable();
        await QuestionPage.newestSort.click();
        await QuestionPage.followingTag.waitForClickable();
        await QuestionPage.followingTag.click();
        await QuestionPage.followingTagField.waitForEnabled();
        for (const tag of tags) {
            await QuestionPage.followingTagField.setValue(tag);
            await QuestionPage.tagSuggestion.waitForDisplayed();
            await QuestionPage.tagSuggestion.click();
        }
        for (const tag of tags) {
            const tagElements = await QuestionPage.tagSuggestionRendered;

            let tagFound = false;
            for (const tagElement of tagElements) {
                const text = await tagElement.getText();
                // console.log(`Found tag: ${text}`)
                if (text === tag) {
                    tagFound = true;
                    break;
                }
            }
            // console.log(`Expected tag: ${tag}`);
            await expect(tagFound).toBe(true);
        }
        await browser.pause(2000);
    });

    it("should be close the more filter popup", async () => {
        await QuestionPage.filterBtn.waitForClickable();
        await QuestionPage.filterBtn.click();
        await QuestionPage.cancelBtn.waitForClickable();
        await QuestionPage.cancelBtn.click();
        await expect(QuestionPage.filterContainer).not.toHaveClass(
            "is-expanded"
        );
    });
});
