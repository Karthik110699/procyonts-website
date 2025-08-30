import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "Procyon Technostructure - AI-Powered Enterprise Solutions",
  description = "Transform your enterprise with Procyon's AI-powered solutions. Expert ServiceNow, Salesforce, SAP implementation, cloud transformation, and data analytics services.",
  keywords = "enterprise solutions, ServiceNow, Salesforce, SAP, cloud transformation, AI solutions, data analytics, digital transformation, IT consulting, business automation",
  canonicalUrl = "https://procyon-technostructure.com",
  ogTitle,
  ogDescription,
  ogImage = "/assets/procyon-og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Procyon Technostructure');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph meta tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'Procyon Technostructure', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#10b981');
    updateMetaTag('msapplication-TileColor', '#10b981');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script') as HTMLScriptElement;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, ogType, twitterCard, structuredData]);

  return null; // This component doesn't render anything
}

// Predefined structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Procyon Technostructure",
  "url": "https://procyon-technostructure.com",
  "logo": "https://procyon-technostructure.com/assets/logo.png",
  "description": "Leading enterprise technology solutions provider specializing in ServiceNow, Salesforce, SAP, and AI-powered digital transformation.",
  "foundingDate": "2004",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-PROCYON",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/procyonts/",
    "https://www.facebook.com/ProcyonTS"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Global"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Enterprise Technology Solutions",
  "provider": {
    "@type": "Organization",
    "name": "Procyon Technostructure"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ServiceNow Implementation",
          "description": "Complete ServiceNow platform implementation and optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Salesforce Solutions",
          "description": "AI-driven Salesforce solutions and custom implementations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SAP Solutions",
          "description": "Enterprise SAP planning and business intelligence solutions"
        }
      }
    ]
  }
};