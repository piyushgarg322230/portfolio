import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Piyush Garg – Game & Software Developer | Unity | Android | React | Node.js</title>
      <meta
        name="description"
        content="Piyush Garg - Full-stack developer specializing in Unity multiplayer games, React, Node.js, Android development, and Cocos2d-x game programming."
      />
      <meta
        name="keywords"
        content="Piyush Garg, Game Developer, Unity Developer, Android Developer, Cocos2d-x, React Developer, Node.js Developer, Multiplayer Games, Software Developer"
      />
      <meta name="author" content="Piyush Garg" />
      <link rel="canonical" href="https://piyushgarg.info" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content="Piyush Garg – Game Developer" />
      <meta
        property="og:description"
        content="Explore projects by Piyush Garg – Unity & Android Game Developer, specializing in multiplayer games and performance optimization."
      />
      <meta property="og:image" content="https://i.ibb.co/mVRTmrgm/rummy.png" />
      <meta property="og:url" content="https://piyushgarg.info" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Piyush Garg – Game Developer" />
      <meta
        name="twitter:description"
        content="Full-stack Game Developer specializing in Unity, Android, and Cocos2d-x with 2+ years of experience."
      />
      <meta name="twitter:image" content="https://i.ibb.co/mVRTmrgm/rummy.png" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Piyush Garg",
            "url": "https://piyushgarg.info",
            "image": "https://piyush-goyal22.imgbb.com/",
            "sameAs": [
              "https://www.linkedin.com/in/piyush-garg-35066919a/",
              "https://github.com/piyushgarg322230"
            ],
            "jobTitle": "Software Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Assert Infotech"
            },
            "knowsAbout": ["Unity", "Cocos2d-x", "Android Development", "React.js", "Node.js", "Game Programming"]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
