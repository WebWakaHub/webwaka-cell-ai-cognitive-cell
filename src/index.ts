/**
 * AiCognitiveCell — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { CognitivePortOrchestrator } from "@webwaka/organelle-cognitive-port";
import { PromptAssemblerOrchestrator } from "@webwaka/organelle-prompt-assembler";
import { ResultValidatorOrchestrator } from "@webwaka/organelle-result-validator";

export { CognitivePortOrchestrator } from '@webwaka/organelle-cognitive-port';
export { PromptAssemblerOrchestrator } from '@webwaka/organelle-prompt-assembler';
export { ResultValidatorOrchestrator } from '@webwaka/organelle-result-validator';

/**
 * AiCognitiveCell Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class AiCognitiveCellComposition {
  private cognitivePortOrchestrator: CognitivePortOrchestrator;
  private promptAssemblerOrchestrator: PromptAssemblerOrchestrator;
  private resultValidatorOrchestrator: ResultValidatorOrchestrator;

  constructor() {
    this.cognitivePortOrchestrator = new CognitivePortOrchestrator();
    this.promptAssemblerOrchestrator = new PromptAssemblerOrchestrator();
    this.resultValidatorOrchestrator = new ResultValidatorOrchestrator();
  }
}

export * from "./types";
