import { Box } from '@mui/material';

import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Main from '../components/Main';

export default function Home() {
  return (
    <main>
      <Main />
      <Skills />
      <Projects />
    </main>
  );
}
