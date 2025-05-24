/**
 * Parsers and transforms {@link html} to mimic as much as possible the output from Outlook on the web. Here's what it does specifically:
 *
 * - Body gets converted into `<div>`
 * - Html gets converted into `<div role="document">`
 * - All classes have an `x_` prefix at the start
 * - Wraps all selectors to only apply under a certain element
 * - Resolves CSS variables and strips them away
 * - The following features were completely stripped away
 *   - SVG elements
 *   - `<progress>` element
 *   - `<meter>` element
 *   - `<details>`/`<summary>` element
 *   - `grid-template-columns`
 *   - `@keyframes`, animation`
 *   - `backdrop-filter`
 *   - `clip-path`
 *   - `filter`
 *   - `gap`
 *   - `transform`
 *   - `transition`
 *   - `text-shadow`
 */
export function transformHtml(source: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(source, "text/html");

  const body = doc.querySelector("body");
  if (body) {
    const newBody = doc.createElement("div");
    for (const attribute of body.attributes) {
      newBody.setAttribute(attribute.name, attribute.value);
    }
    newBody.innerHTML = body.innerHTML;
    body.replaceWith(newBody);
  }

  const html = doc.querySelector("html")!;
  const divRoot = doc.createElement("div");
  for (const attribute of html.attributes) {
    divRoot.setAttribute(attribute.name, attribute.value);
  }
  divRoot.setAttribute("role", "document");
  divRoot.innerHTML = html.innerHTML;
  // we can't replaceWith on the `html` element because it isn't one DOM operation,
  // it is two - insert, and then remove the old one - which would require two elements
  // to be the in the root of the document which is not allowed in HTML.
  html.replaceChildren(divRoot);

  return html.innerHTML;
}
