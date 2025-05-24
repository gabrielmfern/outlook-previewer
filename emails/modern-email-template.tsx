import React from 'react';

export default function EmailFeatureTest() {
  // Color palette
  const colors = {
    1: "rgba(0, 0, 0, 0)",
    2: "rgba(216, 244, 246, 0.04)",
    3: "rgba(221, 234, 248, 0.08)",
    4: "rgba(211, 237, 248, 0.11)",
    5: "rgba(217, 237, 254, 0.15)",
    6: "rgba(214, 235, 253, 0.19)",
    7: "rgba(217, 237, 255, 0.25)",
    8: "rgba(217, 237, 255, 0.37)",
    9: "rgba(223, 235, 253, 0.43)",
    10: "rgba(229, 237, 253, 0.48)",
    11: "rgba(241, 247, 254, 0.71)",
    12: "rgba(252, 253, 255, 0.94)",
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Email Feature Compatibility Test</title>

        {/* Test 1: CSS in <style> tag (often stripped) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Test: CSS Variables */
            :root {
              --color-1: ${colors[1]};
              --color-2: ${colors[2]};
              --color-3: ${colors[3]};
              --color-4: ${colors[4]};
              --color-5: ${colors[5]};
              --color-6: ${colors[6]};
              --color-7: ${colors[7]};
              --color-8: ${colors[8]};
              --color-9: ${colors[9]};
              --color-10: ${colors[10]};
              --color-11: ${colors[11]};
              --color-12: ${colors[12]};
              --bg-primary: #05050a;
              --text-primary: #ffffff;
              --text-secondary: rgba(255, 255, 255, 0.8);
              --border-radius: 8px;
            }
            
            /* Test: CSS Grid */
            .grid-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin: 20px 0;
            }
            
            /* Test: Flexbox */
            .flex-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 10px;
            }
            
            /* Test: CSS Animations */
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
            
            .animated {
              animation: pulse 2s infinite;
            }
            
            /* Test: Media Queries */
            @media screen and (max-width: 600px) {
              .responsive-text {
                font-size: 14px !important;
              }
              .grid-container {
                grid-template-columns: 1fr !important;
              }
            }
            
            /* Test: Modern CSS Properties */
            .modern-card {
              background: linear-gradient(135deg, var(--color-8), var(--color-10));
              border-radius: var(--border-radius);
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(10px);
            }
          `,
          }}
        />

        {/* Test 2: Web Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#05050a",
          lineHeight: 1.6,
          color: "#ffffff",
        }}
      >
        {/* Main Container */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: colors[2],
            padding: "20px",
            border: `1px solid ${colors[4]}`,
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center" as const,
              marginBottom: "30px",
              padding: "20px",
              background: `linear-gradient(135deg, ${colors[8]}, ${colors[10]})`,
              borderRadius: "8px",
              color: "#ffffff",
              border: `1px solid ${colors[6]}`,
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "24px",
                fontWeight: 700,
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Email Feature Test
            </h1>
            <p style={{ margin: "10px 0 0 0", opacity: 0.9 }}>Testing modern CSS and HTML features</p>
          </div>

          {/* Test 3: CSS Grid Layout */}
          <div
            className="grid-container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              margin: "20px 0",
            }}
          >
            <div
              style={{
                padding: "15px",
                backgroundColor: colors[4],
                borderRadius: "6px",
                border: `1px solid ${colors[6]}`,
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#ffffff" }}>CSS Grid</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
                This layout uses CSS Grid. Fallback: should stack vertically.
              </p>
            </div>
            <div
              style={{
                padding: "15px",
                backgroundColor: colors[5],
                borderRadius: "6px",
                border: `1px solid ${colors[7]}`,
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#ffffff" }}>Grid Item 2</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
                Second grid item with different styling.
              </p>
            </div>
          </div>

          {/* Test 4: Flexbox Layout */}
          <div
            className="flex-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              padding: "15px",
              backgroundColor: colors[6],
              borderRadius: "6px",
              margin: "20px 0",
              border: `1px solid ${colors[8]}`,
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 5px 0", color: "#ffffff" }}>Flexbox Test</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>This uses flexbox layout</p>
            </div>
            <div
              style={{
                padding: "8px 16px",
                backgroundColor: colors[10],
                color: "#ffffff",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 600,
                border: `1px solid ${colors[11]}`,
              }}
            >
              Flex Item
            </div>
          </div>

          {/* Test 5: CSS Variables and Modern Properties */}
          <div
            className="modern-card"
            style={{
              background: `linear-gradient(135deg, ${colors[8]}, ${colors[10]})`,
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              margin: "20px 0",
              color: "#ffffff",
              border: `1px solid ${colors[9]}`,
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>Modern CSS Properties</h3>
            <p style={{ margin: 0, fontSize: "14px", opacity: 0.9 }}>
              Tests: CSS Variables, Gradients, Border Radius, Box Shadow
            </p>
          </div>

          {/* Test 6: SVG Support */}
          <div
            style={{
              padding: "20px",
              backgroundColor: colors[3],
              borderRadius: "6px",
              margin: "20px 0",
              textAlign: "center" as const,
              border: `1px solid ${colors[5]}`,
            }}
          >
            <h3 style={{ margin: "0 0 15px 0", color: "#ffffff" }}>SVG Support Test</h3>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style={{ margin: "0 10px" }}>
              <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2" fill={colors[8]} />
              <path d="M8 12l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" style={{ margin: "0 10px" }}>
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#ffffff" strokeWidth="2" fill={colors[9]} />
              <path d="M9 12l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p style={{ margin: "10px 0 0 0", fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
              SVG icons should appear above. Fallback: may show as broken images or nothing.
            </p>
          </div>

          {/* Test 7: CSS Transform and Transition */}
          <div
            style={{
              padding: "20px",
              backgroundColor: colors[4],
              borderRadius: "6px",
              margin: "20px 0",
              transform: "translateY(0)",
              transition: "all 0.3s ease",
              border: `1px solid ${colors[6]}`,
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#ffffff" }}>Transform & Transition Test</h3>
            <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
              This element uses CSS transform and transition properties.
            </p>
          </div>

          {/* Test 8: CSS Filters */}
          <div
            style={{
              padding: "20px",
              backgroundColor: colors[5],
              borderRadius: "6px",
              margin: "20px 0",
              filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))",
              border: `1px solid ${colors[7]}`,
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#ffffff" }}>CSS Filter Test</h3>
            <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
              This element uses CSS filter property for drop-shadow.
            </p>
          </div>

          {/* Test 9: Modern HTML Elements */}
          <div
            style={{
              padding: "20px",
              backgroundColor: colors[6],
              borderRadius: "6px",
              margin: "20px 0",
              border: `1px solid ${colors[8]}`,
            }}
          >
            <h3 style={{ margin: "0 0 15px 0", color: "#ffffff" }}>Modern HTML Elements</h3>

            {/* Progress Element */}
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{ display: "block", marginBottom: "5px", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Progress Element:
              </label>
              <progress value="70" max="100" style={{ width: "100%", height: "20px" }}>
                70%
              </progress>
            </div>

            {/* Meter Element */}
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{ display: "block", marginBottom: "5px", fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Meter Element:
              </label>
              <meter value="0.6" style={{ width: "100%", height: "20px" }}>
                60%
              </meter>
            </div>

            {/* Details/Summary */}
            <details style={{ marginBottom: "10px" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, color: "#ffffff" }}>
                Click to expand (Details/Summary)
              </summary>
              <p style={{ margin: "10px 0 0 20px", fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
                This content is hidden by default and revealed when clicked.
              </p>
            </details>
          </div>

          {/* Test 10: CSS Clip-path */}
          <div
            style={{
              padding: "20px",
              backgroundColor: colors[7],
              margin: "20px 0",
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
              border: `1px solid ${colors[9]}`,
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#ffffff" }}>CSS Clip-path Test</h3>
            <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
              This element uses CSS clip-path for custom shape.
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: "center" as const,
              padding: "20px 0",
              borderTop: `1px solid ${colors[6]}`,
              marginTop: "30px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Email Feature Compatibility Test | {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}

