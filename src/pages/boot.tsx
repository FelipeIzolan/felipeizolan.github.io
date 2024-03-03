import { StateUpdater, useEffect, useState } from "preact/hooks";
import { BIOS, getSpriteImg, logOK } from "../utils";

type BootProps = {
  setPage: StateUpdater<'boot' | 'terminal' | 'ui'>;
};

type Step = [string, number];

const Boot = (props: BootProps) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    let time = 0;
    let steps: Step[] = [
      [BIOS, 100],
      [getSpriteImg(), 100],
      ['Loading <span class="text-orange">Izo-Kernel</span>.', 100 ],
      ['.', 50],
      ['.;<br/>', 50],
      [logOK('CPU'), 100],
      [logOK('GPU'), 100],
      [logOK('Input/Output'), 50],
      [logOK('Memory'), 100],
      [logOK('Disk'), 100],
      [logOK('Device') + '<br/>', 100],
      ['Loading <span class="text-orange">Daemons</span>.', 100],
      ['.', 50],
      ['.;<br/>', 50],
      [logOK('systemd'), 100],
      [logOK('kthread'), 100],
      [logOK('kworker'), 100],
      [logOK('network'), 100],
      [logOK('pipewire'), 100],
      [logOK('dm'), 50],
      [logOK('wm') + '<br/>', 50],
      ['Loading <span class="text-orange">Shell</span>.', 100],
      ['.', 50],
      ['.;<br/>', 50],
      [logOK('bash'), 100],
      [logOK('environment') + '<br/>', 100],
      [`date: ${new Date().toString()}<br/>screen: ${window.screen.width}x${window.screen.height}<br/>lang: ${window.navigator.language}<br/><br/>`, 50],
      ["Hello, World!", 100],
    ];

    for (let [text, delay] of steps)
      setTimeout(() => setText(prevText => prevText + text), time += delay);

    setTimeout(() => props.setPage('terminal'), time + 700);
    // time == 3000;
  }, []);

  return <p dangerouslySetInnerHTML={{ __html: text }} className='ml-10 leading-3'/>;
  
};

export default Boot;
