export const vesper = {
  base: "vs-dark" as const,
  inherit: true,
  rules: [
    { token: "comment", foreground: "8B8B8B94" },
    { token: "punctuation.definition.comment", foreground: "8B8B8B94" },
    { token: "variable", foreground: "FFFFFF" },
    { token: "string constant.other.placeholder", foreground: "FFFFFF" },
    { token: "entity.name.tag", foreground: "FFFFFF" },
    { token: "constant.other.color", foreground: "FFFFFF" },
    { token: "invalid", foreground: "FF8080" },
    { token: "invalid.illegal", foreground: "FF8080" },
    { token: "keyword", foreground: "A0A0A0" },
    { token: "storage.type", foreground: "A0A0A0" },
    { token: "storage.modifier", foreground: "A0A0A0" },
    { token: "keyword.control", foreground: "A0A0A0" },
    { token: "punctuation.definition.tag", foreground: "A0A0A0" },
    { token: "punctuation.separator.inheritance.php", foreground: "A0A0A0" },
    { token: "punctuation.definition.tag.html", foreground: "A0A0A0" },
    { token: "punctuation.definition.tag.begin.html", foreground: "A0A0A0" },
    { token: "punctuation.definition.tag.end.html", foreground: "A0A0A0" },
    { token: "punctuation.section.embedded", foreground: "A0A0A0" },
    { token: "keyword.other.template", foreground: "A0A0A0" },
    { token: "keyword.other.substitution", foreground: "A0A0A0" },
    { token: "entity.name.tag", foreground: "FFC799" },
    { token: "meta.tag.sgml", foreground: "FFC799" },
    { token: "markup.deleted.git_gutter", foreground: "FFC799" },
    { token: "entity.name.function", foreground: "FFC799" },
    { token: "variable.function", foreground: "FFC799" },
    { token: "support.function", foreground: "FFC799" },
    { token: "keyword.other.special-method", foreground: "FFC799" },
    { token: "meta.block variable.other", foreground: "FFFFFF" },
    { token: "support.other.variable", foreground: "FFFFFF" },
    { token: "string.other.link", foreground: "FFFFFF" },
    { token: "constant.numeric", foreground: "FFC799" },
    { token: "support.constant", foreground: "FFC799" },
    { token: "constant.character", foreground: "FFC799" },
    { token: "constant.escape", foreground: "FFC799" },
    { token: "keyword.other.unit", foreground: "FFC799" },
    { token: "keyword.other", foreground: "FFC799" },
    { token: "constant.language.boolean", foreground: "FFC799" },
    { token: "string", foreground: "99FFE4" },
    { token: "constant.other.symbol", foreground: "99FFE4" },
    { token: "constant.other.key", foreground: "99FFE4" },
    {
      token:
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
      foreground: "99FFE4",
    },
    { token: "entity.name", foreground: "FFC799" },
    { token: "support.type", foreground: "FFC799" },
    { token: "support.class", foreground: "FFC799" },
    { token: "support.other.namespace.use.php", foreground: "FFC799" },
    { token: "meta.use.php", foreground: "FFC799" },
    { token: "support.other.namespace.php", foreground: "FFC799" },
    { token: "markup.changed.git_gutter", foreground: "FFC799" },
    { token: "support.type.sys-types", foreground: "FFC799" },
    { token: "source.css support.type.property-name", foreground: "FFFFFF" },
    { token: "source.sass support.type.property-name", foreground: "FFFFFF" },
    { token: "source.scss support.type.property-name", foreground: "FFFFFF" },
    { token: "source.less support.type.property-name", foreground: "FFFFFF" },
    { token: "source.stylus support.type.property-name", foreground: "FFFFFF" },
    {
      token: "source.postcss support.type.property-name",
      foreground: "FFFFFF",
    },
    { token: "support.type.vendored.property-name.css", foreground: "FFFFFF" },
    { token: "source.css.scss entity.name.tag", foreground: "FFFFFF" },
    { token: "variable.parameter.keyframe-list.css", foreground: "FFFFFF" },
    { token: "meta.property-name.css", foreground: "FFFFFF" },
    { token: "variable.parameter.url.scss", foreground: "FFFFFF" },
    { token: "meta.property-value.scss", foreground: "FFFFFF" },
    { token: "meta.property-value.css", foreground: "FFFFFF" },
    { token: "entity.name.module.js", foreground: "FF8080" },
    { token: "variable.import.parameter.js", foreground: "FF8080" },
    { token: "variable.other.class.js", foreground: "FF8080" },
    { token: "variable.language", foreground: "A0A0A0" },
    { token: "entity.name.method.js", foreground: "FFFFFF" },
    {
      token: "meta.class-method.js entity.name.function.js",
      foreground: "FFFFFF",
    },
    { token: "variable.function.constructor", foreground: "FFFFFF" },
    { token: "entity.other.attribute-name", foreground: "A0A0A0" },
    { token: "meta.property-list.scss", foreground: "A0A0A0" },
    { token: "meta.attribute-selector.scss", foreground: "A0A0A0" },
    { token: "entity.other.keyframe-offset.css", foreground: "A0A0A0" },
    { token: "meta.selector.css", foreground: "A0A0A0" },
    { token: "entity.name.tag.reference.scss", foreground: "A0A0A0" },
    { token: "entity.name.tag.nesting.css", foreground: "A0A0A0" },
    { token: "punctuation.separator.key-value.css", foreground: "A0A0A0" },
    {
      token: "text.html.basic entity.other.attribute-name.html",
      foreground: "FFC799",
    },
    {
      token: "text.html.basic entity.other.attribute-name",
      foreground: "FFC799",
    },
    { token: "entity.other.attribute-name.class", foreground: "FFC799" },
    { token: "entity.other.attribute-name.id", foreground: "FFC799" },
    { token: "variable.parameter.misc.css", foreground: "FFC799" },
    { token: "source.sass keyword.control", foreground: "99FFE4" },
    { token: "markup.inserted", foreground: "99FFE4" },
    { token: "markup.deleted", foreground: "FF8080" },
    { token: "markup.changed", foreground: "A0A0A0" },
    { token: "string.regexp", foreground: "A0A0A0" },
    { token: "constant.character.escape", foreground: "A0A0A0" },
    { token: "*url*", fontStyle: "underline" },
    { token: "*link*", fontStyle: "underline" },
    { token: "*uri*", fontStyle: "underline" },
    { token: "tag.decorator.js entity.name.tag.js", foreground: "FFFFFF" },
    {
      token: "tag.decorator.js punctuation.definition.tag.js",
      foreground: "FFFFFF",
    },
    {
      token: "source.js constant.other.object.key.js string.unquoted.label.js",
      fontStyle: "italic",
      foreground: "FF8080",
    },
    {
      token:
        "source.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    {
      token:
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      foreground: "FFC799",
    },
    { token: "text.html.markdown", foreground: "FFFFFF" },
    {
      token: "punctuation.definition.list_item.markdown",
      foreground: "FFFFFF",
    },
    {
      token: "text.html.markdown markup.inline.raw.markdown",
      foreground: "A0A0A0",
    },
    {
      token:
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
      foreground: "FFFFFF",
    },
    { token: "markdown.heading", foreground: "FFC799" },
    {
      token: "markup.heading | markup.heading entity.name",
      foreground: "FFC799",
    },
    {
      token: "markup.heading.markdown punctuation.definition.heading.markdown",
      foreground: "FFC799",
    },
    { token: "markup.heading", foreground: "FFC799" },
    { token: "markup.inserted.git_gutter", foreground: "FFC799" },
    { token: "markup.italic", fontStyle: "italic", foreground: "FFFFFF" },
    { token: "markup.bold", fontStyle: "bold", foreground: "FFFFFF" },
    { token: "markup.bold string", fontStyle: "bold", foreground: "FFFFFF" },
    {
      token: "markup.bold markup.italic",
      fontStyle: "bold",
      foreground: "FFFFFF",
    },
    {
      token: "markup.italic markup.bold",
      fontStyle: "bold",
      foreground: "FFFFFF",
    },
    {
      token: "markup.quote markup.bold",
      fontStyle: "bold",
      foreground: "FFFFFF",
    },
    {
      token: "markup.bold markup.italic string",
      fontStyle: "bold",
      foreground: "FFFFFF",
    },
    {
      token: "markup.italic markup.bold string",
      fontStyle: "bold",
      foreground: "FFFFFF",
    },
    {
      token: "markup.quote markup.bold string",
      fontStyle: "bold",
      foreground: "FFFFFF",
    },
    { token: "markup.underline", fontStyle: "underline", foreground: "FFC799" },
    {
      token: "markup.quote punctuation.definition.blockquote.markdown",
      foreground: "FFFFFF",
    },

    { token: "string.other.link.title.markdown", foreground: "FFFFFF" },
    {
      token: "string.other.link.description.title.markdown",
      foreground: "A0A0A0",
    },
    { token: "constant.other.reference.link.markdown", foreground: "FFC799" },
    { token: "markup.raw.block", foreground: "A0A0A0" },
    { token: "markup.raw.block.fenced.markdown", foreground: "00000050" },
    { token: "punctuation.definition.fenced.markdown", foreground: "00000050" },
    { token: "variable.language.fenced.markdown", foreground: "FFFFFF" },
    { token: "punctuation.section.class.end", foreground: "FFFFFF" },
    { token: "meta.separator", fontStyle: "bold", foreground: "65737E" },
    { token: "markup.table", foreground: "FFFFFF" },
  ],
  colors: {
    "editor.background": "#0e0f14",
    "editor.foreground": "#FFFFFF",
    "editor.selectionBackground": "#FFFFFF25",
    "editor.selectionHighlightBackground": "#FFFFFF25",
    "editorLineNumber.foreground": "#505050",
    "editorGroupHeader.tabsBackground": "#101010",
    "editorWidget.background": "#101010",
    "editorWarning.foreground": "#FFC799",
    "editorError.foreground": "#FF8080",
    "editorOverviewRuler.border": "#101010",
    "editorGutter.addedBackground": "#99FFE4",
    "editorGutter.deletedBackground": "#FF8080",
    "editorGutter.modifiedBackground": "#FFC799",
    "diffEditor.insertedTextBackground": "#99FFE415",
    "diffEditor.insertedLineBackground": "#99FFE415",
    "diffEditor.removedTextBackground": "#FF808015",
    "diffEditor.removedLineBackground": "#FF808015",
    "editorInlayHint.foreground": "#A0A0A0",
    "editorInlayHint.background": "#1C1C1C",
    "sideBar.background": "#101010",
    "sideBarTitle.foreground": "#A0A0A0",
    "sideBarSectionHeader.foreground": "#A0A0A0",
    "sideBarSectionHeader.background": "#101010",
    "activityBar.background": "#101010",
    "activityBar.foreground": "#A0A0A0",
    "activityBarBadge.background": "#FFC799",
    "activityBarBadge.foreground": "#000",
    "titleBar.activeBackground": "#101010",
    "titleBar.inactiveBackground": "#101010",
    "titleBar.activeForeground": "#7E7E7E",
    "titleBar.inactiveForeground": "#707070",
    "list.activeSelectionForeground": "#FFC799",
    "list.inactiveSelectionBackground": "#232323",
    focusBorder: "#00000000",
    "icon.foreground": "#A0A0A0",
    "input.background": "#1C1C1C",
    "list.activeSelectionBackground": "#232323",
    "list.hoverBackground": "#282828",
    "list.errorForeground": "#FF8080",
    "list.highlightForeground": "#FFC799",
    "selection.background": "#666",
    "editorBracketHighlight.foreground1": "#A0A0A0",
    "editorBracketHighlight.foreground2": "#A0A0A0",
    "editorBracketHighlight.foreground3": "#A0A0A0",
    "editorBracketHighlight.foreground4": "#A0A0A0",
    "editorBracketHighlight.foreground5": "#A0A0A0",
    "editorBracketHighlight.foreground6": "#A0A0A0",
    "editorBracketHighlight.unexpectedBracket.foreground": "#FF8080",
    "textLink.foreground": "#FFC799",
    "textLink.activeForeground": "#FFCFA8",
    "editorHoverWidget.background": "#161616",
    "editorHoverWidget.border": "#282828",
    "scrollbarSlider.background": "#34343480",
    "scrollbarSlider.hoverBackground": "#343434",
    "settings.modifiedItemIndicator": "#FFC799",
  },
};
