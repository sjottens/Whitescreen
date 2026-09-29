import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';

const content = {
  title: 'Cookie Policy',
  description: 'Learn which cookies are used on TestaScreen and how you can control them.',
  intro:
    'This Cookie Policy explains what cookies are, how TestaScreen uses them, and what choices you have. We keep cookie usage as limited and transparent as possible.',
  sections: [
    {
      heading: '1. What Cookies Are',
      body:
        'Cookies are small text files stored on your device by websites. They can be used for essential functionality, remembering preferences, analytics, and advertising.',
    },
    {
      heading: '2. Cookies We Use',
      body:
        'We use only essential technical cookies needed for core site behavior, such as language preference. We do not set first-party marketing profiles through tracking scripts.',
    },
    {
      heading: '3. Third-Party Services',
      body:
        'Some integrated services, including advertising or embedded resources, may set their own cookies according to their policies. Review those providers for full details.',
    },
    {
      heading: '4. Managing Cookies',
      body:
        'You can block or delete cookies in your browser settings. Restricting cookies may affect language persistence and some interactive functionality.',
    },
    {
      heading: '5. Advertising and Monetization',
      body:
        'This website uses Google AdSense to display targeted advertisements. Google stores cookies to understand your browsing interests and show relevant ads. We receive revenue from ad impressions and clicks, which supports our free tools. You can control personalized advertising in your Google Ad Settings or browser privacy settings.',
    },
    {
      heading: '6. Consent and Updates',
      body:
        'By continuing to use the website, you consent to the cookie use described in this policy where legally permitted. We may update this page as integrations or regulations change.',
    },
  ],
} as const;

export async function generateMetadata(): Promise<Metadata> {

  return pageMetadata({
    title: content.title,
    description: content.description,
    path: '/cookies',
  });
}

export default async function CookiePolicyPage() {

  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: content.title, path: '/cookies' },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: '/' },
          { name: content.title },
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{content.title}</h1>
          <p className="text-xl text-slate-700">{content.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl prose prose-lg">
          <p>{content.intro}</p>
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
