// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "ghazi arn" });
}
const url = "https://leetcode-api.p.rapidapi.com/user/bharathkalyans";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "733ab49e9dmsh54179b72edc61dbp15f8f8jsncb2bc7042714",
    "X-RapidAPI-Host": "leetcode-api.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
