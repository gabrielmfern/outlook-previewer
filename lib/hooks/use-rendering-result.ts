import "web-streams-polyfill/polyfill";
import { render } from "@react-email/render";
import React, { createElement, useEffect, useState } from "react";
import { transform } from "sucrase";
import { transformHtml } from "../transform-html";

export function useRenderingResult(react: string) {
  const [renderingResult, setRenderingResult] = useState<
    | {
        html: string;
      }
    | { exception: unknown }
  >();

  useEffect(() => {
    (async () => {
      try {
        const transformedReact = transform(react, {
          transforms: ["jsx", "typescript"],
          production: true,
        }).code;
        const elementFactory = new Function(
          "scope",
          "React",
          transformedReact
            .replaceAll("export default ", "scope.email = ")
            .replaceAll("export ", "scope.exports = "),
        );
        const scope = {
          email: undefined,
        };
        elementFactory(scope, React);

        if (scope.email !== undefined) {
          const element = createElement(scope.email);

          const html = await render(element, {
            pretty: true,
          });

          const transformedHtml = transformHtml(html);

          setRenderingResult({ html: transformedHtml });
        } else {
          setRenderingResult({
            exception: new Error(
              "No default export found to use as component",
              {
                cause: {
                  transformedReact,
                },
              },
            ),
          });
        }
      } catch (exception) {
        setRenderingResult({ exception });
      }
    })();
  }, [react]);

  return renderingResult;
}
