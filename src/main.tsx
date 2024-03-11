import './index.css';
import 'virtual:uno.css';

import { render } from 'preact';
import { useState } from 'preact/hooks';

import Boot from './pages/boot';
import Terminal from './pages/terminal';
import UI from './pages/ui';

const Main = () => {
  const [page, setPage] = useState<'boot' | 'terminal' | 'ui'>('boot');

  if (page == 'boot') return <Boot setPage={setPage} />;
  if (page == 'terminal') return <Terminal setPage={setPage} />;
  if (page == 'ui') return <UI setPage={setPage} />;

  return <p></p>;
}

render(<Main/>, document.getElementById('app')!);



