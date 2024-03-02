import { StateUpdater, useEffect, useState } from "preact/hooks";
import { BIOS, getSpriteImg, logOK } from "../utils";

type BootProps = {
  setPage: StateUpdater<'boot' | 'terminal' | 'ui'>;
};

const Boot = (props: BootProps) => {
  const [text, setText] = useState<string>('');

  useEffect(() => { 
    let time = 0;

    setTimeout(() => setText(text => text + BIOS), time += 200);
    setTimeout(() => setText(text => text + getSpriteImg()), time += 200);

    setTimeout(() => setText(text => text + 'Loading <span class="text-orange">Izo-Kernel</span>.'), time += 200);
    setTimeout(() => setText(text => text + '.'), time += 200);
    setTimeout(() => setText(text => text + '.;<br/>'), time += 200);
    setTimeout(() => setText(text => text + logOK('processor')), time += 50);
    setTimeout(() => setText(text => text + logOK('input/output')), time += 50);
    setTimeout(() => setText(text => text + logOK('memory')), time += 50);
    setTimeout(() => setText(text => text + logOK('disk')), time += 50);
    setTimeout(() => setText(text => text + logOK('device')), time += 50);

    setTimeout(() => setText(text => text + '<br/>'), time += 50);
    
    setTimeout(() => setText(text => text + 'Loading <span class="text-orange">Daemons</span>.'), time += 200);
    setTimeout(() => setText(text => text + '.'), time += 200);
    setTimeout(() => setText(text => text + '.;<br/>'), time += 200);

    setTimeout(() => setText(text => text + logOK('systemd')), time += 50);
    setTimeout(() => setText(text => text + logOK('kthread')), time += 50);
    setTimeout(() => setText(text => text + logOK('kworker')), time += 50);
    setTimeout(() => setText(text => text + logOK('network')), time += 50);
    setTimeout(() => setText(text => text + logOK('pipewire')), time += 50);
    setTimeout(() => setText(text => text + logOK('dm')), time += 50);
    setTimeout(() => setText(text => text + logOK('wm')), time += 50);
  
    setTimeout(() => setText(text => text + '<br/>'), time += 50);
    
    setTimeout(() => setText(text => text + 'Loading <span class="text-orange">Shell</span>.'), time += 200);
    setTimeout(() => setText(text => text + '.'), time += 200);
    setTimeout(() => setText(text => text + '.;<br/>'), time += 200);

    setTimeout(() => setText(text => text + logOK('bash')), time += 50);
    setTimeout(() => setText(text => text + logOK('environment')), time += 50);

    setTimeout(() => setText(text => text + '<br/>'), time += 50);

    setTimeout(() => setText(text => text + 'date: ' + new Date().toString() + '<br/>'), time += 50);
    setTimeout(() => setText(text => text + 'screen: '+ window.screen.width + 'x' + window.screen.height + '<br/>'), time += 50);
    setTimeout(() => setText(text => text + 'lang: ' + window.navigator.language + '<br/>'), time += 50);

    setTimeout(() => setText(text => text + '<br/>'), time += 50);

    setTimeout(() => setText(text => text + 'Opening <span class="text-orange">OS</span>.'), time += 200);
    setTimeout(() => setText(text => text + '.'), time += 200);
    setTimeout(() => setText(text => text + '.;<br/>'), time += 200);

    setTimeout(() => setText(text => text + logOK('everything is ok!')), time += 50);
    
    setTimeout(() => props.setPage('terminal'), time += 850);
  }, []);

  return <p dangerouslySetInnerHTML={{ __html: text}} class='ml-10 leading-3'/> 
};

export default Boot;
