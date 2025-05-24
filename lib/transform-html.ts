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
  const doc = parser.parseFromString(
    `<fake-root-element>${source}</fake-root-element>`,
    // If we use `text/html`, the parser will make changes to the incoming HTML and so make it harder to test.
    "text/html",
  );

  const body = doc.querySelector("body");
  if (body) {
    const newBody = doc.createElement("div");
    for (const attribute of body.attributes) {
      newBody.setAttribute(attribute.name, attribute.value);
    }
    newBody.innerHTML = body.innerHTML;
    body.replaceWith(newBody);
  }

  const html = doc.querySelector("html");
  if (html) {
    const newHtml = doc.createElement("div");
    for (const attribute of html.attributes) {
      newHtml.setAttribute(attribute.name, attribute.value);
    }
    newHtml.setAttribute("role", "document");
    newHtml.innerHTML = html.innerHTML;
    html.replaceWith(newHtml);
  }
  console.log(doc.documentElement.outerHTML);

  return doc.querySelector("fake-root-element")!.innerHTML;
}
