import { describe, expect, it } from "bun:test";
import { transformHtml } from "./transform-html";

describe("transformHtml", () => {
  it('should replace <html> with <div role="document"> and <body> with <div>', () => {
    expect(
      transformHtml(
        '<html class="my-html"><body class="body-class">this is the <strong>content</strong> of this document</body></html>',
      ),
    ).toBe(
      '<div class="my-html" role="document"><div class="body-class">this is the <strong>content</strong> of this document</div></div>',
    );
  });

  // it("should replace")
});
