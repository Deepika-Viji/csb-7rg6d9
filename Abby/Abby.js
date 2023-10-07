/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Abby extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("abby-a", "./Abby/costumes/abby-a.svg", {
        x: 30.999744895475345,
        y: 100.00057286065069
      }),
      new Costume("abby-b", "./Abby/costumes/abby-b.svg", { x: 31, y: 100 }),
      new Costume("abby-c", "./Abby/costumes/abby-c.svg", { x: 32, y: 100 }),
      new Costume("abby-d", "./Abby/costumes/abby-d.svg", { x: 32, y: 101 })
    ];

    this.sounds = [
      new Sound("A Elec Guitar", "./Abby/sounds/A Elec Guitar.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.correct = 0;
    yield* this.askAndWait("What's your name?");
    yield* this.sayAndWait("Hello!!" + this.answer, 2);
    yield* this.askAndWait("What is 3+3??");
    if (this.toNumber(this.answer) === 6) {
      yield* this.sayAndWait("Correct", 2);
      this.stage.vars.correct++;
    } else {
      yield* this.sayAndWait("Wrong", 2);
    }
    yield* this.sayAndWait(this.toString(this.stage.vars.correct) + "/1", 2);
  }
}
