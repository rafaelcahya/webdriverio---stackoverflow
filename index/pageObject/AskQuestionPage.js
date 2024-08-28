import { $ } from "@wdio/globals";
import Page from "./page";

class AskQuestionPage extends Page {
	get title(){
		return $("//h1[contains(text(), 'Ask a public question')]");
	}
}

export default new AskQuestionPage();
