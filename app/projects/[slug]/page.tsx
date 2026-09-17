import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import { MetadataBlock } from '@/components/metadata-block'
import { QuoteCard } from '@/components/quote-card'
import { TechBadge } from '@/components/tech-badge'
import { Callout } from '@/components/callout'
import { Breadcrumb } from '@/components/breadcrumb'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project || !project.content) {
    notFound()
  }

  const { content } = project

  const visitItems = (() => {
    switch (slug) {
      case 'sieve':
        return [
          { label: 'GitHub repository', href: "https://github.com/sieve-labs" },
          { label: 'Lander', href: "https://sieve.smann.cc/" },
          { label: 'Docs', href: "https://sieve-labs.gitbook.io/sieve" },
        ]
      case 'factorsphere':
        return [
          { label: 'GitHub repository', href: "https://github.com/FactorSphere" },
          { label: 'Lander', href: "https://lander.factorsphere.smann.cc/" },
          { label: 'Tool', href: "https://factorsphere.smann.cc/" },
        ]
      case 'aipdf':
        return [
          { label: 'GitHub repository', href: "https://github.com/REXFEDEC/AiPdfSummarizer" },
          { label: 'Website', href: "https://pdf.smann.cc/" },
        ]
      case 'scanweb':
        return [{ label: 'GitHub repository', href: "https://github.com/REXFEDEC/ScanWeb" }]
      case 'securenotes':
        return [{ label: 'GitHub repository', href: "https://github.com/REXFEDEC/SecureNotes" }]
      case 'dreambit':
        return [
          { label: 'GitHub repository', href: "https://github.com/REXFEDEC/DreamBit" },
          { label: 'Website', href: "https://dreambittech.rf.gd" },
        ]
      case 'musik':
        return [{ label: 'GitHub repository', href: "https://github.com/REXFEDEC/Musik" }]
      case 'shtick':
        return [{ label: 'GitHub repository', href: "https://github.com/REXFEDEC/Shtick" }]
      case 'labi-old':
        return [{ label: 'GitHub repository', href: "https://github.com/REXFEDEC/Labi-Old" }]
      default:
        return []
    }
  })()

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto animate-fade-in">
      <Breadcrumb />
      
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{content.subheading}</p>
      </section>

      {/* Metadata */}
      {content.metadata && (
        <section className="mb-12">
          <MetadataBlock metadata={content.metadata} />
        </section>
      )}

      {/* Overview */}
      <section className="mb-12">
        <p className="text-foreground leading-relaxed whitespace-pre-line">{content.overview}</p>
      </section>

      {/* Features Section */}
      {content.features && content.features.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Features</h2>
          <ul className="space-y-3">
            {content.features.map((feature, idx) => (
              <li key={idx} className="flex gap-3 text-foreground">
                <span className="text-accent mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Providers Section */}
      {content.providers && content.providers.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Supported Providers</h2>
          <div className="flex flex-wrap gap-2">
            {content.providers.map((provider, idx) => (
              <TechBadge key={idx}>{provider}</TechBadge>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.stack && project.stack.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </section>
      )}

      {/* Visit Links */}
      {visitItems.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Visit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visitItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-lg p-4 bg-background hover:bg-card transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Callout/Why It Matters */}
      {content.whyItMatters && (
        <section className="mb-12">
          <Callout>{content.whyItMatters}</Callout>
        </section>
      )}

      {/* Additional Sections */}
      {content.sections && content.sections.length > 0 && (
        <section className="mb-12">
          {content.sections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
              <p className="text-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </section>
      )}

      {/* Testimonials for FactorSphere */}
      {project.slug === 'factorsphere' && (
        <section id="testimonials" className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Import testimonials from data */}
            {[
              {
                quote:
                  'In the rapidly evolving landscape of scientific research, identifying the most suitable journal for publication can be a challenging task for a PhD student. This website serves as a valuable resource by bringing together comprehensive information about a wide range of journals, including direct links and their respective impact factors — everything on one platform. An added advantage is the AI-assisted journal recommender, which provides tailored recommendations based on the abstract, making the process even more efficient and user-friendly.',
                author: 'Atharva Mahajan',
              },
              {
                quote:
                  'Factorsphere is an extremely simple portal to utilise in searching for your academic needs. The layout is extremely nice and lucid to use — the interface is contemporary to any research journal page. The catalogue creation is structured and minimalistic, which is what any academic individual wishes for. It can truly democratize rankings by trying to preserve the integrity of academic studies.',
                author: 'Abhishek Rajwade',
              },
              {
                quote:
                  'FactorSphere is an amazing tool with an easy user interface, that helps one quickly access the impact factor of journals in multiple fields and decide which journals one could consider to publish their work in.',
                author: 'Mincy Kunjumon',
              },
              {
                quote:
                  'Using this website has helped to narrow down the journals I would like to publish my paper in. Thank you so much! It has been of a great help!',
                author: 'Sristi Pradhan',
              },
            ].map((testimonial, idx) => (
              <QuoteCard key={idx} quote={testimonial.quote} author={testimonial.author} />
            ))}
          </div>
        </section>
      )}

      {/* Footer Navigation */}
      <section className="pt-8 border-t border-border">
        <Link
          href="/projects"
          className="text-sm text-accent hover:underline"
        >
          ← Back to projects
        </Link>
      </section>
    </div>
  )
}
