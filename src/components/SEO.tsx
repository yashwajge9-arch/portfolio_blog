import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  articleData?: {
    publishedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = '/images/og-image.webp',
  schema,
  articleData,
}) => {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Alex Vance') ? title : `${title} | Alex Vance`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', description);

    // 3. Canonical URL
    const fullCanonical = `https://alexvance.video${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', fullCanonical);
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `https://alexvance.video${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
    setMetaTag('property', 'og:image', fullImageUrl);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 6. Article Meta if applicable
    if (ogType === 'article' && articleData) {
      if (articleData.publishedTime) setMetaTag('property', 'article:published_time', articleData.publishedTime);
      if (articleData.author) setMetaTag('property', 'article:author', articleData.author);
      if (articleData.section) setMetaTag('property', 'article:section', articleData.section);
    }

    // 7. Inject / update JSON-LD schema
    let schemaScript = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-jsonld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    // Scroll to top on route change safely
    try {
      window.scrollTo(0, 0);
    } catch {
      // safe fallback
    }
  }, [title, description, canonicalPath, ogType, ogImage, schema, articleData]);

  return null;
};
