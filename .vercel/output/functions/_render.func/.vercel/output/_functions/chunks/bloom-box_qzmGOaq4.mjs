import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"oranga-sante-repond-a-un-besoin-frequent-dans-le-domain-de-la-santer\">Oranga Sante repond a un besoin frequent dans le domain de la santer</h2>\n<p>l’accces aux medicaments le plus rapidement possible</p>";

				const frontmatter = {"title":"Oranga Sante","publishDate":"2019-12-01T00:00:00.000Z","img":"/assets/OrangaSante.png","img_alt":"A bright pink sheet of paper used to wrap flowers curves in front of rich blue background","description":"Votre pharmacie en ligne avec une livreson express\n","tags":["Dev","Branding","Backend"]};
				const file = "/home/landou-mechack/Documents/Newton/portefolio/src/content/work/bloom-box.md";
				const url = undefined;
				function rawContent() {
					return "## Oranga Sante repond a un besoin frequent dans le domain de la santer \n\n\nl'accces aux medicaments le plus rapidement possible";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"oranga-sante-repond-a-un-besoin-frequent-dans-le-domain-de-la-santer","text":"Oranga Sante repond a un besoin frequent dans le domain de la santer"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
