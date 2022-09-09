import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../utils/firebase-admin";

type Item = { id: string; name: string };

type Data = {
  items: Item[];
};

type DataError = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | DataError>
) {
  const ref = db.collection("test");
  const snap = await ref.get();

  if (snap.empty) {
    return res.status(404).json({ error: "No matching documents" });
  }

  let items: Data["items"] = [];
  snap.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() } as Item);
  });

  res.status(200).json({ items });
}
