import { useEffect } from "react";

const CANONICAL_BASE = "https://www.jeffkurrus.com";

/**
 * Sets per-page document title, meta description, and canonical URL for SEO.
 * Falls back to site defaults when component unmounts.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const defaultTitle = "Jeff Kurrus | Children's Book Author, School Visits & Senior Photography | Gretna, Nebraska";
    const defaultDesc = "Jeff Kurrus writes baseball chapter books for kids, leads K-8 writing workshops across Nebraska, and photographs seniors in Gretna and Omaha.";

    document.title = `${title} | Jeff Kurrus`;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }

    // Update canonical link to match current page
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const path = window.location.pathname === "/" ? "/" : window.location.pathname;
      canonical.setAttribute("href", `${CANONICAL_BASE}${path}`);
    }

    // Update og:url to match current page
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      const path = window.location.pathname === "/" ? "/" : window.location.pathname;
      ogUrl.setAttribute("content", `${CANONICAL_BASE}${path}`);
    }

    return () => {
      document.title = defaultTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", defaultDesc);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", `${CANONICAL_BASE}/`);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", `${CANONICAL_BASE}/`);
    };
  }, [title, description]);
}
