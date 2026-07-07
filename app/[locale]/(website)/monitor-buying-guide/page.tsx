// app/[locale]/(website)/monitor-buying-guide/page.tsx - Comprehensive monitor buying guide
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: 'Complete Monitor Buying Guide | Display Technology Explained',
    description: 'Expert guide to choosing the right monitor for gaming, work, or content creation. Learn about refresh rates, panel types, resolution, and specifications.',
    path: '/monitor-buying-guide',
    keywords: [
      'monitor buying guide',
      'best monitors',
      'gaming monitor',
      'display specifications',
      'refresh rate',
      'resolution guide',
      'panel types LCD OLED',
    ],
  });
}

export default async function MonitorBuyingGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: 'Resources', path: '/tools' },
      { name: 'Monitor Buying Guide', path: '/monitor-buying-guide' },
    ],
    locale
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <section className="section py-12 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: translate('home'), path: getLocalizedPath(locale, '/') },
              { name: 'Resources', path: getLocalizedPath(locale, '/tools') },
              { name: 'Monitor Buying Guide' },
            ]}
          />
          <div className="max-w-3xl mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-4">Complete Monitor Buying Guide</h1>
            <p className="text-xl text-slate-600 mb-6">
              Make informed monitor buying decisions with our comprehensive guide to display specifications, panel types, and choosing the right display for your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-12">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Monitor Specifications</h2>
            <p>
              When shopping for a monitor, manufacturers list many specifications. Understanding what each one means is essential for making the right choice. This guide breaks down the key specifications and explains how they affect your viewing experience.
            </p>

            <h3>Resolution: What Does 1080p, 1440p, or 4K Mean?</h3>
            <ul>
              <li><strong>1080p (1920×1080):</strong> Full HD, standard for 21-24" monitors. Good for everyday computing and gaming. Common, affordable, efficient for frame rates.</li>
              <li><strong>1440p (2560×1440):</strong> QHD (Quad HD). Popular for 27" gaming monitors. Sharp detail, demanding on graphics cards. Balances sharpness and performance.</li>
              <li><strong>4K (3840×2160):</strong> Ultra HD. Extremely sharp at 27" and larger. Requires powerful GPU. Best for content creation and professional work.</li>
              <li><strong>Ultrawide (3440×1440):</strong> 34-38" aspect ratio 21:9. Immersive for gaming and productivity. More width than height—excellent for multitasking.</li>
            </ul>

            <p><strong>Rule of thumb:</strong> Resolution matters more at larger monitor sizes. At 24 inches, 1080p looks sharp. At 27 inches, 1440p is more comfortable. Above 27 inches, 4K is ideal.</p>

            <h3>Refresh Rate: Why 60Hz, 144Hz, or 360Hz?</h3>
            <ul>
              <li><strong>60 Hz:</strong> Standard office/casual use. Smooth for video and general computing. Adequate for most users.</li>
              <li><strong>75-100 Hz:</strong> Noticeable smoothness increase over 60Hz. Better for casual gaming.</li>
              <li><strong>144 Hz:</strong> Competitive gaming standard. Noticeably smoother motion. Requires mid-range GPU for many games.</li>
              <li><strong>240+ Hz:</strong> Esports and high-end gaming. Extreme smoothness. Requires high-end GPU to achieve high frame rates.</li>
            </ul>

            <p><strong>Key point:</strong> Higher refresh rates only help if your GPU can achieve those frame rates. A 144Hz monitor is wasted on a gaming PC that only delivers 60 fps.</p>

            <h3>Response Time: 1ms, 2ms, 5ms—Does It Matter?</h3>
            <p>Response time measures how quickly pixels change color (in milliseconds). Faster is better for gaming:</p>
            <ul>
              <li><strong>1ms:</strong> Fastest possible. Competitive gaming advantage, especially esports.</li>
              <li><strong>2-4ms:</strong> Excellent for gaming. Imperceptible difference from 1ms for most users.</li>
              <li><strong>5ms+:</strong> Acceptable for gaming. Noticeable ghosting only in fast-paced esports.</li>
              <li><strong>For work/editing:</strong> Response time doesn't matter. Faster isn't necessary.</li>
            </ul>

            <h3>Panel Type: IPS, VA, TN, or OLED?</h3>
            <p><strong>IPS (In-Plane Switching):</strong> Best color accuracy and consistency at viewing angles. Professional standard. Slightly slower response time. Great for photography, video editing, and general use.</p>
            <p><strong>VA (Vertical Alignment):</strong> Excellent contrast ratio with deep blacks. Color accuracy varies at angles. Good gaming choice balancing colors and contrast.</p>
            <p><strong>TN (Twisted Nematic):</strong> Fastest response times. Most affordable. Poor color accuracy and viewing angles. Specialty: competitive esports.</p>
            <p><strong>OLED:</strong> Self-emissive pixels—perfect blacks, incredible contrast. Best color and brightness uniformity. Burn-in risk with static images. Premium pricing.</p>

            <h3>Color Accuracy: sRGB, Adobe RGB, and DCI-P3</h3>
            <ul>
              <li><strong>sRGB:</strong> Web standard. Covers 99% of colors you'll encounter online.</li>
              <li><strong>Adobe RGB:</strong> Wider gamut for photography professionals. Includes more greens and reds than sRGB.</li>
              <li><strong>DCI-P3:</strong> Cinema standard. Wider than Adobe RGB. Professional video editing requirement.</li>
            </ul>

            <p><strong>For most users:</strong> sRGB coverage is sufficient. For photographers and video creators, Adobe RGB or DCI-P3 is important.</p>

            <h2>Choosing a Monitor for Your Use Case</h2>

            <h3>For Gaming</h3>
            <p><strong>Competitive shooters (esports):</strong> 240+ Hz, 1ms response, 1080p or 1440p, TN or VA panel. Prioritize refresh rate and speed.</p>
            <p><strong>Story-driven/MMO gaming:</strong> 144 Hz, IPS or VA panel, 1440p or 4K. Balance frame rate with visual quality.</p>
            <p><strong>Casual gaming/console:</strong> 60-75 Hz, IPS panel for color, 1080p or 1440p. Cost-effective approach.</p>

            <h3>For Professional Work</h3>
            <p><strong>Photography editing:</strong> 27" IPS monitor, Adobe RGB coverage, hardware calibration. Color accuracy is critical.</p>
            <p><strong>Video editing/color grading:</strong> 27"+ 4K, DCI-P3 or wide gamut, excellent brightness and contrast uniformity.</p>
            <p><strong>General office work:</strong> 27" IPS, 1440p, ergonomic stand. Productivity and eye comfort matter most.</p>

            <h3>For Content Creation (Streaming/Recording)</h3>
            <p><strong>Streaming:</strong> 27" 1440p, 144+ Hz, IPS for viewing angle consistency. Room for multiple windows/info.</p>
            <p><strong>Recording/editing:</strong> Large ultrawide or multi-monitor setup. Color-accurate IPS panels for post-processing.</p>

            <h2>Budget Considerations</h2>
            <ul>
              <li><strong>$150-300:</strong> 24" 1080p, 60Hz, IPS. Good for office/general use.</li>
              <li><strong>$300-600:</strong> 27" 1440p, 144Hz gaming, or professional IPS panels.</li>
              <li><strong>$600-1500:</strong> Premium 4K, high-end gaming 144-240Hz, professional color-accurate displays.</li>
              <li><strong>$1500+:</strong> OLED gaming, high-end 5K professional displays, specialty monitors.</li>
            </ul>

            <h2>Key Features to Prioritize</h2>
            <ol>
              <li><strong>Panel type:</strong> Choose based on use case (gaming = speed, work = color).</li>
              <li><strong>Resolution:</strong> Appropriate for monitor size and GPU capability.</li>
              <li><strong>Refresh rate:</strong> Match your GPU's typical frame rate performance.</li>
              <li><strong>Ergonomics:</strong> Adjustable height, tilt, rotation (VESA mount compatibility).</li>
              <li><strong>Connectivity:</strong> Adequate HDMI 2.1 or DisplayPort for your setup.</li>
              <li><strong>HDR support:</strong> Important for gaming and movie watching.</li>
            </ol>

            <h2>Common Mistakes to Avoid</h2>
            <p><strong>Buying a 240Hz monitor for a GPU that delivers 80fps:</strong> Match refresh rate to your typical frame rates, or you'll waste money.</p>
            <p><strong>Prioritizing refresh rate over resolution for creative work:</strong> Professionals need pixel-perfect accuracy, not gaming speed.</p>
            <p><strong>Ignoring color accuracy for photographers:</strong> A budget monitor won't show accurate colors for photo editing.</p>
            <p><strong>Not considering stand ergonomics:</strong> A monitor locked at fixed angles causes neck strain and fatigue.</p>
            <p><strong>Confusing response time with input lag:</strong> Response time is pixel color change speed, not system input latency.</p>

            <h2>Testing Your Monitor After Purchase</h2>
            <p>After buying, verify your monitor meets specifications using our free testing tools:</p>
            <ul>
              <li><Link href={getLocalizedPath(locale, '/white-screen')} className="text-blue-600 hover:underline">White screen test</Link> - Check uniformity and backlight issues</li>
              <li><Link href={getLocalizedPath(locale, '/black-screen')} className="text-blue-600 hover:underline">Black screen test</Link> - Check dead pixels and contrast</li>
              <li><Link href={getLocalizedPath(locale, '/brightness-test')} className="text-blue-600 hover:underline">Brightness test</Link> - Verify brightness levels and gamma</li>
              <li><Link href={getLocalizedPath(locale, '/contrast-test')} className="text-blue-600 hover:underline">Contrast test</Link> - Verify contrast ratio and WCAG compliance</li>
            </ul>

            <h2>Monitor Brands and Quality Tiers</h2>
            <p><strong>Premium brands:</strong> ASUS ProArt, BenQ, Dell UltraSharp, EIZO, Nec - Professional-grade quality and support.</p>
            <p><strong>Gaming-focused:</strong> ASUS ROG, Alienware, BenQ gaming line, MSI - Performance optimization for gaming.</p>
            <p><strong>Budget-friendly:</strong> Acer, Dell, LG, ViewSonic budget lines - Good value without premium features.</p>
            <p><strong>Specialty:</strong> Corsair (gaming peripherals), Gigabyte (high-refresh gaming) - Niche market focus.</p>

            <h3>My Recommendation Process</h3>
            <ol>
              <li>Define your primary use case (gaming, work, creative, casual)</li>
              <li>Set a realistic budget</li>
              <li>Determine resolution appropriate for monitor size and GPU</li>
              <li>Choose panel type matching your needs (TN for speed, IPS for colors, VA for contrast)</li>
              <li>Select refresh rate aligned with typical GPU performance</li>
              <li>Verify connectivity options match your devices</li>
              <li>Check warranty and return policy</li>
              <li>Buy and test using our free tools to verify specifications</li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              The "best" monitor doesn't exist—the best monitor is the one that matches your specific needs, budget, and use case. By understanding these specifications and using our testing tools, you'll make an informed decision and avoid common buying mistakes. Take your time, research brands, and verify monitor performance after purchase to ensure you get years of quality viewing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section py-12 bg-slate-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Is 1ms response time really necessary?</h3>
              <p>For competitive esports, yes. For gaming and general use, 2-5ms is imperceptible. Most people won't notice the difference.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Should I buy a 4K monitor?</h3>
              <p>If your GPU can handle 4K at your desired frame rate and your use case values sharpness (photo editing, professional work), yes. For gaming on a budget or older GPU, 1440p is better value.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">What's the best panel type for gaming?</h3>
              <p>Competitive gaming: TN for speed. Standard gaming: IPS or VA for color balance. Professional gaming: IPS for quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Are curved monitors worth it?</h3>
              <p>For gaming and immersion, many prefer them. For productivity and multi-monitor setups, flat monitors are better. It's preference-based.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Should I buy a monitor from a well-known brand?</h3>
              <p>Generally yes. Established brands offer better warranty support, quality control, and resale value. Budget brands can work but have fewer guarantees.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
