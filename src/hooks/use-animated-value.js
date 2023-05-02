import { useEffect, useState } from "react";

export function useAnimatedValue(targetValue, duration = 1000, interval = 30) {
  const [animatedValue, setAnimatedValue] = useState(null);

  useEffect(() => {
    if (targetValue === null) {
      setAnimatedValue(null);
      return;
    }
    const startTime = Date.now();
    const tick = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime > duration) {
        setAnimatedValue(targetValue);
      } else {
        const progress = elapsedTime / duration;
        setAnimatedValue(Math.round(targetValue * progress));
        requestAnimationFrame(tick);
      }
    };
    tick();
  }, [targetValue, duration]);

  return animatedValue;
}
