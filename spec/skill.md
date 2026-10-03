# Skill contract

A skill is a bounded capability module, not a permanent prompt dump.

Required metadata:

- `name`
- `description`
- trigger conditions
- expected inputs
- expected outputs
- allowed roles
- quality checks
- handoff/artifact behavior

Skills should load progressively: index first, detailed references only when relevant.
