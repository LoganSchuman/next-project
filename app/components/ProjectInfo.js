import Link from 'next/link';

export default function ProjectInfo() {
  const repoUrl = "https://github.com/LoganSchuman/next-project";

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Final Project Idea</h3>
      <p>
        My web topic for the final project is to create a website for a horse riding business for a mutual friend between my project partner and I.
        I'd like my project to showcase this by making a full stack applicaiton using Next.js. We will most likely be using React components for the UI as well as phtoo galleries, contact information, etc. Next.js will be very important for the backend.
      </p>
      
      <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
        Link to This Assignment's GitHub Repo
      </Link>
    </div>
  );
}
