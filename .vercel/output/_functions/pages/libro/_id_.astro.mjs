import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_LLm3cS1U.mjs';
import 'kleur/colors';
/* empty css                                    */
import { r as renderEntry, $ as $$Layout, g as getCollection } from '../../chunks/Layout_BSKoT5YY.mjs';
import $$BookScore from '../../chunks/BookScore_TK4sypoK.mjs';
import $$BuyButton from '../../chunks/BuyButton_oKljmx2Z.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const books = await getCollection("books");
  return books.map((book) => ({
    params: { id: book.slug },
    props: { book }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { book } = Astro2.props;
  const { data, slug } = book;
  const { title, author, img, readTime, description, buy } = data;
  const { Content } = await renderEntry(book);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} - Books` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center mx-auto mt-16 gap-12"> <aside class="flex flex-col items-center gap-4"> <a href="/" class="hover:underline opacity-70">🔙 Volver atrás</a> <img class="rounded w-60 h-auto"${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")}${addAttribute(renderTransition($$result2, "sjcdew3a", "", `img-${slug}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "BookScore", $$BookScore, { "server:defer": true, "id": slug, "server:component-directive": "defer", "server:component-path": "C:/Users/ASUS/Jhon/e-books/src/components/BookScore.astro", "server:component-export": "default" }, { "fallback": async ($$result3) => renderTemplate`<span class="text-xs opacity-70">Cargando...</span>` })} ${renderTemplate`${renderComponent($$result2, "BuyButton", $$BuyButton, { "server:defer": true, "buy": buy, "server:component-directive": "defer", "server:component-path": "C:/Users/ASUS/Jhon/e-books/src/components/BuyButton.astro", "server:component-export": "default" })}`} </aside> <main class="flex flex-col items-center max-w-2xl"> <hi class="text-4xl font-bold mb-8"${addAttribute(renderTransition($$result2, "xqwz5asw", "", `title-${slug}`), "data-astro-transition-scope")}>${title}</hi> <div class="text-gray-300 leading-relaxed"> ${renderComponent($$result2, "Content", Content, {})} </div> </main> </div> ` })}`;
}, "C:/Users/ASUS/Jhon/e-books/src/pages/libro/[id].astro", "self");

const $$file = "C:/Users/ASUS/Jhon/e-books/src/pages/libro/[id].astro";
const $$url = "/libro/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
