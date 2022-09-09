import { collection, getDocs } from "firebase/firestore";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { db } from "../utils/firebase";

type Item = { id: string; name: string };

const Home: NextPage = () => {
  const [items, setItems] = useState<Item[]>([]);

  const query = useCallback(async () => {
    const querySnap = await getDocs(collection(db, "test"));
    const items: Item[] = [];
    querySnap.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() } as Item);
    });
    setItems(items);
  }, []);

  useEffect(() => {
    query();
  }, [query]);

  return (
    <div>
      <Head>
        <title>W.accountant - test db</title>
        <meta name="description" content="Accountant application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>W.accountant</h1>
      <h2>test database connection</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            #{i.id} {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
