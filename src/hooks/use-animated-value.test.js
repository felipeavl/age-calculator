import { act, renderHook, waitFor } from "@testing-library/react";
import { useAnimatedValue } from "./use-animated-value";

jest.useFakeTimers();

describe("useAnimatedValue", () => {
  test("should initialize with null value", () => {
    const { result } = renderHook(() => useAnimatedValue(null));
    expect(result.current).toBe(null);
  });

  test("should animate value to the target value", () => {
    const { result } = renderHook(() => useAnimatedValue(100, 1000, 30));

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBeGreaterThanOrEqual(0);
    expect(result.current).toBeLessThanOrEqual(100);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toBe(100);
  });

  test("should update animated value when target value changes", async () => {
    const { result, rerender } = renderHook(
      ({ targetValue }) => useAnimatedValue(targetValue),
      {
        initialProps: { targetValue: 0 },
      }
    );

    rerender({ targetValue: 100 });

    await waitFor(() => {
      expect(result.current).toBeLessThanOrEqual(100);
    });
  });
});
