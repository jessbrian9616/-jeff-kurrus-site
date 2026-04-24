import { useEffect } from "react";

/**
 * Sets per-page document title and meta description for SEO.
 * Falls back to site defaults when component unmounts.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const defaultTitle = "Jeff Kurrus | Children's Book Author, School Visits & Senior Photography | Gretna, Nebraska";
    const defaultDesc = "Jeff Kurrus writes baseball chapter books for kids, presents 45-minute writing workshops in K-8 classrooms across Nebraska, and photographs seniors in Gretna and Omaha.";

    document.title = `${title} | Jeff Kurrus`;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }

    return () => {
      document.title = defaultTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", defaultDesc);
    };
  }, [title, description]);
}
