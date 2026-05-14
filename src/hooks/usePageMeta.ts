import { useEffect } from "react";

const DEFAULT_TITLE = "Haven Chavous | Financial Modeling & AI Innovation";
const DEFAULT_DESCRIPTION =
  "Haven Chavous - Financial Modeling Innovator, AI-Enhanced Analytics Expert, and Excel Guru with 15+ years of experience.";
const SITE_ORIGIN = "https://havenchavous.com";

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const setOrCreateLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const usePageMeta = (
  title: string = DEFAULT_TITLE,
  description: string = DEFAULT_DESCRIPTION
) => {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${window.location.pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setOrCreateLink("canonical", url);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', "content", DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:title"]', "content", DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', "content", DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:url"]', "content", SITE_ORIGIN + "/");
      setOrCreateLink("canonical", SITE_ORIGIN + "/");
    };
  }, [title, description]);
};
