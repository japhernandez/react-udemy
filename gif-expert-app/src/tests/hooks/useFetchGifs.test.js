import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test into Hook useFetchGifs", () => {
  it("should the initial state return", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    // 1. Espero en el estado inicial que la data sea un []
    expect(data).toEqual([]);
    // 2. Espero en el estado inicial que el loading sea true
    expect(loading).toBe(true);
  });

  it("should in the state return an Array<[10]> and loading in false return", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    // 1. Espero que al cambiar el estado tenga 12 elementos
    expect(data.length).toEqual(12);
    // 2. Espero que al cambiar el estado el loading sea false
    expect(loading).toBe(false);
  });
});
