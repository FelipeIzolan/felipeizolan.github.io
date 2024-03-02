import './index.css';
import 'virtual:uno.css';

import { render } from 'preact';
import { useState } from 'preact/hooks';

import Ui from './pages/ui';
import Boot from './pages/boot';
import Terminal from './pages/terminal';

const Main = () => {
  const [page, setPage] = useState<'boot' | 'terminal' | 'ui'>('boot');

  if (page == 'boot') return <Boot setPage={setPage} />;
  if (page == 'terminal') return <Terminal setPage={setPage} />;
  if (page == 'ui') return <Ui setPage={setPage} />;

  return <p></p>;
}

render(<Main/>, document.getElementById('app')!);



