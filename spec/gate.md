# Gate contract

A gate returns a structured result:

`PASS | FAIL | SKIP | BLOCKED`

A gate must state:

- what was checked;
- what evidence supported the decision;
- what remains unresolved.

Critical failures must be resolved, explicitly accepted as risk by a human, or block delivery.
