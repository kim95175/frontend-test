import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    // 여기에서는 간단하게 id를 그대로 반환합니다.
    // 실제로는 여기에서 데이터베이스 등에서 데이터를 가져와야 합니다.
    res.status(200).json({ id });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};