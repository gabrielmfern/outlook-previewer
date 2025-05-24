import { describe, expect, it } from "bun:test";
import { transformHtml } from "./transform-html";

describe("transformHtml", () => {
  it('should replace <html> with <div role="document">', () => {
    expect(
      transformHtml(
        '<html class="my-html">this is the content of this document</html>',
      ),
    ).toBe(
      '<div class="my-html" role="document">this is the content of this document</div>',
    );
  });

  it("should replace <body> with <div>", () => {
    expect(
      transformHtml(
        '<body class="body-class">some child <div>children</div></body>',
      ),
    ).toBe('<div class="body-class">some child <div>children</div></div>');
  });
});
