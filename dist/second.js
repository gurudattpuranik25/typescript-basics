"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class youTube {
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        console.log("Story created");
    }
}
