import { $ } from "@wdio/globals";
import Page from "./page";

class TaggedPage extends Page {
    get tagQuestionPage() {
        return $("#mainbar");
    }

	get headlineTag (){
		return $("h1.fs-headline1")
	}
}

export default new TaggedPage();
