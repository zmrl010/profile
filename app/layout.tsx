import 'normalize.css';
import './globals.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <head />
      <body>{props.children}</body>
    </html>
  );
}
