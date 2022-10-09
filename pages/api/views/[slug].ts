import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '~/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug = req.query.slug.toString();
  switch(req.method) {
    case 'GET': {
      const post = await prisma.posts.findUnique({
        where: {
          slug,
        }
      });
      res.status(200).json({
        views: post?.views || 0
      })
      break;
    }
    case 'POST': {
      const post = await prisma.posts.upsert({
        where: {
          slug
        },
        create: {
          slug,
        },
        update: {
          views: {
            increment: 1,
          }
        }
      })
      res.status(200).json({
        views: post.views,
      })
      break;
    }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).send(`Method ${req.method} Not Allowed`);
  }
}