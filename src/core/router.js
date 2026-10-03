const KEYWORDS = {
  simple: ["typo", "rename", "format", "explain", "list", "show"],
  implementation: ["implement", "fix", "refactor", "add", "build", "code", "test"],
  architecture: ["architecture", "design", "redesign", "migration", "scale", "system"],
  research: ["research", "compare", "investigate", "evidence", "literature", "sources"],
  high_risk: ["deploy", "production", "delete", "payment", "credential", "security", "release"]
};

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

export function classifyTask(input, overrides = {}) {
  const text = String(input).toLowerCase();
  let taskClass = "simple";
  if (includesAny(text, KEYWORDS.high_risk)) taskClass = "high_risk";
  else if (includesAny(text, KEYWORDS.architecture)) taskClass = "architecture";
  else if (includesAny(text, KEYWORDS.research)) taskClass = "research";
  else if (includesAny(text, KEYWORDS.simple)) taskClass = "simple";
  else if (includesAny(text, KEYWORDS.implementation)) taskClass = "implementation";

  const signals = {
    complexity: overrides.complexity ?? ({ simple: .15, implementation: .45, architecture: .75, research: .65, high_risk: .8 }[taskClass]),
    uncertainty: overrides.uncertainty ?? (taskClass === "research" ? .75 : .35),
    risk: overrides.risk ?? (taskClass === "high_risk" ? .9 : taskClass === "architecture" ? .45 : .2),
    irreversibility: overrides.irreversibility ?? (taskClass === "high_risk" ? .85 : .15),
    domainBreadth: overrides.domainBreadth ?? (taskClass === "architecture" ? .75 : .25)
  };

  const pressure = Math.max(...Object.values(signals));
  const escalation = pressure < .4 ? 0 : pressure < .55 ? 1 : pressure < .72 ? 2 : pressure < .86 ? 3 : 4;
  const council = escalation >= 3 || taskClass === "architecture" || (taskClass === "research" && signals.uncertainty >= .65);

  const recommendedRoles = council
    ? escalation >= 4
      ? ["architect", "contrarian", "verifier", "security", "maintainer"]
      : ["architect", "contrarian", "verifier"]
    : [];

  const qualityGates = ["correctness", "evidence"];
  if (["architecture", "high_risk"].includes(taskClass)) qualityGates.push("security", "complexity");
  if (/\b(ui|frontend|dashboard)\b/.test(text)) qualityGates.push("ui");
  if (/\b(write|email|report|documentation)\b/.test(text)) qualityGates.push("writing");

  return {
    taskClass,
    escalation,
    council,
    recommendedRoles,
    qualityGates: [...new Set(qualityGates)],
    signals,
    reason: [
      `task class: ${taskClass}`,
      `pressure: ${pressure.toFixed(2)}`,
      council ? "multi-perspective review is justified" : "single-agent path is sufficient"
    ]
  };
}
