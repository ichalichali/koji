import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    // eslint-disable-next-line linebreak-style
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
