import { c as createComponent, d as createAstro, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderSlot, b as renderComponent } from './astro/server_B_qvK0Dt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { b as $$Icon } from './BaseLayout_BKCB65rH.mjs';

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/home/landou-mechack/Documents/Newton/portefolio/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Je serais ravi de travailler avec vous</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "https://mail.google.com/mail/?view=cm&fs=1&to=isaacomar29@gmail.com&su=Demande%20de%20collaboration&body=Bonjour,%20je%20souhaite%20discuter%20avec%20vous.", "target": "_blank", "rel": "noopener noreferrer", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Contactez-moi
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "/home/landou-mechack/Documents/Newton/portefolio/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $, $$CallToAction as a };
