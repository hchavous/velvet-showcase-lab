import { useEffect } from "react";

const DEFAULT_TITLE = "Haven Chavous | Financial Modeling & AI Innovation";
const DEFAULT_DESCRIPTION =
  "Haven Chavous - Financial Modeling Innovator, AI-Enhanced Analytics Expert, and Excel Guru with 15+ years of experience.";

export const usePageMeta = (
  title: string = DEFAULT_TITLE,
  description: string = DEFAULT_DESCRIPTION
) => {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    return () => {
      document.title = DEFAULT_TITLE;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
};
