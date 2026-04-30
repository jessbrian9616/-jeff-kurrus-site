/*
ScrollManager — handles scroll restoration on route changes and anchor links.

Wouter does not include scroll restoration by default. Without this component,
clicking a Link to a new page leaves the scroll position from the previous
page, and clicking an in-page #anchor link does not always scroll to the
target. This component fixes both behaviors:

- On route change with no hash: scroll to top of page
- On route change with a hash (e.g. /school-visits#book): scroll the
  matching element into view
- On hashchange while on the same page: scroll to the new target

Mounted once inside the Router in App.tsx. Renders nothing.
*/
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    const performScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ block: "start" });
          return;
        }
      }
      window.scrollTo(0, 0);
    };

    // Defer one frame so the new route's DOM has rendered before we measure.
    const raf = requestAnimationFrame(performScroll);

    // Also handle in-page hash changes (clicks on /#subscribe while already on /).
    const onHashChange = () => performScroll();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [location]);

  return null;
}
