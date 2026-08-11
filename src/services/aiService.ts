// Mock AI Service for the workshop demonstration

export const aiService = {
  // Demo 1: Policy Copilot
  answerPolicyQuestion: async (question: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const q = question.toLowerCase();
        if (q.includes('room rent')) {
          resolve('Based on the synthetic document, the room rent limit is capped at 1% of the sum insured per day for normal rooms, and 2% for ICU. [Page 4, Clause 3.1]');
        } else if (q.includes('exclusion')) {
          resolve('Key exclusions include: 1) Pre-existing diseases until a 24-month waiting period is completed, 2) Cosmetic surgery, 3) Maternity expenses (unless explicitly covered via an add-on). [Page 8, Section 5]');
        } else if (q.includes('waiting period')) {
          resolve('There is a standard 30-day waiting period from the policy inception date for any illness, except for accidental injuries. Specific ailments have a 24-month waiting period. [Page 6, Clause 4.2]');
        } else if (q.includes('summarize')) {
          resolve('Summary: 1. Coverage: In-patient hospitalization, pre & post hospitalization. 2. Room Rent: 1% of SI. 3. Waiting Periods: 30 days general, 24 months specific. 4. Exclusions: Cosmetic, self-inflicted injuries. 5. Claim: Cashless facility available at network hospitals.');
        } else if (q.includes('clause')) {
          resolve('This clause indicates that the policyholder must notify the insurer within 24 hours of emergency hospitalization and 48 hours prior to planned hospitalization to avail cashless benefits. This ensures the TPA can verify coverage limits beforehand.');
        } else {
          resolve('I am an AI assistant analyzing this synthetic policy document. I can help you identify limits, exclusions, or summarize clauses. Please note: I am a demonstration tool and cannot provide definitive insurance advice.');
        }
      }, 1000);
    });
  },

  // Demo 2: Claims Intelligence
  summarizeClaim: async (claimNotes: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          summary: 'Patient admitted for acute gastroenteritis. Hospitalization lasted 3 days. Total billed amount is ₹45,000.',
          documents: 'Discharge summary, final bill, pharmacy receipts are present. Indoor case papers are missing.',
          missingInfo: 'Requires indoor case papers to verify the necessity of a 3-day admission for gastroenteritis.',
          nextAction: 'Request indoor case papers from the hospital TPA desk.',
          priority: 'Medium'
        });
      }, 1200);
    });
  },

  // Demo 3: Knowledge Assistant
  searchKnowledge: async (query: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const q = query.toLowerCase();
        if (q.includes('onboard')) {
          resolve({
            answer: 'To onboard a new employee to the group health policy, HR must submit the Endorsement Data format via the Ethika Hub by the 15th of the month. Coverage typically begins from the date of joining, provided premium deposit is sufficient.',
            source: 'SOP-HR-04: Employee Enrollments',
            confidence: 94
          });
        } else if (q.includes('escalation')) {
          resolve({
            answer: 'Claims escalations should first go to the designated Account Manager. If unresolved within 48 hours, they can be escalated to the Claims Head at claims.head@ethikademo.com.',
            source: 'SOP-CLAIMS-02: Escalation Matrix',
            confidence: 98
          });
        } else {
          resolve({
            answer: 'Please ensure you are referring to the latest SOPs on the Ethika Hub. For complex queries not covered here, consult your department lead.',
            source: 'General Guidelines',
            confidence: 75
          });
        }
      }, 800);
    });
  },

  // Demo 4: Communication Copilot
  draftClientResponse: async (clientMessage: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          intent: 'Claim status follow-up / Dissatisfaction',
          priority: 'High',
          draft: 'Dear Client,\n\nI sincerely apologize for the delay in updating you on your claim status. I understand this is a stressful time.\n\nI am personally looking into claim ID #CLM-DEMO-001 with the TPA team right now. We required the indoor case papers which delayed the processing. I will provide you with a definitive update by 4:00 PM today.\n\nThank you for your patience.',
          internalNote: 'Escalate to Claims Head. Client is frustrated due to lack of communication regarding pending requirements.'
        });
      }, 1500);
    });
  },

  // Demo 5: Renewal Intelligence
  generateRenewalBrief: async (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          summary: 'Portfolio: Northstar Technologies Pvt. Ltd. (150 Employees). Premium vs Claims ratio currently stands at 112%, indicating a loss-making account for the insurer.',
          trends: 'Maternity claims have spiked by 40% this year. High frequency of small-ticket OPD consultations.',
          investigate: 'Are the OPD consultations concentrated in a specific branch/location?',
          risks: 'Insurer is likely to propose a premium loading of 15-20% at renewal due to the high claims ratio.',
          discussionPoints: '1. Propose introducing a co-pay for maternity to stabilize premiums. 2. Discuss implementing an employee wellness program targeting preventive health to reduce OPD frequency.'
        });
      }, 1800);
    });
  },

  // Prompt Lab
  improvePrompt: async (prompt: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (prompt.trim().length < 20) {
          resolve('You are a senior insurance operations analyst. Review the provided synthetic data. Summarize the core issue, identify exactly what information is missing, and recommend the next step for a human reviewer. Format your output with clear headings. Do NOT make a final approval or rejection decision.');
        } else {
          resolve(`Here is an improved version of your prompt adding role, context, and constraints:\n\n"Act as an expert insurance consultant. ${prompt} Please ensure the output is structured with bullet points. Always include a disclaimer that the final decision rests with the human underwriter."`);
        }
      }, 1000);
    });
  }
};
