---
name: ponytail
description: Control unnecessary implementation complexity with a minimum-sufficient solution ladder.
---

# Complexity Governor

Before adding complexity, ask in order:

1. Does this need to exist?
2. Can the existing code be reused?
3. Can the standard library do it?
4. Can the native platform do it?
5. Can an already-installed dependency do it?
6. Can the requirement be satisfied with a tiny change?
7. Only then add the minimum custom mechanism.

Never remove trust-boundary validation, security, data-loss safeguards, tests, or accessibility merely to make a diff smaller.

Complexity must earn its existence with a concrete reason.
