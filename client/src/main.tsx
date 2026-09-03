import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Build stamp. Two jobs, both deliberate.
//
// 1. It changes the app bundle's filename on every deploy where this date is
//    bumped. That matters because the September 2026 outage left some phones
//    holding a broken copy of the bundle filed under its OLD filename, marked
//    "never re-check" for a year. Those phones cannot be healed by fixing the
//    file - they never ask for it again. They CAN be healed by a NEW filename,
//    which they have never seen and therefore must fetch fresh. Bumping this
//    date forces exactly that.
// 2. It gives a way to confirm which build a device is actually running:
//    open the site, open the console, type  window.__siteBuild
//
// Bump the date whenever a deploy must reach devices that may be holding a
// stale copy. Harmless to bump at any time.
(window as unknown as Record<string, string>).__siteBuild = "2026-09-03";

createRoot(document.getElementById("root")!).render(<App />);
