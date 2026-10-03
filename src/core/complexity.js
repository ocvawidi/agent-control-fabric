export function assessComplexity(proposal, budget) {
  const exceeded = [];
  if (proposal.newDependencies > budget.maxNewDependencies) exceeded.push(`new dependencies ${proposal.newDependencies} > ${budget.maxNewDependencies}`);
  if (proposal.changedFiles > budget.preferredChangedFiles) exceeded.push(`changed files ${proposal.changedFiles} > preferred ${budget.preferredChangedFiles}`);
  if (proposal.newAbstractions > budget.maxNewAbstractions) exceeded.push(`new abstractions ${proposal.newAbstractions} > ${budget.maxNewAbstractions}`);
  const hasJustification = Boolean(proposal.justification?.trim());
  const pass = exceeded.length === 0 || (hasJustification && budget.requireJustificationAboveBudget);
  return {
    pass,
    reasons: pass ? ["proposal fits budget or has a concrete justification"] : ["proposal exceeds the complexity budget without sufficient justification"],
    exceeded
  };
}
