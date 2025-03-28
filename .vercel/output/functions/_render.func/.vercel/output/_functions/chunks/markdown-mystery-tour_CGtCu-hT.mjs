import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"boutique-en-ligne-de-oguooelabs\">Boutique en ligne de OguooeLabs</h2>\n<blockquote>\n<p>Boutique en ligne de Oguooe Labs</p>\n</blockquote>";

				const frontmatter = {"title":"Olo Store","publishDate":"2020-03-02T00:00:00.000Z","img":"/assets/imgOLOStore.png","img_alt":"Iridescent ripples of a bright blue and pink liquid","description":"Tout en un \n","tags":["Design","Dev","User Testing"]};
				const file = "/home/landou-mechack/Documents/Newton/portefolio/src/content/work/markdown-mystery-tour.md";
				const url = undefined;
				function rawContent() {
					return "\n## Boutique en ligne de OguooeLabs \n\n> Boutique en ligne de Oguooe Labs \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"boutique-en-ligne-de-oguooelabs","text":"Boutique en ligne de OguooeLabs"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
