import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const contentType = process.env.CONTENTFUL_CONTENT_TYPE;

if (!spaceId || !accessToken) {
  throw new Error(
    'Missing Contentful credentials. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in your .env file.'
  );
}

if (!contentType) {
  throw new Error(
    'Missing Contentful content type. Please set CONTENTFUL_CONTENT_TYPE in your .env file.'
  );
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export { contentType };
