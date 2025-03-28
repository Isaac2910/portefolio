import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BKCB65rH.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_C_j8Vi0B.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Newton10", "description": "About Isaac Omar L", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "A propos", "tagline": "Merci de votre visite. Lisez ci-dessous pour en savoir plus sur moi et mon parcours", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/vcl.jpg" alt="Isaac White at work with a colleague" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Développeur backend junior, issu d'une formation scientifique avec un Bac D, orientée vers les sciences naturelles et les mathématiques. Passionné par les technologies backend, je maîtrise les bases du développement et te spécialises dans la gestion de bases de données, la création d'API et la logique serveur. En tant que développeur backend, j'ai une approche rigoureuse et analytique, enrichie par mon background scientifique, ce qui me permet de concevoir des solutions solides et optimisées pour le fonctionnement des applications côté serveur.
</p> <p data-astro-cid-kh7btl4r>
J'ai une preference pour le langage python qui me semble tres malléable surtout avec son  avec son framework Django qui est complet.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Education</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Scientifique</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>L'efficacité dans la simplicité</p> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "/home/landou-mechack/Documents/Newton/portefolio/src/pages/about.astro", void 0);

const $$file = "/home/landou-mechack/Documents/Newton/portefolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
