import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/site-nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Certifications } from "@/components/portfolio/certifications";
import { GithubCta } from "@/components/portfolio/github-cta";
import { Contact } from "@/components/portfolio/contact";
import { SiteFooter } from "@/components/portfolio/site-footer";

const TITLE = "Pradip Mishra - Java / Spring Boot";
const DESCRIPTION =
  "Pradip Mishra is a Java and Spring Boot developer in Kathmandu, Nepal, building secure REST APIs and reliable backend systems. See projects, skills and contact details.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pradip Mishra",
          jobTitle: "Java / Spring Boot Developer",
          email: "mailto:mishrapradip003@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kathmandu",
            addressCountry: "NP",
          },
          sameAs: [
            "https://github.com/pradipmishr",
            "https://np.linkedin.com/in/pradip-mishra-810081239",
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubCta />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
