# Triage Labels

The skills speak in terms of five canonical triage roles. This file maps those roles to the actual label strings used in this repo's issue tracker.

| Label in mattpocock/skills | Label in our tracker | Meaning                                  |
| -------------------------- | -------------------- | ---------------------------------------- |
| `needs-triage`             | `needs-triage`       | Maintainer needs to evaluate this issue  |
| `needs-info`               | `needs-info`         | Waiting on reporter for more information |
| `ready-for-agent`          | `ready-for-agent`    | Fully specified, ready for an AFK agent  |
| `ready-for-human`          | `ready-for-human`    | Requires human implementation            |
| `wontfix`                  | `wontfix`            | Will not be actioned                     |

When a skill mentions a role (e.g. "apply the AFK-ready triage label"), use the corresponding label string from this table.

## Notes for this repo

- All five labels exist on `sm0king/immich` (created by this setup). `wontfix` was already there as a GitHub default and is reused as-is.
- Always pass `-R sm0king/immich` to `gh label` / `gh issue edit`; inside this clone `gh` resolves to the upstream `immich-app/immich`, whose labels (`📱mobile`, `🗄️server`, `changelog:*`, …) are unrelated and must not be touched.
- The fork's other GitHub default labels (`bug`, `enhancement`, `question`, …) are not part of the triage vocabulary. Don't map roles onto them unless you decide to adopt them deliberately.

Edit the "Label in our tracker" column to match whatever vocabulary you actually use.
