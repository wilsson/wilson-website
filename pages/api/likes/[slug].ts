import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '~/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Can hash the ip of your users to protect their data.
  const ipAddress = req.headers['x-forwarded-for'] || '0.0.0.0';
  const slug = req.query.slug.toString();

  switch(req.method) {
    case 'GET': {
      const [ post, userLikes ] = await Promise.all([
        prisma.posts.findUnique({
          where: {
            slug,
          },
        }),
        prisma.usersLikes.findFirst({
          where: {
            ip: ipAddress.toString(),
            slug,
          }
        }),
      ]);

      res.json({
        'likes': post?.likes || 0,
        'userLike': !!userLikes,
      });
      break;
    }
    case 'POST': {
      const user = await prisma.usersLikes.findFirst({
        where: {
          ip: ipAddress.toString(),
          slug,
        },
      });

      if (!user) {
        await prisma.usersLikes.create({
          data: {
            ip: ipAddress.toString(),
            slug,
          }
        });
        
        await prisma.posts.upsert({
          where: { slug },
          create: { slug },
          update: {
            likes: {
              increment: 1,
            },
          },
        });
      }
  
      res.status(200).json({
        ok: true
      })
      break;
    }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).send('Method Not Allowed');
  }
}