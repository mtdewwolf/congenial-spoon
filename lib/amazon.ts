export function generateAmazonAffiliateLink(asin: string): string {
  const associateTag = process.env.AMAZON_ASSOCIATE_TAG;
  if (!associateTag) {
    throw new Error('Amazon Associate Tag is not configured');
  }

  return `https://www.amazon.com/dp/${asin}?tag=${associateTag}`;
}

export function extractAsinFromUrl(url: string): string | null {
  const match = url.match(/\/dp\/([A-Z0-9]{10})/);
  return match ? match[1] : null;
} 