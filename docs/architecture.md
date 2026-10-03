# ACF architecture

```text
User
  |
  v
Primary agent
  |
  v
Task router -----> Skill router
  |                    |
  |                    +--> domain skills
  |
  +--> escalation?
         |
         +--> direct
         +--> specialist
         +--> council ----> reviewers ----> synthesis
                               |
                               v
                         complexity gate
                               |
                               v
                          execution
                               |
                               v
                         verification
                               |
                               v
                          quality gates
                               |
                               v
                         delivery gate
                               |
                               v
                             user
```

State/artifacts sit beside the pipeline so work can survive context resets.

The core intentionally keeps deterministic decisions out of the LLM wherever feasible. The LLM can classify or recommend, but policy code owns the final gate semantics.
