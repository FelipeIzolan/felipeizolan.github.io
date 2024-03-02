import { StateUpdater, useEffect, useRef, useState } from "preact/hooks";
import { getSpriteImg, IZOFETCH, HELP, LS } from "../utils"; 

type TerminalProps = {
  setPage: StateUpdater<'boot' | 'terminal'>;
};

const Terminal = (props: TerminalProps) => {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const command: { [key: string]: () => unknown } = {
    ls: () => setText(text => text + LS),
    pkm: () => setText(text => text + getSpriteImg()),
    help: () => setText(text => text + HELP),
    clear: () => setText(''),
    reboot: () => props.setPage('boot'),
//    projects: () => setText(text => text + PROJECTS),
    izofetch: () => setText(text => text + IZOFETCH),
    shutdown: () => { window.document.body.innerHTML = ''; history.back() },
  }

  const inputHandler = function (value: string, ev: KeyboardEvent) {
    if (ev.key == 'Enter' && value != '')
      (value.toLowerCase() in command) ?
        (command[value.toLowerCase()](), inputRef.current!.value = '') : 
        setText(text => text + `bash: ${value}: command not found<br/><br/>`); 
  }

  useEffect(() => {
    setText(IZOFETCH);
    setText(text => text + 'Welcome to my portfolio!<br/>');
    setText(text => text + 'Type <span class=\'text-purple\'>\'HELP\'</span> - list all commands;<br/>');
    setText(text => text + 'Type <span class=\'text-purple\'>\'UI\'</span> - change to user-interface mode;<br/><br/>');

    inputRef.current!.focus();
  }, []);

  return (
  <>
  <p class='leading-3' dangerouslySetInnerHTML={{ __html: text }} />
  <label class='text-green'>{'>'}</label>
  <input 
    class='w-90 ml-2 input leading-3 bg-transparent border-none text-white font-pixel text-3xl sm:text-4xl outline-none'
    placeholder='type a command'
    type='text' 
    ref={inputRef} 
    onKeyDown={(ev: KeyboardEvent) => inputHandler(inputRef.current!.value, ev)}
  />
  </>
  );
}

export default Terminal;
