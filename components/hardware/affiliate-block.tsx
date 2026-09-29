// components/hardware/affiliate-block.tsx - Affiliate recommendations under a
// tool. Hidden entirely until lib/affiliates.ts has an enabled product with a URL.

import { getAffiliates, AFFILIATES } from '@/lib/affiliates';

interface AffiliateBlockProps {
  tool: keyof typeof AFFILIATES;
  heading: string;
  text: string;
}

export default function AffiliateBlock({ tool, heading, text }: AffiliateBlockProps) {
  const products = getAffiliates(tool);
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="affiliate-heading" className="container-sm mt-12">
      <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 md:p-6">
        <h2 id="affiliate-heading" className="mb-2 text-2xl md:text-2xl">
          {heading}
        </h2>
        <p className="mb-5 text-slate-300">{text}</p>
        <ul className="list-none space-y-3 pl-0">
          {products.map((product) => (
            <li key={product.url} className="mb-0">
              <a
                href={product.url}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="block rounded-lg border border-slate-700 p-4 transition-colors hover:border-[#00DC82]/60 focus-ring"
              >
                <span className="block font-semibold text-slate-100">{product.name}</span>
                {product.description && (
                  <span className="mt-1 block text-sm text-slate-300">{product.description}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate-400">
          Affiliate links: we may earn a commission if you buy through them, at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
