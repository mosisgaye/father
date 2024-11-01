import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';


// Interface voor de props definiëren
interface BlogPageProps {
  limit?: number; // De 'limit' prop is optioneel
}

export default function BlogPage({ limit }: BlogPageProps) {
  // Gebruik van process.cwd() om ervoor te zorgen dat het pad correct is
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  // Pas de limiet toe als deze is ingesteld
  const limitedFiles = limit ? files.slice(0, limit) : files;

  const posts = limitedFiles.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'posts', fileName),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return (
    <div>
      
      <div className="max-w-7xl mx-auto py-16 px-6 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Onze tips voor het succesvol afronden van je afstandsonderwijs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <Link href={`/blog/${slug}`}>
                {frontmatter.coverImage && (
                  <Image
                    src={frontmatter.coverImage}
                    alt={frontmatter.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover mb-4 rounded-t-lg"
                  />
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500">
                    Gepubliceerd op {frontmatter.date}
                  </p>
                  <h2 className="text-lg font-bold hover:underline mt-2 text-gray-900">
                    {frontmatter.title}
                  </h2>
                  <span className="inline-block bg-teal-500 text-white text-xs px-2 py-1 rounded-full mt-2">
                    {frontmatter.category}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {limit && (
          <div className="flex justify-center mt-12">
            <Link href="/blog">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300">
                Alle artikelen bekijken
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}