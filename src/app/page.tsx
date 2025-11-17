import { db } from "~/server/db";

const mockUrls = [
  "https://nojaa5ntrm.ufs.sh/f/q774PQV5VEswb0s9HEQX06DlCckLthAabznS1QTsmIx895yY",
  "https://nojaa5ntrm.ufs.sh/f/q774PQV5VEswxFG6Jaqoalj0mWU3vkIqFTLy6szbiK4C9BQw",
  "https://nojaa5ntrm.ufs.sh/f/q774PQV5VEswoZqx14b9Xw5lpjKef4okdJaZYV23cUN9v6gD",
  "q774PQV5VEsw7OlCACQXV8tBl4ukMEcKAwz0RP93Tg2brSQj",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post, index) => (
          <div key={index}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
