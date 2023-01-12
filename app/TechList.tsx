import Image from 'next/image';
import styles from './TechList.module.scss';

export type Technology = [name: string, imgUrl: string];

type Props = {
  items: Technology[];
};

export function TechList({ items }: Props) {
  return (
    <ul className={styles.root}>
      {items.map(([name, imgUrl]) => (
        <li key={name}>
          <Image src={imgUrl} alt={`${name} logo`} width={32} height={32} />
          {name}
        </li>
      ))}
    </ul>
  );
}
