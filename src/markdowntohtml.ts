import {create} from "xmlbuilder2";

export function parse(markdown: string, escape: boolean = true): string {
	if (escape) {
		markdown = markdown.replace("<", "&lt");
		markdown = markdown.replace(">", "&rt");
	}
	const root = create();
	return root.end( { headless: true } );
}
