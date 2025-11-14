import Link from 'next/link';

export default function ProjectInfo() {
  const repoUrl = "https://github.com/LoganSchuman/next-project";

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Final Project Idea</h3>
      <p>
        My web topic for the final project is... [describe your topic].
        I'd like my project to showcase this by... [describe how you will build it].
      </p>
      
      <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
        Link to This Assignment's GitHub Repo
      </Link>
    </div>
  );
}
