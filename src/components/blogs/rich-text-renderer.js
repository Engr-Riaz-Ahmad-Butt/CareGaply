import React from 'react';
import Image from 'next/image';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './rich-text-renderer.scss';

const RichTextRenderer = ({ content, className = '' }) => {
  if (!content) return null;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
      [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
      [MARKS.CODE]: (text) => (
        <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-3xl font-bold mb-5 mt-7 text-gray-900">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-900">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-xl font-semibold mb-3 mt-5 text-gray-900">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="text-lg font-semibold mb-3 mt-4 text-gray-900">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="text-base font-semibold mb-2 mt-3 text-gray-900">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="text-gray-700 leading-relaxed">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-600 bg-gray-50">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title, description } = node.data.target.fields;
        const url = file?.url;
        const contentType = file?.contentType;

        if (!url) return null;

        if (contentType?.startsWith('image/')) {
          return (
            <div className="my-8">
              <Image
                src={`https:${url}`}
                alt={title || description || 'Blog image'}
                width={file.details?.image?.width || 1200}
                height={file.details?.image?.height || 630}
                className="w-full h-auto rounded-lg shadow-md"
              />
              {(title || description) && (
                <p className="text-sm text-gray-600 text-center mt-2 italic">
                  {title || description}
                </p>
              )}
            </div>
          );
        }

        if (contentType?.startsWith('video/')) {
          return (
            <div className="my-8">
              <video controls className="w-full rounded-lg shadow-md">
                <source src={`https:${url}`} type={contentType} />
                Your browser does not support the video tag.
              </video>
              {(title || description) && (
                <p className="text-sm text-gray-600 text-center mt-2 italic">
                  {title || description}
                </p>
              )}
            </div>
          );
        }

        return (
          <div className="my-4 p-4 bg-gray-100 rounded-lg">
            <a
              href={`https:${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {title || 'Download file'}
            </a>
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className={`rich-text-content ${className}`}>
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default RichTextRenderer;