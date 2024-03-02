import { StateUpdater, useEffect, useState } from "preact/hooks";
import { BIOS, getSpriteImg, logOK } from "../utils";

type BootProps = {
  setPage: StateUpdater<'boot' | 'terminal' | 'ui'>;
};

const Boot = (props: BootProps) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const steps = [
      { text: BIOS, delay: 200 },
      { text: getSpriteImg(), delay: 200 },
      { text: 'Loading <span class="text-orange">Izo-Kernel</span>...;<br/>', delay: 200 },
      { text: [logOK('processor'), logOK('input/output'), logOK('memory'), logOK('disk'), logOK('device')].join(''), delay: 50 },
      { text: 'Loading <span class="text-orange">Daemons</span>...;<br/>', delay: 200 },
      { text: [logOK('systemd'), logOK('kthread'), logOK('kworker'), logOK('network'), logOK('pipewire'), logOK('dm'), logOK('wm')].join(''), delay: 50 },
      { text: 'Loading <span class="text-orange">Shell</span>...;<br/>', delay: 200 },
      { text: [logOK('bash'), logOK('environment')].join(''), delay: 50 },
      { text: `date: ${new Date().toString()}<br/>screen: ${window.screen.width}x${window.screen.height}<br/>lang: ${window.navigator.language}<br/>`, delay: 50 },
      { text: 'Opening <span class="text-orange">OS</span>...;<br/>', delay: 200 },
      { text: logOK('everything is ok!'), delay: 50 }
    ];

    let time = 0;
    steps.forEach(step => {
      setTimeout(() => setText(prevText => prevText + step.text), time += step.delay);
    });

    setTimeout(() => props.setPage('terminal'), time + 850);
  }, []);

  return <p dangerouslySetInnerHTML={{ __html: text }} className='ml-10 leading-3'/>;
  
};

export default Boot;
