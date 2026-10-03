# Security

ACF is a prototype orchestration layer. Do not treat its prompt rules as a security boundary by themselves.

Security-sensitive enforcement should live outside the LLM where practical: tool permissions, sandboxing, credentials, policy checks, and human approval.

Do not place real secrets, credentials, or private customer material in benchmark artifacts.
