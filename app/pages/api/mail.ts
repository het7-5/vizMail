import { NextResponse } from 'next/server'
import axios from 'axios'
// fetch the inbox

const res = await axios.get('https://api.testmail.app/api/json', {
  params: {
    apikey: process.env.MAIL_KEY,
    namespace: 'biscw'
  }
});
console.log(res.data);

pages/api/hello.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from Next.js API!' });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}

