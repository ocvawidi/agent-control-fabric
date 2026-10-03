# Artifact contract

Artifacts are the durable interface between workflow stages.

An artifact should have:

- stable id
- kind
- path or content location
- producer
- inputs
- status
- optional integrity hash
- provenance/evidence references

Chat history may be used as convenience context, but it is not the workflow source of truth.
