import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { axiosConfig } from "../../services/githubService";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q, sort, order } = req.query;

  const response = await axios.get(
    `search/repositories?q=${q}&sort=${sort}&order=${order}`,
    axiosConfig
  );

  res.json(response.data);
};
