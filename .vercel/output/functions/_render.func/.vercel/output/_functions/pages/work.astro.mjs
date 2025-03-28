import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Bhqlh5LH.mjs';
import { $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BKCB65rH.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_C_j8Vi0B.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from '../chunks/Grid_CpH44Rxy.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Isaac", "description": "Learn about Isaac White's most recent projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Projects", "tagline": "Voici mes projets les plus r\xE9cents ci-dessous pour vous donner une id\xE9e de mon exp\xE9rience pass\xE9e", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/landou-mechack/Documents/Newton/portefolio/src/pages/work.astro", void 0);

const $$file = "/home/landou-mechack/Documents/Newton/portefolio/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
