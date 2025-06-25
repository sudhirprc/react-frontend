import { useEffect, useState } from "react";

export const useScrollSpy = (ids, offset = 0, throttleMs = 100) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let throttleTimeout = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const mostVisible = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );

        const newId = mostVisible.target.id;

        if (!throttleTimeout && newId !== activeId) {
          throttleTimeout = setTimeout(() => {
            setActiveId(newId);

            // ✅ Update hash only if different from current
            if (window.location.hash !== `#${newId}`) {
              window.history.replaceState(null, "", `/#${newId}`);
            }

            throttleTimeout = null;
          }, throttleMs);
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: [0.2, 0.4, 0.6],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      clearTimeout(throttleTimeout);
      observer.disconnect();
    };
  }, [ids, offset, throttleMs, activeId]);

  return activeId;
};
