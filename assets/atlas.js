(() => {
  const ORDER = [
    "shinymcp",
    "measure",
    "vandeemter",
    "deputy",
    "dsprrr",
    "frontier",
    "rill",
    "menagerie"
  ];

  const COMPASS_ORIGIN = { x: 296, y: 174 };

  const landmarks = {
    shinymcp: {
      region: "Shiny & interfaces",
      regionKey: "shiny",
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
      wTitle: "Inline MCP chat preview",
      wSub: "Click bars or switch dataset"
    },
    measure: {
      region: "Analytical chemistry",
      regionKey: "chem",
      color: "pine",
      stamp: "R + Python",
      updated: "Nov 2026",
      title: "measure & measure.sec",
      desc: "A recipes-style interface to tidymodels built specifically for analytical characterization data, extended with SEC/GPC polymer analysis (measure.sec) and method resource accounting (measure-methods).",
      code: "recipe(mw ~ ., data = sec_runs) |>\n  step_measure_baseline_als() |>\n  step_measure_smooth_savgol() |>\n  step_sec_calibration()",
      ctaText: "Read my chemistry background →",
      ctaHref: "about.html",
      github: "https://github.com/JamesHWade/measure",
      docs: "https://jameshwade.github.io/measure/dev",
      wTitle: "Signal processing pipeline",
      wSub: "Toggle recipe steps"
    },
    vandeemter: {
      region: "Analytical chemistry",
      regionKey: "chem",
      color: "lake",
      stamp: "Python · Shiny",
      updated: "Nov 2026",
      title: "van-deemter-lab",
      desc: "An interactive Shiny for Python teaching lab for the van Deemter equation (H = A + B/u + C·u) and chromatographic resolution. Compare column packings and slide velocity to locate minimum plate height.",
      code: "# H(u) = A + B / u + C * u\n# u_opt = sqrt(B / C), H_min = A + 2 * sqrt(B * C)",
      ctaText: "Try Python in your browser with Pyodide →",
      ctaHref: "posts/2026-02-21_pyodide.html",
      github: "https://github.com/JamesHWade/van-deemter-lab",
      docs: "",
      wTitle: "van Deemter equation lab",
      wSub: "H = A + B/u + C·u"
    },
    deputy: {
      region: "R packages for AI agents",
      regionKey: "agents",
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
      wTitle: "Permission & budget sandbox",
      wSub: "Run tool calls"
    },
    dsprrr: {
      region: "R packages for AI agents",
      regionKey: "agents",
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
      wTitle: "Signature optimization passes",
      wSub: "notes -> polymer"
    },
    frontier: {
      region: "R packages for AI agents",
      regionKey: "agents",
      color: "copper",
      stamp: "R · 3 repos",
      updated: "Nov 2026",
      title: "tempest · scans · graft",
      desc: "Three R packages exploring different parts of agent workflows: STORM and Co-STORM research and writing agents (tempest), trajectory analysis for AI agents (scans), and reviewed project memory and shared vocabulary (graft).",
      code: "library(tempest)\nreport <- storm_research(\"Polymer SEC light scattering\")",
      ctaText: "See posit::conf(2026) talk →",
      ctaHref: "talks.html",
      github: "https://github.com/JamesHWade/tempest",
      docs: "https://jameshwade.github.io/graft/",
      wTitle: "Inspect each package",
      wSub: "Interactive workbench"
    },
    rill: {
      region: "Shiny & interfaces",
      regionKey: "shiny",
      color: "lake",
      stamp: "R · Shiny",
      updated: "Nov 2026",
      title: "rill & suppose",
      desc: "rill is a personal, agent-native feed reader built with Shiny. Alongside it, suppose is an R package and chat workbench for making beliefs explicit and inspecting their consequences.",
      code: "# rill: agent-native feed triage in Shiny\nrill::run_reader(feeds = \"feeds.yml\")",
      ctaText: "Read about Disposable Shiny Apps →",
      ctaHref: "posts/2025-11-03_disposable-shiny-apps.html",
      github: "https://github.com/JamesHWade/rill",
      docs: "https://github.com/JamesHWade/suppose",
      wTitle: "Try rill & suppose",
      wSub: "Switch tool"
    },
    menagerie: {
      region: "Mid-Michigan",
      regionKey: "home",
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
      wTitle: "Household roll call",
      wSub: "Click a pet or toss a treat"
    }
  };

  let currentKey = "shinymcp";
  let currentCode = "";
  let copyTimer = null;

  /* =========================================================================
     WIDGET 1: shinymcp — Inline MCP Chat Preview
     ========================================================================= */
  function mountShinyMcp(container) {
    const datasets = {
      sec: {
        prompt: "Compare polymer SEC runs by batch",
        unit: "kDa",
        metricLabel: "Mw",
        bars: [
          { label: "HDPE-A", val: 64.2, sub: "Mn 31.8 · PDI 2.02", n: 18 },
          { label: "PP-B", val: 92.6, sub: "Mn 49.5 · PDI 1.87", n: 14 },
          { label: "PET-C", val: 48.4, sub: "Mn 27.6 · PDI 1.75", n: 12 }
        ]
      },
      mtcars: {
        prompt: "Summarize mtcars fuel economy by cylinders",
        unit: "mpg",
        metricLabel: "Median",
        bars: [
          { label: "4 cyl", val: 26.0, sub: "hp 91 · wt 2.20", n: 11 },
          { label: "6 cyl", val: 19.7, sub: "hp 110 · wt 3.22", n: 7 },
          { label: "8 cyl", val: 15.2, sub: "hp 192 · wt 3.76", n: 14 }
        ]
      },
      iris: {
        prompt: "Compare iris petal length across species",
        unit: "cm",
        metricLabel: "Mean",
        bars: [
          { label: "setosa", val: 1.46, sub: "sd 0.17 · w 0.25", n: 50 },
          { label: "versi", val: 4.26, sub: "sd 0.47 · w 1.33", n: 50 },
          { label: "virgin", val: 5.55, sub: "sd 0.55 · w 2.03", n: 50 }
        ]
      }
    };

    const state = { ds: "sec", activeIdx: 0 };

    function render() {
      const d = datasets[state.ds];
      const maxVal = Math.max(...d.bars.map((b) => b.val)) * 1.15;
      const sel = d.bars[state.activeIdx] || d.bars[0];
      const barSvg = d.bars
        .map((b, i) => {
          const y = 8 + i * 22;
          const w = Math.max(16, (b.val / maxVal) * 168);
          const isSel = i === state.activeIdx;
          const fill = isSel ? "var(--c-copper)" : "var(--c-lake)";
          const op = isSel ? "1" : "0.45";
          return `
            <g class="mcp-bar-row" data-idx="${i}" style="cursor:pointer;">
              <rect x="0" y="${y - 3}" width="276" height="20" fill="${isSel ? "var(--c-copper-bg)" : "transparent"}"/>
              <text x="6" y="${y + 10}" fill="var(--s-ink)" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="${isSel ? "700" : "500"}">${b.label}</text>
              <rect x="64" y="${y + 1}" width="${w.toFixed(1)}" height="12" fill="${fill}" opacity="${op}" rx="1"/>
              <text x="${(69 + w).toFixed(1)}" y="${y + 10.5}" fill="var(--s-ink)" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">${b.val} ${d.unit}</text>
            </g>`;
        })
        .join("");

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-copper);">
          <div class="w-pills">
            <button type="button" class="w-pill ${state.ds === "sec" ? "is-on" : ""}" data-ds="sec">sec_polymers</button>
            <button type="button" class="w-pill ${state.ds === "mtcars" ? "is-on" : ""}" data-ds="mtcars">mtcars</button>
            <button type="button" class="w-pill ${state.ds === "iris" ? "is-on" : ""}" data-ds="iris">iris</button>
          </div>
          <div class="w-chat-frame">
            <div class="w-chat-user">${d.prompt}</div>
            <div class="w-chat-card">
              <div class="w-row">
                <strong style="color:var(--s-ink);">MCP UI · ${state.ds}</strong>
                <span>${sel.label}: ${sel.sub}</span>
              </div>
              <svg viewBox="0 0 276 74" class="w-canvas" style="height:76px;" role="img" aria-label="Inline MCP bar chart">
                ${barSvg}
              </svg>
            </div>
          </div>
          <div class="w-trace">
            <code>→ tools/call summarize(data="${state.ds}", slice="${sel.label}", n=${sel.n})</code>
          </div>
        </div>
      `;

      container.querySelectorAll("[data-ds]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.ds = btn.dataset.ds;
          state.activeIdx = 0;
          render();
        });
      });

      container.querySelectorAll(".mcp-bar-row").forEach((row) => {
        row.addEventListener("click", () => {
          state.activeIdx = Number(row.dataset.idx);
          render();
        });
      });
    }

    render();
  }

  /* =========================================================================
     WIDGET 2: measure — Signal Processing Pipeline
     ========================================================================= */
  function mountMeasure(container) {
    const N = 96;
    const xs = [];
    const pure = [];
    const drift = [];
    const noise = [];

    for (let i = 0; i < N; i++) {
      const t = i / (N - 1); // 0..1
      xs.push(t);
      const p1 = 0.78 * Math.exp(-Math.pow((t - 0.31) / 0.068, 2));
      const p2 = 0.56 * Math.exp(-Math.pow((t - 0.67) / 0.092, 2));
      pure.push(p1 + p2);
      drift.push(0.1 + 0.34 * t + 0.09 * Math.sin(t * Math.PI * 1.4));
      // Deterministic pseudo-random detector noise
      const n =
        0.045 * Math.sin(i * 1.93) +
        0.032 * Math.cos(i * 3.71) +
        0.02 * Math.sin(i * 6.13);
      noise.push(n);
    }

    const state = { als: true, smooth: false, peaks: true };

    function toPath(vals) {
      const w = 264;
      const h = 70;
      const padX = 8;
      const baseY = 66;
      const scaleY = 48;
      return vals
        .map((v, i) => {
          const px = padX + xs[i] * w;
          const py = Math.max(6, Math.min(72, baseY - v * scaleY));
          return `${i === 0 ? "M" : "L"} ${px.toFixed(1)} ${py.toFixed(1)}`;
        })
        .join(" ");
    }

    function peakFillPath(tStart, tEnd, vals) {
      const w = 264;
      const padX = 8;
      const baseY = 66;
      const scaleY = 48;
      const pts = [];
      for (let i = 0; i < N; i++) {
        if (xs[i] >= tStart && xs[i] <= tEnd) {
          const px = padX + xs[i] * w;
          const py = Math.max(6, Math.min(72, baseY - vals[i] * scaleY));
          pts.push(`${px.toFixed(1)} ${py.toFixed(1)}`);
        }
      }
      if (!pts.length) return "";
      const x0 = (padX + tStart * w).toFixed(1);
      const x1 = (padX + tEnd * w).toFixed(1);
      return `M ${x0} ${baseY} L ${pts.join(" L ")} L ${x1} ${baseY} Z`;
    }

    function render() {
      const rawVals = xs.map((_, i) => pure[i] + drift[i] + noise[i]);
      const procVals = xs.map((_, i) => {
        let v = pure[i];
        if (!state.als) v += drift[i];
        if (!state.smooth) v += noise[i];
        else v += noise[i] * 0.12;
        return Math.max(0, v);
      });

      const rawPath = toPath(rawVals);
      const driftPath = toPath(drift);
      const procPath = toPath(procVals);
      const p1Area = state.peaks && state.als ? peakFillPath(0.16, 0.46, procVals) : "";
      const p2Area = state.peaks && state.als ? peakFillPath(0.49, 0.88, procVals) : "";

      const driftVal = state.als ? "0.0 mV" : "+18.4 mV";
      const snrVal = state.smooth ? "64 dB" : "19 dB";
      const calVal = state.als && state.peaks ? "64.2 kDa" : "Uncalibrated";

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-pine);">
          <div class="w-pills">
            <button type="button" class="w-pill w-pill-subtle ${state.als ? "is-on" : ""}" data-step="als">${state.als ? "✓" : "+"} Baseline ALS</button>
            <button type="button" class="w-pill w-pill-subtle ${state.smooth ? "is-on" : ""}" data-step="smooth">${state.smooth ? "✓" : "+"} Savitzky-Golay</button>
            <button type="button" class="w-pill w-pill-subtle ${state.peaks ? "is-on" : ""}" data-step="peaks">${state.peaks ? "✓" : "+"} SEC Peaks</button>
          </div>
          <svg viewBox="0 0 280 78" class="w-canvas w-canvas-dark" style="height:82px;" role="img" aria-label="Interactive SEC chromatogram">
            <line x1="8" y1="66" x2="272" y2="66" stroke="var(--s-border-ink)" stroke-width="0.9"/>
            ${p1Area ? `<path d="${p1Area}" fill="var(--c-pine)" opacity="0.26"/>` : ""}
            ${p2Area ? `<path d="${p2Area}" fill="var(--c-lake)" opacity="0.26"/>` : ""}
            <path d="${rawPath}" fill="none" stroke="var(--s-ink-faint)" stroke-width="1.1" stroke-dasharray="2.5 2.5" opacity="${state.als || state.smooth ? "0.45" : "0"}"/>
            ${state.als ? `<path d="${driftPath}" fill="none" stroke="var(--c-ochre)" stroke-width="1" stroke-dasharray="4 3" opacity="0.72"/>` : ""}
            <path d="${procPath}" fill="none" stroke="var(--c-pine)" stroke-width="2" stroke-linejoin="round"/>
            ${state.peaks && state.als ? `
              <text x="90" y="17" text-anchor="middle" fill="var(--s-code-ink)" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="700">61% · Mw</text>
              <text x="186" y="29" text-anchor="middle" fill="var(--s-code-ink)" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="700">39% · Olig</text>
            ` : ""}
          </svg>
          <div class="w-metrics">
            <div class="w-metric"><small>Drift</small><strong>${driftVal}</strong></div>
            <div class="w-metric"><small>Signal SNR</small><strong>${snrVal}</strong></div>
            <div class="w-metric"><small>SEC Mw</small><strong>${calVal}</strong></div>
          </div>
        </div>
      `;

      container.querySelectorAll("[data-step]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const k = btn.dataset.step;
          state[k] = !state[k];
          render();
        });
      });
    }

    render();
  }

  /* =========================================================================
     WIDGET 3: van-deemter-lab — Exact van Deemter Curve Explorer
     ========================================================================= */
  function mountVanDeemter(container) {
    const columns = {
      packed: { name: "5 µm Packed", A: 1.15, B: 2.4, C: 0.34 },
      uhplc: { name: "1.7 µm UHPLC", A: 0.42, B: 1.8, C: 0.085 },
      monolith: { name: "Monolith", A: 0.78, B: 2.1, C: 0.14 }
    };

    const state = { col: "packed", u: 2.6, showTerms: true };
    const uMin = 0.4;
    const uMax = 6.0;
    const hMax = 7.2;

    const toX = (u) => 12 + ((u - uMin) / (uMax - uMin)) * 256;
    const toY = (H) => Math.max(6, Math.min(72, 72 - (H / hMax) * 64));

    function curvePath(fn) {
      const pts = [];
      const steps = 80;
      for (let i = 0; i <= steps; i++) {
        const u = uMin + (i / steps) * (uMax - uMin);
        const y = toY(fn(u));
        pts.push(`${i === 0 ? "M" : "L"} ${toX(u).toFixed(1)} ${y.toFixed(1)}`);
      }
      return pts.join(" ");
    }

    function render() {
      const c = columns[state.col];
      const uOpt = Math.sqrt(c.B / c.C);
      const hMin = c.A + 2 * Math.sqrt(c.B * c.C);
      const H = c.A + c.B / state.u + c.C * state.u;
      const plates = Math.round(150000 / H); // 15 cm = 150,000 µm

      let regime = "Optimal zone";
      let badgeCls = "w-badge-ok";
      if (state.u < uOpt * 0.72) {
        regime = "B/u diffusion";
        badgeCls = "w-badge-warn";
      } else if (state.u > uOpt * 1.38) {
        regime = "C·u mass transfer";
        badgeCls = "w-badge-err";
      }

      const mainPath = curvePath((u) => c.A + c.B / u + c.C * u);
      const aPath = state.showTerms ? curvePath(() => c.A) : "";
      const bPath = state.showTerms ? curvePath((u) => c.B / u) : "";
      const cPath = state.showTerms ? curvePath((u) => c.C * u) : "";

      const dotX = toX(state.u);
      const dotY = toY(H);
      const optX = toX(Math.min(uMax, uOpt));
      const optY = toY(hMin);

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-lake);">
          <div class="w-row">
            <div class="w-pills">
              ${Object.entries(columns)
                .map(
                  ([k, v]) =>
                    `<button type="button" class="w-pill ${state.col === k ? "is-on" : ""}" data-col="${k}">${v.name}</button>`
                )
                .join("")}
            </div>
            <button type="button" class="w-btn is-ghost" id="vd-opt-btn">u_opt</button>
          </div>

          <svg viewBox="0 0 280 78" class="w-canvas w-canvas-dark" style="height:82px;" role="img" aria-label="Exact van Deemter plot">
            <line x1="12" y1="72" x2="268" y2="72" stroke="var(--s-border-ink)" stroke-width="0.9"/>
            ${state.showTerms ? `
              <path d="${aPath}" fill="none" stroke="var(--s-ink-faint)" stroke-width="1" stroke-dasharray="2 3" opacity="0.5"/>
              <path d="${bPath}" fill="none" stroke="var(--c-ochre)" stroke-width="1" stroke-dasharray="3 3" opacity="0.55"/>
              <path d="${cPath}" fill="none" stroke="var(--c-copper)" stroke-width="1" stroke-dasharray="3 3" opacity="0.55"/>
            ` : ""}
            <path d="${mainPath}" fill="none" stroke="var(--c-lake)" stroke-width="2.2"/>
            <line x1="${optX.toFixed(1)}" y1="${optY.toFixed(1)}" x2="${optX.toFixed(1)}" y2="72" stroke="var(--c-pine)" stroke-width="1" stroke-dasharray="2 2" opacity="0.75"/>
            <polygon points="${optX.toFixed(1)},${(optY - 3.5).toFixed(1)} ${(optX + 3.5).toFixed(1)},${optY.toFixed(1)} ${optX.toFixed(1)},${(optY + 3.5).toFixed(1)} ${(optX - 3.5).toFixed(1)},${optY.toFixed(1)}" fill="var(--c-pine)"/>
            <line id="vd-vline" x1="${dotX.toFixed(1)}" y1="${dotY.toFixed(1)}" x2="${dotX.toFixed(1)}" y2="72" stroke="var(--c-ochre)" stroke-width="1.1" opacity="0.8"/>
            <circle id="vd-dot" cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="4.8" fill="var(--c-ochre)" stroke="var(--s-code-bg)" stroke-width="1.5"/>
          </svg>

          <div class="w-row">
            <span>u = <strong id="vd-u" style="color:var(--s-ink);">${state.u.toFixed(1)}</strong> cm/s</span>
            <span id="vd-regime" class="w-badge ${badgeCls}">${regime}</span>
          </div>
          <input id="vd-slider" class="w-slider" type="range" min="4" max="60" value="${Math.round(state.u * 10)}" aria-label="Mobile phase velocity u"/>
          <div class="w-metrics">
            <div class="w-metric"><small>Plate H</small><strong id="vd-h">${H.toFixed(2)} µm</strong></div>
            <div class="w-metric"><small>Plates N</small><strong id="vd-n">${plates.toLocaleString()}</strong></div>
            <div class="w-metric"><small>u_opt</small><strong>${uOpt.toFixed(1)} cm/s</strong></div>
          </div>
        </div>
      `;

      container.querySelectorAll("[data-col]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.col = btn.dataset.col;
          const col = columns[state.col];
          state.u = Math.min(uMax, Math.max(uMin, Number(Math.sqrt(col.B / col.C).toFixed(1))));
          render();
        });
      });

      const optBtn = container.querySelector("#vd-opt-btn");
      if (optBtn) {
        optBtn.addEventListener("click", () => {
          const col = columns[state.col];
          state.u = Math.min(uMax, Math.max(uMin, Number(Math.sqrt(col.B / col.C).toFixed(1))));
          render();
        });
      }

      const slider = container.querySelector("#vd-slider");
      if (slider) {
        slider.addEventListener("input", () => {
          state.u = Number(slider.value) / 10;
          const col = columns[state.col];
          const uOptNow = Math.sqrt(col.B / col.C);
          const Hnow = col.A + col.B / state.u + col.C * state.u;
          const nNow = Math.round(150000 / Hnow);
          const dx = toX(state.u).toFixed(1);
          const dy = toY(Hnow).toFixed(1);

          const dot = container.querySelector("#vd-dot");
          const vline = container.querySelector("#vd-vline");
          if (dot) {
            dot.setAttribute("cx", dx);
            dot.setAttribute("cy", dy);
          }
          if (vline) {
            vline.setAttribute("x1", dx);
            vline.setAttribute("x2", dx);
            vline.setAttribute("y1", dy);
          }
          const uEl = container.querySelector("#vd-u");
          const hEl = container.querySelector("#vd-h");
          const nEl = container.querySelector("#vd-n");
          const regEl = container.querySelector("#vd-regime");
          if (uEl) uEl.textContent = state.u.toFixed(1);
          if (hEl) hEl.textContent = `${Hnow.toFixed(2)} µm`;
          if (nEl) nEl.textContent = nNow.toLocaleString();
          if (regEl) {
            if (state.u < uOptNow * 0.72) {
              regEl.textContent = "B/u diffusion";
              regEl.className = "w-badge w-badge-warn";
            } else if (state.u > uOptNow * 1.38) {
              regEl.textContent = "C·u mass transfer";
              regEl.className = "w-badge w-badge-err";
            } else {
              regEl.textContent = "Optimal zone";
              regEl.className = "w-badge w-badge-ok";
            }
          }
        });
      }
    }

    render();
  }

  /* =========================================================================
     WIDGET 4: deputy — Permission Policy & Budget Sandbox
     ========================================================================= */
  function mountDeputy(container) {
    const MAX_COST = 0.25;
    const tools = [
      { id: "read", label: 'read_csv()', call: 'read_csv("sec_runs.csv")', kind: "read", cost: 0.03 },
      { id: "write", label: 'write_file()', call: 'write_file("report.qmd")', kind: "write", cost: 0.06 },
      { id: "bash", label: 'bash()', call: 'bash("quarto render")', kind: "bash", cost: 0.08 }
    ];

    const state = {
      allowWrite: false,
      allowBash: false,
      approvalHook: true,
      spent: 0.03,
      pending: null,
      status: { tone: "ok", tag: "READY", msg: "Readonly policy active. Click a tool call to test it." }
    };

    function handleTool(tool) {
      if (state.spent + tool.cost > MAX_COST + 0.0001) {
        state.pending = null;
        state.status = {
          tone: "err",
          tag: "CAP REACHED",
          msg: `Halted ${tool.call}: would exceed $${MAX_COST.toFixed(2)} limit.`
        };
        render();
        return;
      }

      if (tool.kind === "write" && !state.allowWrite) {
        state.pending = null;
        state.status = {
          tone: "err",
          tag: "DENIED",
          msg: `Blocked ${tool.call}: writes disabled by permissions.`
        };
        render();
        return;
      }

      if (tool.kind === "bash" && !state.allowBash) {
        state.pending = null;
        state.status = {
          tone: "err",
          tag: "DENIED",
          msg: `Blocked ${tool.call}: shell execution disabled.`
        };
        render();
        return;
      }

      if ((tool.kind === "write" || tool.kind === "bash") && state.approvalHook) {
        state.pending = tool;
        state.status = {
          tone: "warn",
          tag: "PAUSED",
          msg: `Approval hook intercepted ${tool.call}.`
        };
        render();
        return;
      }

      state.pending = null;
      state.spent = Number((state.spent + tool.cost).toFixed(2));
      state.status = {
        tone: "ok",
        tag: "ALLOWED",
        msg: `Ran ${tool.call} (+$${tool.cost.toFixed(2)}).`
      };
      render();
    }

    function render() {
      const pct = Math.min(100, (state.spent / MAX_COST) * 100);
      const fillColor = pct >= 95 ? "var(--c-copper)" : pct >= 70 ? "var(--c-ochre)" : "var(--c-pine)";
      const badgeCls =
        state.status.tone === "ok"
          ? "w-badge-ok"
          : state.status.tone === "warn"
            ? "w-badge-warn"
            : "w-badge-err";

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-ochre);">
          <div class="w-row">
            <label class="w-toggle"><input id="dep-w" type="checkbox" ${state.allowWrite ? "checked" : ""}/> Writes</label>
            <label class="w-toggle"><input id="dep-b" type="checkbox" ${state.allowBash ? "checked" : ""}/> Bash</label>
            <label class="w-toggle"><input id="dep-h" type="checkbox" ${state.approvalHook ? "checked" : ""}/> Approval hook</label>
          </div>

          <div class="w-stack" style="gap:0.28rem;">
            <div class="w-row">
              <span>Budget: <strong style="color:var(--s-ink);">$${state.spent.toFixed(2)} / $${MAX_COST.toFixed(2)}</strong></span>
              <button type="button" id="dep-reset" class="w-btn is-ghost" style="padding:0.1rem 0.42rem;">Reset</button>
            </div>
            <div class="w-meter"><div class="w-meter-fill" style="width:${pct.toFixed(0)}%; background:${fillColor};"></div></div>
          </div>

          <div class="w-pills">
            ${tools
              .map(
                (t) =>
                  `<button type="button" class="w-btn" data-tool="${t.id}">${t.label} <span style="opacity:0.65;">$${t.cost.toFixed(2)}</span></button>`
              )
              .join("")}
          </div>

          ${
            state.pending
              ? `
            <div class="w-approval-bar">
              <span>Approve <strong>${state.pending.call}</strong>?</span>
              <span class="w-pills">
                <button type="button" id="dep-approve" class="w-btn is-solid" style="--w-accent: var(--c-pine);">Approve</button>
                <button type="button" id="dep-deny" class="w-btn">Deny</button>
              </span>
            </div>`
              : `
            <div class="w-trace" style="display:flex; align-items:center; gap:0.5rem;">
              <span class="w-badge ${badgeCls}">${state.status.tag}</span>
              <span>${state.status.msg}</span>
            </div>`
          }
        </div>
      `;

      container.querySelector("#dep-w")?.addEventListener("change", (e) => {
        state.allowWrite = e.target.checked;
        state.pending = null;
        render();
      });
      container.querySelector("#dep-b")?.addEventListener("change", (e) => {
        state.allowBash = e.target.checked;
        state.pending = null;
        render();
      });
      container.querySelector("#dep-h")?.addEventListener("change", (e) => {
        state.approvalHook = e.target.checked;
        state.pending = null;
        render();
      });
      container.querySelector("#dep-reset")?.addEventListener("click", () => {
        state.spent = 0;
        state.pending = null;
        state.status = { tone: "ok", tag: "RESET", msg: "Usage budget cleared to $0.00." };
        render();
      });

      container.querySelectorAll("[data-tool]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const tool = tools.find((t) => t.id === btn.dataset.tool);
          if (tool) handleTool(tool);
        });
      });

      container.querySelector("#dep-approve")?.addEventListener("click", () => {
        if (!state.pending) return;
        const t = state.pending;
        state.spent = Number((state.spent + t.cost).toFixed(2));
        state.pending = null;
        state.status = { tone: "ok", tag: "APPROVED", msg: `Signed off on ${t.call} (+$${t.cost.toFixed(2)}).` };
        render();
      });

      container.querySelector("#dep-deny")?.addEventListener("click", () => {
        if (!state.pending) return;
        const t = state.pending;
        state.pending = null;
        state.status = { tone: "err", tag: "REJECTED", msg: `Human reviewer rejected ${t.call}.` };
        render();
      });
    }

    render();
  }

  /* =========================================================================
     WIDGET 5: dsprrr — Signature Optimization Stepper
     ========================================================================= */
  function mountDsprrr(container) {
    const passes = [
      {
        label: "Zero-shot",
        acc: 0.5,
        summary: "No demos · raw signature prompt",
        preds: [
          { note: "Tm 133°C, d = 0.96", truth: "PE", pred: "PE", ok: true },
          { note: "CH3 bend 1376 cm⁻¹", truth: "PP", pred: "PE", ok: false },
          { note: "C=O 1715 cm⁻¹", truth: "PET", pred: "PET", ok: true },
          { note: "isotactic Tm 165°C", truth: "PP", pred: "PET", ok: false }
        ]
      },
      {
        label: "Few-shot (4)",
        acc: 0.75,
        summary: "4 typed demos compiled from train_set",
        preds: [
          { note: "Tm 133°C, d = 0.96", truth: "PE", pred: "PE", ok: true },
          { note: "CH3 bend 1376 cm⁻¹", truth: "PP", pred: "PP", ok: true },
          { note: "C=O 1715 cm⁻¹", truth: "PET", pred: "PET", ok: true },
          { note: "isotactic Tm 165°C", truth: "PP", pred: "PE", ok: false }
        ]
      },
      {
        label: "MIPROv2",
        acc: 1.0,
        summary: "Instruction + 4 demos tuned on metric = accuracy",
        preds: [
          { note: "Tm 133°C, d = 0.96", truth: "PE", pred: "PE", ok: true },
          { note: "CH3 bend 1376 cm⁻¹", truth: "PP", pred: "PP", ok: true },
          { note: "C=O 1715 cm⁻¹", truth: "PET", pred: "PET", ok: true },
          { note: "isotactic Tm 165°C", truth: "PP", pred: "PP", ok: true }
        ]
      }
    ];

    const state = { pass: 0 };

    function render() {
      const p = passes[state.pass];
      const pct = Math.round(p.acc * 100);
      const barCol = pct === 100 ? "var(--c-pine)" : pct >= 75 ? "var(--c-ochre)" : "var(--c-copper)";

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-ochre);">
          <div class="w-row">
            <div class="w-pills">
              ${passes
                .map(
                  (item, idx) =>
                    `<button type="button" class="w-pill ${state.pass === idx ? "is-on" : ""}" data-pass="${idx}">${item.label}</button>`
                )
                .join("")}
            </div>
            <button type="button" id="dsp-next" class="w-btn is-solid">Step →</button>
          </div>

          <div class="w-stack" style="gap:0.25rem;">
            <div class="w-row">
              <span>${p.summary}</span>
              <strong style="color:${barCol};">acc = ${p.acc.toFixed(2)}</strong>
            </div>
            <div class="w-meter"><div class="w-meter-fill" style="width:${pct}%; background:${barCol};"></div></div>
          </div>

          <div class="w-eval-grid">
            ${p.preds
              .map(
                (r) => `
              <div class="w-eval-card ${r.ok ? "is-pass" : "is-fail"}">
                <span class="w-eval-note" title="${r.note}">${r.note}</span>
                <div class="w-eval-res">
                  <span>→ ${r.pred}</span>
                  <span style="color:${r.ok ? "var(--c-pine)" : "var(--c-copper)"};">${r.ok ? "✓" : `✗ (${r.truth})`}</span>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      `;

      container.querySelectorAll("[data-pass]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.pass = Number(btn.dataset.pass);
          render();
        });
      });

      container.querySelector("#dsp-next")?.addEventListener("click", () => {
        state.pass = (state.pass + 1) % passes.length;
        render();
      });
    }

    render();
  }

  /* =========================================================================
     WIDGET 6: frontier (tempest · scans · graft) — 3-Repo Interactive Workbench
     ========================================================================= */
  function mountFrontier(container) {
    const repoMeta = {
      tempest: {
        code: 'library(tempest)\nreport <- storm_research("Polymer SEC light scattering")',
        github: "https://github.com/JamesHWade/tempest",
        docs: "https://jameshwade.github.io/tempest/"
      },
      scans: {
        code: 'library(scans)\ntraj <- read_trajectories("runs/") |> score_steps()',
        github: "https://github.com/JamesHWade/scans",
        docs: "https://jameshwade.github.io/scans/"
      },
      graft: {
        code: 'library(graft)\nmem <- graft_memory(".") |> review_artifacts()',
        github: "https://github.com/JamesHWade/graft",
        docs: "https://jameshwade.github.io/graft/"
      }
    };

    const state = {
      tab: "tempest",
      personas: { chem: true, stats: true, skeptic: false },
      scanStep: 1,
      graftItems: [
        { id: "als", text: "ALS baseline lambda = 1e5", reviewed: true },
        { id: "brand", text: "Daylight + Star Chart tokens", reviewed: true },
        { id: "employer", text: "Keep employer unnamed", reviewed: false }
      ]
    };

    const scanSteps = [
      { id: 0, name: "1. plan", ms: "310ms", tok: "420 tok", verdict: "clean", cls: "w-badge-ok", detail: "Decomposed prompt into 3 data checks." },
      { id: 1, name: "2. read_sec", ms: "640ms", tok: "880 tok", verdict: "1 retry", cls: "w-badge-warn", detail: "Column rename caught on retry; schema validated." },
      { id: 2, name: "3. fit_pls", ms: "920ms", tok: "610 tok", verdict: "clean", cls: "w-badge-ok", detail: "5-fold CV selected 4 components (RMSE 0.04)." },
      { id: 3, name: "4. report", ms: "480ms", tok: "510 tok", verdict: "verified", cls: "w-badge-info", detail: "All numerical claims grounded in tool output." }
    ];

    function syncSheetCodeAndLinks() {
      const m = repoMeta[state.tab];
      if (!m) return;
      currentCode = m.code;
      const codeEl = document.getElementById("sheet-code");
      if (codeEl) codeEl.textContent = m.code;
      const ext = document.getElementById("sheet-ext-links");
      if (ext) {
        ext.innerHTML = `<a href="${m.github}" target="_blank" rel="noopener">GitHub ↗</a><a href="${m.docs}" target="_blank" rel="noopener">Docs ↗</a>`;
      }
    }

    function render() {
      syncSheetCodeAndLinks();
      let bodyHtml = "";

      if (state.tab === "tempest") {
        const sections = [];
        if (state.personas.chem) sections.push("1. Multi-angle light scattering & dn/dc calibration");
        if (state.personas.stats) sections.push("2. Error propagation across narrow-standard curves");
        if (state.personas.skeptic) sections.push("3. Failure modes: column shear & aggregation bias");
        const cites = sections.length * 4;
        bodyHtml = `
          <div class="w-row">
            <span>Toggle STORM perspectives:</span>
            <span><strong style="color:var(--s-ink);">${cites}</strong> cited refs</span>
          </div>
          <div class="w-pills">
            <button type="button" class="w-pill w-pill-subtle ${state.personas.chem ? "is-on" : ""}" data-persona="chem">Chemist</button>
            <button type="button" class="w-pill w-pill-subtle ${state.personas.stats ? "is-on" : ""}" data-persona="stats">Statistician</button>
            <button type="button" class="w-pill w-pill-subtle ${state.personas.skeptic ? "is-on" : ""}" data-persona="skeptic">Skeptic</button>
          </div>
          <div class="w-list">
            ${
              sections.length
                ? sections.map((s) => `<div class="w-list-item"><span>${s}</span><span class="w-badge w-badge-ok">Cited</span></div>`).join("")
                : `<div class="w-list-item is-dim"><span>Enable a perspective above to draft an outline.</span></div>`
            }
          </div>
        `;
      } else if (state.tab === "scans") {
        const s = scanSteps[state.scanStep];
        bodyHtml = `
          <div class="w-step-strip">
            ${scanSteps
              .map(
                (st) =>
                  `<button type="button" class="w-step-chip ${state.scanStep === st.id ? "is-on" : ""}" data-scan="${st.id}">${st.name}</button>`
              )
              .join("")}
          </div>
          <div class="w-trace">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.4rem; margin-bottom:0.25rem;">
              <span class="w-badge ${s.cls}">${s.verdict}</span>
              <span style="opacity:0.8;">${s.ms} · ${s.tok}</span>
            </div>
            <div>${s.detail}</div>
          </div>
        `;
      } else {
        const revCount = state.graftItems.filter((i) => i.reviewed).length;
        bodyHtml = `
          <div class="w-row">
            <span>Click an artifact to toggle review:</span>
            <span><strong style="color:var(--s-ink);">${revCount}/${state.graftItems.length}</strong> pinned</span>
          </div>
          <div class="w-list">
            ${state.graftItems
              .map(
                (item) => `
              <button type="button" class="w-list-item" data-graft="${item.id}" style="cursor:pointer; text-align:left; width:100%;">
                <span>${item.text}</span>
                <span class="w-badge ${item.reviewed ? "w-badge-ok" : "w-badge-warn"}">${item.reviewed ? "Reviewed" : "Draft"}</span>
              </button>`
              )
              .join("")}
          </div>
        `;
      }

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-copper);">
          <div class="w-pills">
            <button type="button" class="w-pill ${state.tab === "tempest" ? "is-on" : ""}" data-ftab="tempest">tempest</button>
            <button type="button" class="w-pill ${state.tab === "scans" ? "is-on" : ""}" data-ftab="scans">scans</button>
            <button type="button" class="w-pill ${state.tab === "graft" ? "is-on" : ""}" data-ftab="graft">graft</button>
          </div>
          ${bodyHtml}
        </div>
      `;

      container.querySelectorAll("[data-ftab]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.tab = btn.dataset.ftab;
          render();
        });
      });
      container.querySelectorAll("[data-persona]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const p = btn.dataset.persona;
          state.personas[p] = !state.personas[p];
          render();
        });
      });
      container.querySelectorAll("[data-scan]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.scanStep = Number(btn.dataset.scan);
          render();
        });
      });
      container.querySelectorAll("[data-graft]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const item = state.graftItems.find((i) => i.id === btn.dataset.graft);
          if (item) item.reviewed = !item.reviewed;
          render();
        });
      });
    }

    render();
  }

  /* =========================================================================
     WIDGET 7: rill & suppose — Dual Micro-Lab
     ========================================================================= */
  function mountRillSuppose(container) {
    const state = {
      tab: "rill",
      feeds: [
        { id: "ellmer", title: "ellmer streaming tool updates", score: "96%", saved: true },
        { id: "sec", title: "GPC light-scattering tutorial", score: "91%", saved: true },
        { id: "q11", title: "Quarto 1.11 brand.yml tips", score: "84%", saved: false }
      ],
      briefText: "Saved 2 items: ellmer tool streaming + GPC light-scattering notes.",
      beliefs: { wasm: true, staticHost: true }
    };

    function syncCode() {
      const code =
        state.tab === "rill"
          ? '# rill: agent-native feed triage in Shiny\nrill::run_reader(feeds = "feeds.yml")'
          : '# suppose: inspect assumptions and consequences\nsuppose::workbench("architecture.yml")';
      currentCode = code;
      const codeEl = document.getElementById("sheet-code");
      if (codeEl) codeEl.textContent = code;
    }

    function render() {
      syncCode();
      let bodyHtml = "";

      if (state.tab === "rill") {
        const kept = state.feeds.filter((f) => f.saved);
        bodyHtml = `
          <div class="w-list">
            ${state.feeds
              .map(
                (f) => `
              <div class="w-list-item ${f.saved ? "is-selected" : "is-dim"}">
                <span>${f.title} <span style="opacity:0.65;">(${f.score})</span></span>
                <button type="button" class="w-btn ${f.saved ? "is-solid" : ""}" data-feed="${f.id}" style="padding:0.12rem 0.42rem;">${f.saved ? "Kept" : "Keep"}</button>
              </div>`
              )
              .join("")}
          </div>
          <div class="w-trace">
            <code>Digest (${kept.length}): ${kept.length ? kept.map((k) => k.title.split(" ")[0]).join(" + ") + " queued for reading." : "Queue empty. Keep a feed item above."}</code>
          </div>
        `;
      } else {
        const wasm = state.beliefs.wasm;
        const stat = state.beliefs.staticHost;
        const coopNeeded = wasm;
        const zeroServer = wasm && stat;
        const offlineOk = wasm;
        bodyHtml = `
          <div class="w-row">
            <label class="w-toggle"><input id="sup-wasm" type="checkbox" ${wasm ? "checked" : ""}/> Client-side Wasm</label>
            <label class="w-toggle"><input id="sup-stat" type="checkbox" ${stat ? "checked" : ""}/> Static Netlify host</label>
          </div>
          <div class="w-metrics">
            <div class="w-metric">
              <small>Server cost</small>
              <strong style="color:${zeroServer ? "var(--c-pine)" : "var(--c-ochre)"};">${zeroServer ? "$0 static" : "Needs host"}</strong>
            </div>
            <div class="w-metric">
              <small>COOP/COEP</small>
              <strong style="color:${coopNeeded ? "var(--c-ochre)" : "var(--c-pine)"};">${coopNeeded ? "Required" : "Optional"}</strong>
            </div>
            <div class="w-metric">
              <small>Offline run</small>
              <strong style="color:${offlineOk ? "var(--c-pine)" : "var(--c-copper)"};">${offlineOk ? "Supported" : "Blocked"}</strong>
            </div>
          </div>
        `;
      }

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-lake);">
          <div class="w-pills">
            <button type="button" class="w-pill ${state.tab === "rill" ? "is-on" : ""}" data-rtab="rill">rill (Feed reader)</button>
            <button type="button" class="w-pill ${state.tab === "suppose" ? "is-on" : ""}" data-rtab="suppose">suppose (Beliefs)</button>
          </div>
          ${bodyHtml}
        </div>
      `;

      container.querySelectorAll("[data-rtab]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.tab = btn.dataset.rtab;
          render();
        });
      });

      container.querySelectorAll("[data-feed]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const f = state.feeds.find((x) => x.id === btn.dataset.feed);
          if (f) f.saved = !f.saved;
          render();
        });
      });

      container.querySelector("#sup-wasm")?.addEventListener("change", (e) => {
        state.beliefs.wasm = e.target.checked;
        render();
      });

      container.querySelector("#sup-stat")?.addEventListener("change", (e) => {
        state.beliefs.staticHost = e.target.checked;
        render();
      });
    }

    render();
  }

  /* =========================================================================
     WIDGET 8: menagerie — Interactive Mid-Michigan Roll Call
     ========================================================================= */
  function mountMenagerie(container) {
    const crew = [
      { id: "d1", kind: "dog", label: "Dog 1", idle: "Patrolling the porch for delivery trucks.", treat: "Caught the treat mid-air." },
      { id: "d2", kind: "dog", label: "Dog 2", idle: "Supervising from the rug under the desk.", treat: "Tail wagging at 4 Hz." },
      { id: "c1", kind: "cat", label: "Cat 1", idle: "Sitting directly on the Escape key.", treat: "Pretending not to notice, edging closer." },
      { id: "c2", kind: "cat", label: "Cat 2", idle: "Sunbathing on a warm stack of notebooks.", treat: "Teleported from the upstairs windowsill." },
      { id: "c3", kind: "cat", label: "Cat 3", idle: "Inspecting an empty cardboard box.", treat: "Claimed two treats and returned to box." },
      { id: "c4", kind: "cat", label: "Cat 4", idle: "Napping on top of the Wi-Fi router.", treat: "Stretched once, accepted tribute." },
      { id: "c5", kind: "cat", label: "Cat 5", idle: "Chattering at a Mid-Michigan squirrel.", treat: "Briefly paused squirrel watch." }
    ];

    const dogSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10 L3 14 L6 14 L7 18 H17 L18 14 L21 14 L19 10 C19 7 16.5 5 12 5 C7.5 5 5 7 5 10 Z"/><circle cx="9.5" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="11" r="1" fill="currentColor" stroke="none"/><path d="M10.5 14 Q12 15.5 13.5 14"/></svg>`;
    const catSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10 L5 5 L9.5 8 H14.5 L19 5 L18 10 C19 12 18.5 17 12 18 C5.5 17 5 12 6 10 Z"/><circle cx="9.5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M11 14.5 L12 15.5 L13 14.5"/></svg>`;

    const state = { selected: "d1", treats: 0, hopping: false };

    function render() {
      const pet = crew.find((c) => c.id === state.selected) || crew[0];
      const msg = state.treats > 0 ? `${pet.label}: ${pet.treat}` : `${pet.label}: ${pet.idle}`;

      container.innerHTML = `
        <div class="w-stack" style="--w-accent: var(--c-plum);">
          <div class="w-critter-grid">
            ${crew
              .map(
                (c, i) => `
              <button type="button" class="w-critter ${state.selected === c.id ? "is-active" : ""} ${state.hopping ? "is-hopping" : ""}" style="${state.hopping ? `animation-delay:${i * 35}ms;` : ""}" data-pet="${c.id}" aria-label="${c.label}">
                ${c.kind === "dog" ? dogSvg : catSvg}
                <span>${c.label.replace(" ", "")}</span>
              </button>`
              )
              .join("")}
          </div>
          <div class="w-row">
            <span>Treats tossed: <strong style="color:var(--s-ink);">${state.treats}</strong></span>
            <button type="button" id="w-pet-btn" class="w-btn is-solid">Toss Treat</button>
          </div>
          <div class="w-trace">${msg}</div>
        </div>
      `;

      container.querySelectorAll("[data-pet]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.selected = btn.dataset.pet;
          state.hopping = false;
          render();
        });
      });

      container.querySelector("#w-pet-btn")?.addEventListener("click", () => {
        state.treats += 1;
        state.selected = crew[state.treats % crew.length].id;
        state.hopping = true;
        render();
      });
    }

    render();
  }

  function mountWidget(key, container) {
    if (!container) return;
    switch (key) {
      case "shinymcp":
        mountShinyMcp(container);
        break;
      case "measure":
        mountMeasure(container);
        break;
      case "vandeemter":
        mountVanDeemter(container);
        break;
      case "deputy":
        mountDeputy(container);
        break;
      case "dsprrr":
        mountDsprrr(container);
        break;
      case "frontier":
        mountFrontier(container);
        break;
      case "rill":
        mountRillSuppose(container);
        break;
      case "menagerie":
        mountMenagerie(container);
        break;
      default:
        break;
    }
  }

  /* =========================================================================
     MAP COMPASS, ROUTES, BEARING & LANDMARK SELECTION
     ========================================================================= */
  function bearingInfo(px, py) {
    const dx = px - COMPASS_ORIGIN.x;
    const dy = py - COMPASS_ORIGIN.y;
    const rad = Math.atan2(dy, dx);
    // 0 deg = North (up), clockwise
    const deg = ((rad * 180) / Math.PI + 90 + 360) % 360;
    const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const dir = dirs[Math.round(deg / 45) % 8];
    const degStr = String(Math.round(deg)).padStart(3, "0");
    return { deg, label: `${degStr}° ${dir}` };
  }

  function selectLandmark(key, animate = true) {
    const d = landmarks[key];
    if (!d) return;
    currentKey = key;
    currentCode = d.code;

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

    const copyBtn = document.getElementById("sheet-copy-btn");
    if (copyBtn) copyBtn.textContent = "Copy";

    const wBody = document.getElementById("sheet-widget-body");
    mountWidget(key, wBody);

    const cta = document.getElementById("sheet-cta");
    if (cta) {
      cta.textContent = d.ctaText;
      cta.setAttribute("href", d.ctaHref);
      cta.style.color = cVar;
    }

    const ext = document.getElementById("sheet-ext-links");
    if (ext && key !== "frontier") {
      let html = `<a href="${d.github}" target="_blank" rel="noopener">GitHub ↗</a>`;
      if (d.docs) {
        html += `<a href="${d.docs}" target="_blank" rel="noopener">Docs ↗</a>`;
      }
      ext.innerHTML = html;
    }

    // Smooth sheet body entrance
    const sheetBody = document.getElementById("sheet-body");
    if (sheetBody && animate) {
      sheetBody.classList.remove("is-switching");
      void sheetBody.offsetWidth;
      sheetBody.classList.add("is-switching");
    }

    // Update pins & compass rose bearing
    let activePinEl = null;
    document.querySelectorAll(".atlas-pin").forEach((pinEl) => {
      const active = pinEl.dataset.pin === key;
      pinEl.classList.toggle("is-active", active);
      pinEl.setAttribute("aria-pressed", active ? "true" : "false");
      if (active) activePinEl = pinEl;
    });

    if (activePinEl) {
      const px = Number(activePinEl.dataset.x || 418);
      const py = Number(activePinEl.dataset.y || 86);
      const b = bearingInfo(px, py);

      const needle = document.getElementById("atlas-compass-needle");
      if (needle) {
        needle.style.transform = `rotate(${b.deg.toFixed(1)}deg)`;
      }

      const bDot = document.getElementById("atlas-bearing-dot");
      if (bDot) bDot.style.backgroundColor = cVar;
      setText("atlas-bearing-text", `Bearing ${b.label} · ${d.region}`);
    }

    // Highlight connected inter-island survey routes
    document.querySelectorAll(".atlas-route").forEach((route) => {
      const connected = route.dataset.from === key || route.dataset.to === key;
      route.classList.toggle("is-connected", connected);
      route.style.stroke = connected ? cVar : "";
    });

    // Update bottom tabs and counter
    const idx = ORDER.indexOf(key);
    setText("atlas-counter", `${idx >= 0 ? idx + 1 : 1}/${ORDER.length}`);

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

  function wireLegendHighlight() {
    const frame = document.getElementById("atlas-svg-frame");
    const chips = document.querySelectorAll(".legend-chip");
    if (!frame || !chips.length) return;

    const firstByRegion = {
      chem: "measure",
      shiny: "shinymcp",
      agents: "deputy",
      home: "menagerie"
    };

    const setRegionFocus = (regionKey) => {
      frame.classList.toggle("is-region-focused", Boolean(regionKey));
      frame.querySelectorAll(".atlas-region, .atlas-pin").forEach((el) => {
        el.classList.toggle("is-region-match", Boolean(regionKey) && el.dataset.region === regionKey);
      });
      chips.forEach((chip) => {
        chip.classList.toggle("is-highlighted", Boolean(regionKey) && chip.dataset.legendRegion === regionKey);
      });
    };

    chips.forEach((chip) => {
      const region = chip.dataset.legendRegion;
      chip.addEventListener("mouseenter", () => setRegionFocus(region));
      chip.addEventListener("mouseleave", () => setRegionFocus(null));
      chip.addEventListener("focus", () => setRegionFocus(region));
      chip.addEventListener("blur", () => setRegionFocus(null));
      chip.addEventListener("click", () => {
        const target = firstByRegion[region];
        if (target) selectLandmark(target);
      });
    });
  }

  function initAtlas() {
    const workbench = document.getElementById("atlas-workbench");
    if (!workbench) return;

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

    const step = (delta) => {
      const idx = ORDER.indexOf(currentKey);
      const next = ORDER[(idx + delta + ORDER.length) % ORDER.length];
      selectLandmark(next);
    };

    document.getElementById("atlas-prev")?.addEventListener("click", () => step(-1));
    document.getElementById("atlas-next")?.addEventListener("click", () => step(1));

    // Keyboard arrow cycling when focused on map pins or tab buttons
    workbench.addEventListener("keydown", (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.target?.closest(".atlas-map-pane")) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          step(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          step(-1);
        }
      }
    });

    // Copy snippet button
    const copyBtn = document.getElementById("sheet-copy-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(currentCode);
          copyBtn.textContent = "Copied";
          clearTimeout(copyTimer);
          copyTimer = setTimeout(() => {
            copyBtn.textContent = "Copy";
          }, 1500);
        } catch {
          copyBtn.textContent = "Copied";
        }
      });
    }

    document.querySelectorAll("[data-focus-landmark]").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const lm = card.getAttribute("data-focus-landmark");
        if (lm && landmarks[lm] && lm !== currentKey) selectLandmark(lm);
      });
    });

    wireLegendHighlight();
    selectLandmark(currentKey, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAtlas);
  } else {
    initAtlas();
  }
})();
