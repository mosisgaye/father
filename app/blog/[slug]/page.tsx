import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import '@/app/globals.css';

interface PostPageProps {
  params: { slug: string };
}

// Fonction pour récupérer les données du post
async function getPostData(slug: string) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    content,
  };
}

// Composant de la page
export default async function PostPage({ params: { slug } }: PostPageProps) {
  const { frontmatter, content } = await getPostData(slug);

  return (
    <div>
      {frontmatter.coverImage && (
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill // Utilise 'fill' au lieu de 'layout' pour Next.js 13+
            style={{ objectFit: 'cover' }} // Remplace objectFit avec style
            className="absolute top-0 left-0 z-0" // Placer l'image en arrière-plan
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg relative z-10">
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-gray-500 mb-8">{frontmatter.date}</p>

        <div className="prose lg:prose-xl mx-auto my-8 text-gray-800">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

// Nouvelle méthode pour générer les chemins de manière statique
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}