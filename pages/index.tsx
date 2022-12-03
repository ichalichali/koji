import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { FooterLinks } from '../components/Footer/FooterLink';

export default function HomePage() {
  return (
    // eslint-disable-next-line linebreak-style
    <>
      <Welcome />
      <ColorSchemeToggle />
      <FooterLinks data={[]} />
    </>
  );
}
