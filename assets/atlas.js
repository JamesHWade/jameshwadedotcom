(() => {
  const landmarks = {
    shinymcp: {
      region: "Shiny & interfaces",
      color: "copper",
      stamp: "R · MCP",
      updated: "Sep 2026",
      title: "shinymcp",
      desc: "Converts Shiny apps into Model Context Protocol (MCP) apps so interactive UIs render directly inside AI chat clients like Claude Desktop. Flatten your reactive graph into discrete tool calls.",
      code: 'library(shinymcp)\napp <- mcp_app(ui, tools, name = "explorer")\nserve(app)',
      ctaText: "Read the shinymcp post →",
      ctaHref: "posts/2026-02-21_shinymcp.html",
      github: "https://github.com/JamesHWade/shinymcp",
      docs: "https://jameshwade.github.io/shinymcp/",
      wTitle: "Try switching datasets",
      wSub: "Inline MCP preview",
      wHtml: `
        <select id="w-mcp-ds" class="widget-select" aria-label="Choose example dataset">
          <option value="mtcars">mtcars (32 obs)</option>
          <option value="sec">sec_polymers (Mw / Mn)</option>
          <option value="iris">iris (150 obs)</option>
        </select>
        <div id="w-mcp-out" class="widget-out">mpg: med 19.2 | hp: med 123.0 (rendered inline in chat)</div>
      `
    },
    measure: {
      region: "Analytical chemistry",
      color: "pine",
      stamp: "R + Python",
      updated: "Nov 2026",
      title: "measure & measure.sec",
      desc: "A recipes-style interface to tidymodels built specifically for analytical characterization data, extended with SEC/GPC polymer analysis (measure.sec) and analytical method resource accounting (measure-methods).",
      code: "recipe(mw ~ ., data = sec_runs) |>\n  step_measure_baseline_als() |>\n  step_sec_calibration()",
      ctaText: "Read my chemistry background →",
      ctaHref: "about.html",
      github: "https://github.com/JamesHWade/measure",
      docs: "https://jameshwade.github.io/measure/dev",
      wTitle: "Baseline correction preview",
      wSub: "step_measure_baseline_als()",
      wHtml: `
        <div class="widget-row">
          <span>Raw drift vs. corrected peak</span>
          <button type="button" id="w-base-btn" class="widget-btn is-solid" style="background: var(--c-pine);">Apply ALS</button>
        </div>
        <svg viewBox="0 0 260 54" class="widget-svg" fill="none" aria-hidden="true">
          <path d="M 4 46 L 48 40 L 64 14 L 82 38 L 144 30 L 164 6 L 182 28 L 256 22" stroke="#94A3B8" stroke-width="1.3" stroke-dasharray="3 3"/>
          <path id="w-base-clean" d="M 4 46 L 48 46 L 64 20 L 82 46 L 144 46 L 164 10 L 182 46 L 256 46" stroke="#42E3AC" stroke-width="2" opacity="0.25"/>
        </svg>
      `
    },
    vandeemter: {
      region: "Analytical chemistry",
      color: "lake",
      stamp: "Python · Shiny",
      updated: "Nov 2026",
      title: "van-deemter-lab",
      desc: "An interactive Shiny for Python teaching lab for the van Deemter equation (H = A + B/u + C·u) and chromatographic resolution. Slide the mobile-phase velocity below to find the minimum plate height.",
      code: "# H(u) = A + B / u + C * u\n# Interactive chromatography lab in Shiny for Python",
      ctaText: "Try Python in your browser with Pyodide →",
      ctaHref: "posts/2026-02-21_pyodide.html",
      github: "https://github.com/JamesHWade/van-deemter-lab",
      docs: "",
      wTitle: "van Deemter curve",
      wSub: "Slide velocity u",
      wHtml: `
        <div class="widget-row" style="margin-bottom:0.35rem;">
          <span>u = <strong id="vd-u">2.2</strong> cm/s</span>
          <span id="vd-h" style="color: var(--c-lake); font-weight:700;">H = 2.03 µm (near optimum)</span>
        </div>
        <input id="vd-slider" type="range" min="4" max="60" value="22" aria-label="Mobile phase velocity" style="width:100%; accent-color: var(--c-lake); cursor:pointer;"/>
        <svg viewBox="0 0 260 54" class="widget-svg" fill="none" aria-hidden="true">
          <path d="M 18 8 Q 48 48 92 44 T 248 16" stroke="#54D2E8" stroke-width="2"/>
          <circle id="vd-dot" cx="92" cy="44" r="5" fill="#F7B538"/>
        </svg>
      `
    },
    deputy: {
      region: "R packages for AI agents",
      color: "ochre",
      stamp: "R · Agents",
      updated: "Nov 2026",
      title: "deputy",
      desc: "Agentic AI workflows for R built on ellmer. Wraps tool-calling loops with permission policies, usage and cost caps, subagents, MCP servers, and human-in-the-loop approval hooks.",
      code: "bot <- deputy::agent(\n  chat = ellmer::chat_claude(),\n  permissions = permissions_readonly(),\n  limits = usage_limits(max_cost = 0.25)\n)",
      ctaText: "See posit::conf(2026) talk →",
      ctaHref: "talks.html",
      github: "https://github.com/JamesHWade/deputy",
      docs: "https://jameshwade.github.io/deputy/",
      wTitle: "Permission policy preview",
      wSub: "Toggle controls",
      wHtml: `
        <div class="widget-row">
          <label style="cursor:pointer;"><input id="w-dep-w" type="checkbox"/> Allow writes</label>
          <label style="cursor:pointer;"><input id="w-dep-h" type="checkbox" checked/> Approval hook</label>
        </div>
        <div id="w-dep-out" class="widget-out">Readonly mode with human approval enabled.</div>
      `
    },
    dsprrr: {
      region: "R packages for AI agents",
      color: "ochre",
      stamp: "R · DSPy",
      updated: "Nov 2026",
      title: "dsprrr",
      desc: "Declarative, self-improving language programs for R inspired by DSPy. Write typed signatures instead of brittle prompt strings, score with real metrics, and optimize instructions automatically.",
      code: 'sig <- signature("notes -> polymer: enum(PE, PP, PET)")\nopt <- optimize(module(sig), train_set, metric = accuracy)',
      ctaText: "See talks on AI in R →",
      ctaHref: "talks.html",
      github: "https://github.com/JamesHWade/dsprrr",
      docs: "https://jameshwade.github.io/dsprrr/",
      wTitle: "Optimization pass",
      wSub: "Metric scoring",
      wHtml: `
        <div class="widget-row">
          <span>Few-shot optimizer</span>
          <button type="button" id="w-dsp-btn" class="widget-btn is-solid" style="background: var(--c-ochre);">Optimize</button>
        </div>
        <div id="w-dsp-out" class="widget-out">Zero-shot baseline: 0.72. Click Optimize to compile examples.</div>
      `
    },
    frontier: {
      region: "R packages for AI agents",
      color: "copper",
      stamp: "R · 3 repos",
      updated: "Nov 2026",
      title: "tempest · scans · graft",
      desc: "Three R packages exploring different parts of agent workflows: STORM and Co-STORM research and writing agents (tempest), trajectory analysis for AI agents (scans), and reviewed project memory and shared vocabulary (graft).",
      code: "# tempest: STORM & Co-STORM research agents in R\n# scans:   Trajectory analysis for AI agents\n# graft:   Reviewed project memory & artifacts",
      ctaText: "See posit::conf(2026) talk →",
      ctaHref: "talks.html",
      github: "https://github.com/JamesHWade/tempest",
      docs: "https://jameshwade.github.io/graft/",
      wTitle: "Package notes",
      wSub: "Select one",
      wHtml: `
        <div class="widget-row" style="justify-content:flex-start;">
          <button type="button" class="widget-btn fr-pick" data-fr="tempest">tempest</button>
          <button type="button" class="widget-btn fr-pick" data-fr="scans">scans</button>
          <button type="button" class="widget-btn fr-pick" data-fr="graft">graft</button>
        </div>
        <div id="w-fr-out" class="widget-out">tempest: Multi-perspective STORM research and writing agents in R.</div>
      `
    },
    rill: {
      region: "Shiny & interfaces",
      color: "lake",
      stamp: "R · Shiny",
      updated: "Nov 2026",
      title: "rill & suppose",
      desc: "rill is a personal, agent-native feed reader built with Shiny. Alongside it, suppose is an R package and chat workbench for making beliefs explicit and inspecting their consequences.",
      code: "# rill:    Personal, agent-native feed reader in Shiny\n# suppose: Make beliefs explicit & inspect consequences",
      ctaText: "Read about Disposable Shiny Apps →",
      ctaHref: "posts/2025-11-03_disposable-shiny-apps.html",
      github: "https://github.com/JamesHWade/rill",
      docs: "https://github.com/JamesHWade/suppose",
      wTitle: "Why build a personal feed reader?",
      wSub: "Note",
      wHtml: `
        <div style="font-family: 'Newsreader', Georgia, serif; font-size: 0.85rem; color: var(--s-ink-soft); line-height: 1.55;">
          Personal software is fun to build when you can put together a small Shiny reader in a weekend and wire an agent straight into your reading list.
        </div>
      `
    },
    menagerie: {
      region: "Mid-Michigan",
      color: "plum",
      stamp: "7 pets",
      updated: "At home",
      title: "Menagerie Crossing",
      desc: "Away from the keyboard and the lab bench: I live in mid-Michigan with my wife (a veterinarian who brings home too many furry friends), our son, two dogs, and five cats.",
      code: 'menagerie <- tibble(\n  species = c("dog", "cat"),\n  count   = c(2L, 5L),\n  chaos   = "delightful"\n)',
      ctaText: "Read the About page →",
      ctaHref: "about.html",
      github: "https://github.com/JamesHWade",
      docs: "",
      wTitle: "Roll call",
      wSub: "Toss a treat",
      wHtml: `
        <div class="widget-row">
          <span id="w-pet-out">2 dogs, 5 cats accounted for</span>
          <button type="button" id="w-pet-btn" class="widget-btn is-solid" style="background: var(--c-plum);">Toss Treat</button>
        </div>
      `
    }
  };

  let currentKey = "shinymcp";
  let baseApplied = false;
  let petCount = 0;

  function wireWidgetEvents(key) {
    if (key === "shinymcp") {
      const sel = document.getElementById("w-mcp-ds");
      const out = document.getElementById("w-mcp-out");
      if (sel && out) {
        sel.addEventListener("change", () => {
          const map = {
            mtcars: "mpg: med 19.2 | hp: med 123.0 (rendered inline in chat)",
            sec: "Mw: 64.2 kDa | Mn: 31.8 kDa | PDI: 2.02 (SEC summary inline)",
            iris: "setosa(50) versicolor(50) virginica(50) (inline UI updated)"
          };
          out.textContent = map[sel.value] || "";
        });
      }
    } else if (key === "measure") {
      baseApplied = false;
      const btn = document.getElementById("w-base-btn");
      const clean = document.getElementById("w-base-clean");
      if (btn && clean) {
        btn.addEventListener("click", () => {
          baseApplied = !baseApplied;
          clean.setAttribute("opacity", baseApplied ? "1" : "0.25");
          btn.textContent = baseApplied ? "Reset Raw" : "Apply ALS";
        });
      }
    } else if (key === "vandeemter") {
      const slider = document.getElementById("vd-slider");
      const uEl = document.getElementById("vd-u");
      const hEl = document.getElementById("vd-h");
      const dot = document.getElementById("vd-dot");
      if (slider && uEl && hEl && dot) {
        const update = () => {
          const u = Number(slider.value) / 10;
          const H = 0.6 + 1.6 / u + 0.32 * u;
          uEl.textContent = u.toFixed(1);
          const note = H < 2.15 ? " (near optimum)" : (u < 1.5 ? " (diffusion)" : " (mass transfer)");
          hEl.textContent = `H = ${H.toFixed(2)} µm${note}`;
          const cx = 18 + ((u - 0.4) / 5.6) * 230;
          const cy = Math.max(8, Math.min(48, 52 - (H - 1.7) * 14));
          dot.setAttribute("cx", cx.toFixed(1));
          dot.setAttribute("cy", cy.toFixed(1));
        };
        slider.addEventListener("input", update);
        update();
      }
    } else if (key === "deputy") {
      const w = document.getElementById("w-dep-w");
      const h = document.getElementById("w-dep-h");
      const out = document.getElementById("w-dep-out");
      if (w && h && out) {
        const update = () => {
          if (w.checked && !h.checked) {
            out.textContent = "Workspace writes enabled without a confirmation hook.";
          } else if (w.checked && h.checked) {
            out.textContent = "Guarded writes: deputy pauses for sign-off before editing files.";
          } else {
            out.textContent = "Readonly mode" + (h.checked ? " with human approval enabled." : ".");
          }
        };
        w.addEventListener("change", update);
        h.addEventListener("change", update);
      }
    } else if (key === "dsprrr") {
      const btn = document.getElementById("w-dsp-btn");
      const out = document.getElementById("w-dsp-out");
      if (btn && out) {
        btn.addEventListener("click", () => {
          out.textContent = "Compiled 4 typed demos. Eval accuracy: 0.72 -> 0.91.";
        });
      }
    } else if (key === "frontier") {
      const out = document.getElementById("w-fr-out");
      const notes = {
        tempest: "tempest: Multi-perspective STORM and Co-STORM research and writing agents in R.",
        scans: "scans: Inspect, score, and compare multi-step AI agent trajectories in R.",
        graft: "graft: Reviewed project memory, persistent artifacts, and shared vocabulary for apps and agents."
      };
      document.querySelectorAll(".fr-pick").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (out) out.textContent = notes[btn.dataset.fr] || "";
        });
      });
    } else if (key === "menagerie") {
      const btn = document.getElementById("w-pet-btn");
      const out = document.getElementById("w-pet-out");
      const msgs = [
        "Treat tossed. Two dogs sprint in; three cats pretend not to care.",
        "Treat tossed. All five cats suddenly appear on the keyboard.",
        "Everyone is fed and napping near the router."
      ];
      if (btn && out) {
        btn.addEventListener("click", () => {
          out.textContent = msgs[petCount % msgs.length];
          petCount += 1;
        });
      }
    }
  }

  function selectLandmark(key) {
    const d = landmarks[key];
    if (!d) return;
    currentKey = key;

    const cVar = `var(--c-${d.color})`;
    const cBg = `var(--c-${d.color}-bg)`;

    const banner = document.getElementById("sheet-banner");
    if (banner) {
      banner.style.background = cBg;
      banner.style.color = cVar;
    }

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText("sheet-region", d.region);
    setText("sheet-stamp", d.stamp);
    setText("sheet-title", d.title);
    setText("sheet-updated", d.updated);
    setText("sheet-desc", d.desc);
    setText("sheet-code", d.code);
    setText("sheet-widget-title", d.wTitle);
    setText("sheet-widget-sub", d.wSub);

    const wBody = document.getElementById("sheet-widget-body");
    if (wBody) {
      wBody.innerHTML = d.wHtml;
      wireWidgetEvents(key);
    }

    const cta = document.getElementById("sheet-cta");
    if (cta) {
      cta.textContent = d.ctaText;
      cta.setAttribute("href", d.ctaHref);
      cta.style.color = cVar;
    }

    const ext = document.getElementById("sheet-ext-links");
    if (ext) {
      let html = `<a href="${d.github}" target="_blank" rel="noopener">GitHub ↗</a>`;
      if (d.docs) {
        html += `<a href="${d.docs}" target="_blank" rel="noopener">Docs ↗</a>`;
      }
      ext.innerHTML = html;
    }

    Object.keys(landmarks).forEach((k) => {
      const pin = document.getElementById(`pin-${k}`);
      if (!pin) return;
      const active = k === key;
      pin.setAttribute("stroke-width", active ? "3" : "1.6");
      pin.setAttribute("fill-opacity", active ? "0.35" : "0.16");
    });

    document.querySelectorAll(".lm-btn").forEach((btn) => {
      const active = btn.dataset.lm === key;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.style.backgroundColor = active ? cVar : "var(--s-paper)";
      btn.style.borderColor = active ? cVar : "var(--s-border-ink)";
      if (!active) {
        btn.style.color = "var(--s-ink)";
      } else {
        btn.style.removeProperty("color");
      }
    });
  }

  function initAtlas() {
    if (!document.getElementById("atlas-workbench")) return;

    document.querySelectorAll(".atlas-pin").forEach((pin) => {
      const key = pin.dataset.pin;
      pin.addEventListener("click", () => selectLandmark(key));
      pin.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectLandmark(key);
        }
      });
    });

    document.querySelectorAll(".lm-btn").forEach((btn) => {
      btn.addEventListener("click", () => selectLandmark(btn.dataset.lm));
    });

    document.querySelectorAll("[data-focus-landmark]").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const lm = card.getAttribute("data-focus-landmark");
        if (lm && landmarks[lm]) selectLandmark(lm);
      });
    });

    selectLandmark(currentKey);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAtlas);
  } else {
    initAtlas();
  }
})();
