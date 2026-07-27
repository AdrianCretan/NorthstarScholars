import { Helmet } from 'react-helmet-async';

const SeoHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NorthStar",
    "url": "https://nume-proiect.github.io"
  };

  return (
    <Helmet>
      <title>NorthStar - Platformă Educațională</title>
      <meta name="description" content="Aplicație SPA modernă și ultra-rapidă pentru excelență academică." />
      <link rel="canonical" href="https://nume-proiect.github.io" />
      <meta property="og:title" content="NorthStar" />
      <meta property="og:description" content="Aplicație SPA modernă și ultra-rapidă." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nume-proiect.github.io" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SeoHead;
