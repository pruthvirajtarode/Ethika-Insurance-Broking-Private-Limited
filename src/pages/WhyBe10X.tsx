import React from 'react';
import { CompetitiveBadge } from '../components/why-be10x/CompetitiveBadge';
import { HeroStatement } from '../components/why-be10x/HeroStatement';
import { ComparisonTable } from '../components/why-be10x/ComparisonTable';
import { DifferentiatorCards } from '../components/why-be10x/DifferentiatorCards';
import { EthikaUseCases } from '../components/why-be10x/EthikaUseCases';
import { WorkshopToWorkplace } from '../components/why-be10x/WorkshopToWorkplace';
import { EmployeeTakeaways } from '../components/why-be10x/EmployeeTakeaways';
import { RolePlaybook } from '../components/why-be10x/RolePlaybook';
import { FitScorecard } from '../components/why-be10x/FitScorecard';
import { WhyThisMatters } from '../components/why-be10x/WhyThisMatters';
import { Be10XExperience } from '../components/why-be10x/Be10XExperience';
import { OutskillIsStrong } from '../components/why-be10x/OutskillIsStrong';
import { WhyNotGeneric } from '../components/why-be10x/WhyNotGeneric';
import { ProductivityImpact } from '../components/why-be10x/ProductivityImpact';
import { ProductivityCalculator } from '../components/why-be10x/ProductivityCalculator';
import { MeasurementFramework } from '../components/why-be10x/MeasurementFramework';
import { ExecutiveRecommendation } from '../components/why-be10x/ExecutiveRecommendation';
import { CompetitiveSources } from '../components/why-be10x/CompetitiveSources';

export default function WhyBe10X() {
  return (
    <div className="min-h-screen">
      {/* PRIORITY 1: Competitive positioning hero */}
      <CompetitiveBadge />

      {/* PRIORITY 2: Core comparison */}
      <HeroStatement />
      <ComparisonTable />

      {/* PRIORITY 1a: Key differentiators */}
      <DifferentiatorCards />

      {/* PRIORITY 3: Ethika-specific AI use cases */}
      <EthikaUseCases />

      {/* PRIORITY 4: Workshop → Workplace journey */}
      <WorkshopToWorkplace />

      {/* PRIORITY 5: Employee take-home toolkit */}
      <EmployeeTakeaways />

      {/* Role-Based AI Playbook */}
      <RolePlaybook />

      {/* Fit scorecard */}
      <FitScorecard />

      {/* Why this matters to Ethika */}
      <WhyThisMatters />

      {/* Be10X Experience package */}
      <Be10XExperience />

      {/* Outskill is strong */}
      <OutskillIsStrong />

      {/* Why not generic */}
      <WhyNotGeneric />

      {/* PRIORITY 6: Impact / Measurement */}
      <ProductivityImpact />

      {/* PRIORITY 7: Productivity calculator */}
      <ProductivityCalculator />

      {/* Measurement framework */}
      <MeasurementFramework />

      {/* PRIORITY 8: Executive recommendation */}
      <ExecutiveRecommendation />

      {/* Sources */}
      <CompetitiveSources />
    </div>
  );
}
