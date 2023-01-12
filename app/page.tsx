import { Inter } from '@next/font/google';
import Image from 'next/image';
import styles from './page.module.scss';
import { TechList, type Technology } from './TechList';

const inter = Inter({ subsets: ['latin'] });

const TECH_ITEMS: Technology[] = [
  ['Rust', '/icons/rust.svg'],
  ['React', '/icons/react.svg'],
  ['TypeScript', '/icons/typescript.svg'],
  ['Node.js', '/icons/nodejs.svg'],
  ['.NET', '/icons/dotnet.svg'],
  ['Python', '/icons/python.svg'],
];

const LINKEDIN_URL = 'https://www.linkedin.com/in/zach-riel-420b78a2/';
const GITHUB_URL = 'https://github.com/zmrl010';

export default function Home() {
  return (
    <>
      <header className={styles.header} style={inter.style}>
        <h1>zmrl</h1>
        <p>Profile of Zach Riel</p>
        <p>Full Stack Software Developer</p>
        <div className={styles.links}>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn icon"
              width={45}
              height={45}
            />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <Image
              src="/icons/github.svg"
              alt="GitHub icon"
              width={45}
              height={45}
            />
          </a>
        </div>
      </header>
      <main className={styles.main} style={inter.style}>
        <p>Tech Interests</p>
        <TechList items={TECH_ITEMS} />
      </main>
    </>
  );
}
