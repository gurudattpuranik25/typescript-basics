abstract class takePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelsTime(): number {
    return 89;
  }
}

class facebook extends takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const priya = new facebook("test", "test", 56);

priya.getReelsTime();
