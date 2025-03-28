import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as renderComponent } from '../chunks/astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_Bhqlh5LH.mjs';
import { $ as $$BaseLayout, a as $$Hero, b as $$Icon } from '../chunks/BaseLayout_BKCB65rH.mjs';
import { a as $$CallToAction, $ as $$ContactCTA } from '../chunks/ContactCTA_C_j8Vi0B.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from '../chunks/Grid_CpH44Rxy.mjs';
import { $ as $$Pill } from '../chunks/Pill_WNs0DcMG.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-ab4ihpzs>Mes outils</h1> <section class="box skills " data-astro-cid-ab4ihpzs> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>HTML <br data-astro-cid-ab4ihpzs>CSS</h2> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>JS En backend</h2> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>PYTHON</h2> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>PHP</h2> </div> </section> <h1 data-astro-cid-ab4ihpzs>Mes technologies de bases</h1> <section class="box skills " data-astro-cid-ab4ihpzs> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Django </h2> <p data-astro-cid-ab4ihpzs>Création d'applications <br data-astro-cid-ab4ihpzs> web et d'API REST</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Laravel</h2> <p data-astro-cid-ab4ihpzs>Création d'applications <br data-astro-cid-ab4ihpzs> web et API REST</p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>Express.js</h2> <p data-astro-cid-ab4ihpzs>Création d'API REST</p> </div> </section> `;
}, "/home/landou-mechack/Documents/Newton/portefolio/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello,Je suis Developpeur backend ", "tagline": "Passionn\xE9 par la programation", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Developpeur` })} </div>  <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "CallToAction", $$CallToAction, { "href": "https://drive.google.com/file/d/1QyrG9jR3ekoI4kWBsRMCppY79u7_xW-v/view?usp=sharing", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Télécharger mon CV
` })} </div> ` })} <img alt="Isaac White smiling in a red plaid shirt and tortoise shell glasses" width="480" height="620" src="/assets/isaac.jpg" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Projects sur les quels j'ai travaillé</h3> <p data-astro-cid-j7pv25f6>Jetez un œil ci-dessous à certains de mes travaux phares réalisés  au cours des dernières années.</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Voir
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "/home/landou-mechack/Documents/Newton/portefolio/src/pages/index.astro", void 0);

const $$file = "/home/landou-mechack/Documents/Newton/portefolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
