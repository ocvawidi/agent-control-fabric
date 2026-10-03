export function evaluateGate(id, facts = {}) {
  const pass = (key) => ({ id, status: facts[key] === true ? "pass" : "fail", evidence: facts[key] === true ? [`${key}=true`] : [] });
  switch (id) {
    case "correctness": return { ...pass("testsPassed"), details: ["code changes need executable verification"] };
    case "evidence": return { ...pass("evidencePresent"), details: ["completion claims need inspectable evidence"] };
    case "security": return { id, status: facts.securityReviewed === true ? "pass" : "blocked", evidence: facts.securityReviewed === true ? ["securityReviewed=true"] : [], details: ["security-sensitive work requires explicit review"] };
    case "complexity": return { ...pass("complexityPass"), details: ["unnecessary complexity should not reach delivery"] };
    case "ui": return { ...pass("uiReviewed"), details: ["UI work requires responsive and interaction review"] };
    case "writing": return { ...pass("writingReviewed"), details: ["writing output requires the active writing quality review"] };
    default: return { id, status: "skip", evidence: [], details: ["unknown gate"] };
  }
}
