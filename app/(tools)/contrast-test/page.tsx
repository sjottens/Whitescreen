// app/(tools)/contrast-test/page.tsx - Contrast Test tool page with WCAG compliance

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { SITE_URL, TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ContrastTest from '@/components/tools/contrast-test';

// Disable static generation due to client component requirements
export const dynamic = 'force-dynamic';

const CONTRAST_TOOL = TEST_TOOLS.find((t) => t.id === 'contrast-test')!;

export const metadata: Metadata = generateSEOMetadata({
  title: CONTRAST_TOOL.name,
  description:
    CONTRAST_TOOL.description +
    ' WCAG AA/AAA compliance testing, text readability, color vision deficiency simulation, and accessibility validation.',
  path: CONTRAST_TOOL.path,
  keywords: [
    ...CONTRAST_TOOL.keywords,
    'WCAG compliance',
    'contrast ratio',
    'accessibility test',
    'color blindness simulator',
    'readability test',
    'color vision deficiency',
  ],
});

export default function ContrastTestPage() {
  const relatedTools = TEST_TOOLS.filter((t) => t.id !== 'contrast-test').slice(0, 3);

  const schema = toolSchema({
    name: CONTRAST_TOOL.name,
    description: CONTRAST_TOOL.description,
    url: `${SITE_URL}${CONTRAST_TOOL.path}`,
    image: `${SITE_URL}/screenshots/contrast-test.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Test Tools', path: '/tools/tests' },
    { name: CONTRAST_TOOL.name, path: CONTRAST_TOOL.path },
  ]);

  const faqItems = [
    {
      question: 'What is contrast ratio and why does it matter?',
      answer:
        'Contrast ratio measures the difference in luminance between two colors. Higher contrast makes text and graphics more readable and accessible. WCAG standards specify minimum contrast ratios to ensure content is readable for everyone, including people with vision impairments.',
    },
    {
      question: 'What are WCAG AA and AAA compliance levels?',
      answer:
        'WCAG AA requires 4.5:1 contrast for normal text and 3:1 for large text. WCAG AAA, the enhanced level, requires 7:1 for normal text and 4.5:1 for large text. These standards ensure content is accessible to people with various vision levels.',
    },
    {
      question: 'How do I calculate contrast ratio?',
      answer:
        'Contrast ratio is calculated using the WCAG luminance formula. It compares the relative luminance of two colors using a mathematical formula that weighs RGB values appropriately for human perception. Our tool calculates this automatically.',
    },
    {
      question: 'What does the WCAG ladder test show?',
      answer:
        'The WCAG ladder displays 11 different contrast pairs, ranging from highest (21:1) to lower ratios. As you progress, you can see at which point text becomes difficult to read. This helps identify the practical minimum contrast ratios for your needs.',
    },
    {
      question: 'What is color vision deficiency?',
      answer:
        'Color vision deficiency, or color blindness, affects how people perceive colors. The most common types are red-green (deuteranopia and protanopia), blue-yellow (tritanopia), and complete monochrome (achromatopsia). Our simulator shows how your test appears to people with these conditions.',
    },
    {
      question: 'Why is the readability test important?',
      answer:
        'Readability goes beyond just contrast ratio. It tests how actual text appears with your colors. Text size, font weight, line spacing, and surrounding contrast all affect readability. This test shows you the complete picture.',
    },
    {
      question: 'What do the pattern tests show?',
      answer:
        'Pattern tests use checkerboards and fine lines to reveal how well your colors contrast. Patterns can reveal issues that single solid colors might miss, especially for people with certain vision types.',
    },
    {
      question: 'Can I use this tool to test my website?',
      answer:
        'Yes! Use the custom pair tester to check specific colors from your website. Test your main text, links, buttons, and backgrounds. This tool helps ensure your website meets WCAG accessibility standards.',
    },
    {
      question: 'What is the difference between WCAG and other accessibility standards?',
      answer:
        'WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility. Other standards like ADA (Americans with Disabilities Act) and Section 508 often reference WCAG. Meeting WCAG ensures broad compliance.',
    },
    {
      question: 'How does the color blindness simulator work?',
      answer:
        'The simulator applies color transformation matrices that approximate how people with specific color vision deficiencies perceive colors. It helps designers understand accessibility from different perspectives and catch potential issues.',
    },
  ];

  const faqSchema_data = faqSchema(faqItems);

  const features = [
    'WCAG Contrast Ladder: 11-level test from 21:1 (highest) to lower ratios',
    'WCAG AA/AAA Compliance Indicators: Real-time pass/fail badges',
    'Text Readability Test: See how actual text appears with your colors',
    'Pattern Tests: Checkerboard and fine line detection',
    'Custom Color Pair Tester: Test your own foreground/background combinations',
    'Color Vision Deficiency Simulator: Deuteranopia, Protanopia, Tritanopia, Achromatopsia',
    'Real-time Contrast Ratio Calculator: Precise WCAG formula calculations',
    'Accessibility Standards Compliance: Meet WCAG 2.1 guidelines',
    'Fullscreen Mode: Immersive testing with keyboard shortcuts',
    'Color Code Export: Copy hex codes for your designs',
  ];

  const useCases = [
    'Web Design: Ensure your site meets WCAG accessibility standards',
    'UI/UX Design: Test color contrast for digital products',
    'Graphic Design: Create accessible designs for all audiences',
    'Content Creation: Verify readability of digital content',
    'Marketing: Ensure ads and promotional materials are accessible',
    'Education: Create learning materials for diverse learners',
    'Healthcare: Comply with accessibility requirements',
    'Legal Compliance: Meet ADA and international accessibility laws',
    'User Testing: Validate designs work for people with color blindness',
    'Quality Assurance: Catch accessibility issues before launch',
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema_data) }}
        suppressHydrationWarning
      />

      <ToolLayout
        title={CONTRAST_TOOL.name}
        description={CONTRAST_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
        }))}
      >
        <ContrastTest />
      </ToolLayout>
    </>
  );
}
