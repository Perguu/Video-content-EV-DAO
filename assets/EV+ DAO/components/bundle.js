/* @ds-bundle: {"format":4,"namespace":"EVPlus","components":[{"name":"ResearchHeader"},{"name":"Panel"},{"name":"StepCard"},{"name":"BarChart"},{"name":"Stat"},{"name":"Tag"},{"name":"SourceFooter"},{"name":"Sticker"}]} */
(function () {
  var React = window.React, h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }

  function ResearchHeader(p) {
    return h("header", { className: cx("ev-header", p.className) },
      h("div", { className: "ev-header-text" },
        p.kicker ? h("div", { className: "ev-kicker" }, p.kicker) : null,
        h("h1", { className: "ev-headline" }, p.headline),
        p.subhead ? h("p", { className: "ev-subhead" }, p.subhead) : null,
        p.children ? h("div", { className: "ev-lede" }, p.children) : null),
      p.logoSrc ? h("img", { className: "ev-header-logo", src: p.logoSrc, alt: "EV+ DAO" }) : null);
  }

  function Panel(p) {
    return h("section", { className: cx("ev-panel", p.className) },
      p.title ? h("h2", { className: "ev-panel-title" }, p.title) : null,
      p.subtitle ? h("p", { className: "ev-panel-sub" }, p.subtitle) : null,
      h("div", { className: "ev-panel-body" }, p.children));
  }

  function StepCard(p) {
    return h("div", { className: "ev-step" },
      h("div", { className: "ev-step-head" },
        h("span", { className: "ev-step-n" }, p.n),
        h("span", { className: "ev-step-title" }, p.title)),
      h("p", { className: "ev-step-body" }, p.children));
  }

  function BarChart(p) {
    var bars = p.bars || [], max = p.max || Math.max.apply(null, bars.map(function (b) { return b.value; }).concat([1]));
    var height = p.height || 220;
    return h("div", { className: "ev-bars", style: { gridTemplateColumns: "repeat(" + bars.length + ", 1fr)" } },
      bars.map(function (b, i) {
        var tone = b.tone || (b.highlight ? "signal" : "tint");
        return h("div", { key: i, className: "ev-bar-col" },
          h("div", { className: "ev-bar-area", style: { height: height + "px" } },
            h("div", { className: cx("ev-bar-value", "ev-tone-text-" + tone) }, b.display != null ? b.display : String(b.value)),
            h("div", { className: cx("ev-bar", "ev-tone-" + tone), style: { height: Math.max(4, Math.round(b.value / max * (height - 48))) + "px" } })),
          h("div", { className: "ev-bar-label" }, b.label),
          b.sub ? h("div", { className: "ev-bar-sub" }, b.sub) : null,
          b.meta ? h("div", { className: "ev-bar-meta" }, b.meta) : null);
      }));
  }

  function Stat(p) {
    return h("div", { className: "ev-stat" },
      h("div", { className: cx("ev-stat-value", p.tone ? "ev-tone-text-" + p.tone : null) }, p.value),
      h("div", { className: "ev-stat-label" }, p.label),
      p.note ? h("div", { className: "ev-stat-note" }, p.note) : null);
  }

  function Tag(p) {
    return h("span", { className: cx("ev-tag", "ev-tag-" + (p.tone || "neutral")) }, p.children);
  }

  function SourceFooter(p) {
    return h("footer", { className: "ev-footer" },
      h("div", { className: "ev-footer-text" },
        p.source ? h("p", null, h("b", null, "Source"), " ", p.source) : null,
        p.note ? h("p", null, h("b", null, "Note"), " ", p.note) : null),
      h("div", { className: "ev-footer-brand" },
        p.logoSrc ? h("img", { src: p.logoSrc, alt: "EV+ DAO" }) : null,
        h("span", null, p.handle || "@EVplus_DAO")));
  }

  function Sticker(p) {
    return h("span", { className: cx("ev-sticker", p.size === "lg" ? "ev-sticker-lg" : null) }, p.children);
  }

  window.EVPlus = Object.assign(window.EVPlus || {}, {
    ResearchHeader: ResearchHeader, Panel: Panel, StepCard: StepCard, BarChart: BarChart,
    Stat: Stat, Tag: Tag, SourceFooter: SourceFooter, Sticker: Sticker
  });
})();
