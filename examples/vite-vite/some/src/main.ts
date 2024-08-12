import { Emitter } from '@wdxlab/events';

export class Initializer {
  static create() {
    const emt = new Emitter();
    console.log(emt);
    return emt;
  }
}
