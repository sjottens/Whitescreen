// components/hardware/tool-cards.tsx - Card grid linking to the hardware tests.
// Used by "Other tests" on each tool page, the homepage and the 404 page.

import Link from 'next/link';
import { HARDWARE_TOOLS, type HardwareToolId } from '@/lib/hardware-tools';
import ToolIcon from './tool-icon';

interface ToolCardsProps {
  /** Tool to leave out (the page you're on). */
  exclude?: HardwareToolId;
  /** Heading level of the card titles, so the outline stays valid on every page. */
  headingLevel?: 'h2' | 'h3';
}

export default function ToolCards({ exclude, headingLevel = 'h3' }: ToolCardsProps) {
  const Heading = headingLevel;
  const tools = HARDWARE_TOOLS.filter((tool) => tool.id !== exclude);

  return (
    <ul className="grid list-none gap-4 pl-0 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <li key={tool.id} className="mb-0">
          <Link
            href={tool.path}
            className="group flex h-full gap-4 rounded-xl border border-slate-700 bg-slate-900/60 p-5 text-slate-100 transition-colors hover:border-[#00DC82]/60 hover:text-slate-100 focus-ring"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#00DC82]/10 text-[#00DC82]">
              <ToolIcon id={tool.id} />
            </span>
            <span>
              <Heading className="mb-1 break-normal text-lg font-semibold leading-snug md:text-lg group-hover:text-[#00DC82]">
                {tool.name}
              </Heading>
              <span className="block text-sm leading-relaxed text-slate-300">{tool.blurb}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
