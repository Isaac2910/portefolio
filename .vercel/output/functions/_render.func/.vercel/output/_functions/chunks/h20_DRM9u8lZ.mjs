import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Pizzaria accesible avec des differentes gammes depuis chez soi</p>";

				const frontmatter = {"title":"Pizza","publishDate":"2019-10-02T00:00:00.000Z","img":"/assets/isaacPzz.png","img_alt":"Soft pink and baby blue water ripples together in a subtle texture.","description":"We developed brand positioning and design assets for the launch\nof a new colored water product.\n","tags":["Design","Branding"]};
				const file = "/home/landou-mechack/Documents/Newton/portefolio/src/content/work/h20.md";
				const url = undefined;
				function rawContent() {
					return "\nPizzaria accesible avec des differentes gammes depuis chez soi";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
