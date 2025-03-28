import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"expertise-culinaire\">Expertise culinaire</h2>\n<p>Saveur Bantu vous offres des plats varier avec une speciliter locale. Vous pouriez reserver pour H24.</p>";

				const frontmatter = {"title":"Saveur Bantu","publishDate":"2020-03-04T00:00:00.000Z","img":"/assets/imgSaveurBantu.png","img_alt":"Pearls of silky soft white cotton, bubble up under vibrant lighting","description":"Reserver vos tables de restaurant en ligne \n","tags":["Design","Dev","Branding"]};
				const file = "/home/landou-mechack/Documents/Newton/portefolio/src/content/work/nested/duvet-genius.md";
				const url = undefined;
				function rawContent() {
					return "\n## Expertise culinaire\n\nSaveur Bantu vous offres des plats varier avec une speciliter locale. Vous pouriez reserver pour H24. \n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"expertise-culinaire","text":"Expertise culinaire"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
