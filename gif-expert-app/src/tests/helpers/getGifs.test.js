const { getGifs } = require("../../helpers/getGifs");

describe("getGifs helper", () => {
  it("should must bring 12 items", async () => {
    const gifs = await getGifs("xamurai x");
    expect(gifs.length).toBe(12);
  });

  it("should must bring 0 items", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
