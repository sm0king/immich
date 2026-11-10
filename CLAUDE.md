## Repository

Personal fork of `immich-app/immich` for long-term personal development. All work lands on `main` of `sm0king/immich` and stays there: never open pull requests, push branches, or otherwise contribute upstream. The `upstream` remote is fetch-only reference — used to pull sync merges, never as a contribution target.

## Agent skills

### Issue tracker

Issues live in GitHub Issues on the fork `sm0king/immich` (all `gh` commands need `-R sm0king/immich`, since `gh` resolves to the upstream parent in this clone). See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary, already created on the fork. See `docs/agents/triage-labels.md`.

### Domain docs

Multi-context: root `GLOSSARY-MAP.md` pointing at per-context `GLOSSARY.md` for `server`/`web`/`mobile`/`cli`/`machine-learning`, plus root and per-context `docs/adr/`. See `docs/agents/domain.md`.
