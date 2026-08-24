export class PhaseEngine {
  constructor() {
    this.phases = [];
    this.index = 0;
  }

  addPhase(fn) {
    this.phases.push(fn);
  }

  advance(context) {
    if (this.index >= this.phases.length) return "No further phases";
    const phase = this.phases[this.index];
    this.index++;
    return phase(context);
  }
}
