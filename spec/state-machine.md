# State machine

V0.1 uses this conceptual lifecycle:

`planned → running → review? → verification → quality → completed`

Exceptional paths:

`running → paused`
`running → blocked`
`verification → running` (repair loop)
`quality → running` (repair loop)
`running → failed`
