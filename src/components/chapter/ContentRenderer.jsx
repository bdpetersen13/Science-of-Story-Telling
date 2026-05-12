import Callout from '../common/Callout';
import Tabs from '../common/Tabs';

/**
 * Renders content blocks with Apple-quality typography and spacing.
 */
export default function ContentRenderer({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <ContentBlock key={i} block={block} />
      ))}
    </div>
  );
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'text':
      return <MarkdownText text={block.value} />;

    case 'callout':
      return <Callout variant={block.variant}>{block.value}</Callout>;

    case 'quote':
      return (
        <blockquote className="relative pl-6 py-4 my-8">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-blue-100 to-blue-50" />
          <p className="text-[18px] text-gray-130 leading-relaxed italic">
            “{block.value}”
          </p>
          {block.attribution && (
            <footer className="mt-3 text-[14px] font-semibold text-gray-50 not-italic tracking-tight">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );

    case 'example':
      return (
        <div className="surface-card-subtle p-6 my-6">
          {block.title && (
            <h4 className="text-title text-[14px] text-gray-130 mb-4">{block.title}</h4>
          )}
          <ul className="space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-gray-100 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-100/40 shrink-0" />
                <MarkdownText text={item} inline />
              </li>
            ))}
          </ul>
        </div>
      );

    case 'list':
      return (
        <ul className="space-y-3 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] text-gray-130 leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-100 shrink-0" />
              <MarkdownText text={item} inline />
            </li>
          ))}
        </ul>
      );

    case 'tabs':
      return <Tabs tabs={block.tabs} />;

    default:
      return null;
  }
}

/** Inline markdown: **bold**, *italic*, `code`, ## headings */
function MarkdownText({ text, inline = false }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|##\s.+)/g);
  const rendered = parts.map((part, i) => {
    if (part.startsWith('## ')) {
      return (
        <h2 key={i} className="text-headline text-[22px] text-gray-160 mt-10 mb-4">
          {part.slice(3)}
        </h2>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-gray-160">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="italic">{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="bg-gray-5 px-1.5 py-0.5 rounded-lg text-[14px] font-mono text-blue-130">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });

  if (inline) return <>{rendered}</>;
  return (
    <p className="text-[16.5px] text-gray-130 leading-[1.75] tracking-[-0.01em]">
      {rendered}
    </p>
  );
}
