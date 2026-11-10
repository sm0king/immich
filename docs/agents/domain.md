# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

Layout: **multi-context**. This is a pnpm workspace with genuinely separate products (server API, web client, mobile app, CLI, machine learning service), so domain language is scoped per context.

## Before exploring, read these

- **`GLOSSARY-MAP.md`** at the repo root: it points at one `GLOSSARY.md` per context. Read each one relevant to the topic.
- **`docs/adr/`**: system-wide decisions.
- **`<context>/docs/adr/`**: context-scoped decisions, for the context you're about to work in.

If any of these files don't exist, **proceed silently**. Don't flag their absence; don't suggest creating them upfront. The `/domain-modeling` skill (reached via `/grill-with-docs` and `/improve-codebase-architecture`) creates them lazily when terms or decisions actually get resolved.

## File structure

```
/
├── GLOSSARY-MAP.md
├── docs/
│   ├── adr/                     ← system-wide decisions
│   └── agents/                  ← this config (not published)
├── server/
│   ├── GLOSSARY.md
│   └── docs/adr/                ← server-specific decisions
├── web/
│   ├── GLOSSARY.md
│   └── docs/adr/
├── mobile/
│   ├── GLOSSARY.md
│   └── docs/adr/
├── cli/
│   ├── GLOSSARY.md
│   └── docs/adr/
└── machine-learning/
    ├── GLOSSARY.md
    └── docs/adr/
```

Contexts to scope by: `server`, `web`, `mobile`, `cli`, `machine-learning`. `e2e`, `open-api`, `deployment`, `docker` and `plugins` are infrastructure — attach their decisions to the context they constrain, or to `docs/adr/` when they span all of them.

## Caution: `docs/` is the documentation website

`docs/` is a Docusaurus package whose content lives in `docs/docs/` (published to docs.immich.app). `docs/agents/` and `docs/adr/` sit **outside** that content path, so they are not published. Two rules follow:

- Never create agent or ADR files under `docs/docs/` — they'd appear on the public site.
- The `docs` package's `pnpm format` (`prettier --check .`) covers everything under `docs/`, so keep files there prettier-clean.

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in the relevant `GLOSSARY.md`. Don't drift to synonyms the glossary explicitly avoids. When a term exists in more than one context, prefer the glossary of the context you're editing and say which context you mean if the two disagree.

If the concept you need isn't in the glossary yet, that's a signal: either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 (album owner migration), but worth reopening because…_
