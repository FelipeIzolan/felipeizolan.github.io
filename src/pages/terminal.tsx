import { StateUpdater, useEffect, useRef, useState } from "preact/hooks";
import { getSpriteImg, IZOFETCH, HELP, LS, ABOUT, SKILL, SOCIAL, PROJECT } from "../components/terminal"; 

type TerminalProps = {
  setPage: StateUpdater<'boot' | 'terminal' | 'ui'>;
};

const Terminal = (props: TerminalProps) => {
  const [text, setText] = useState<string>('');
  
  const pRef = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const command: { [key: string]: () => void } = {
    ui: () => props.setPage('ui'),
    ls: () => setText(text => text + LS),
    pkm: () => setText(text => text + getSpriteImg()),
    help: () => setText(text => text + HELP),
    skill: () => setText(text => text + '-- <span class="text-green">SKILL</span> --' + SKILL + '<br/>'),
    about: () => setText(text => text + ABOUT),
    social: () => setText(text => text + SOCIAL),
    project: () => setText(text => text + PROJECT),
    izofetch: () => setText(text => text + IZOFETCH),
    clear: () => setText(''),
    reboot: () => props.setPage('boot'),
  }

  const inputHandler = function (value: string, ev: KeyboardEvent) {
    if (ev.key == 'Enter' && value != '') {
      let input = value.toLowerCase();

      (input in command) ?
        command[input]() : 
        setText(text => text + `bash: ${value}: command not found<br/>`);

      inputRef.current!.value = '';
    }
  }

  useEffect(() => {
    setText(() =>
    `
    ${IZOFETCH}
    Welcome to my portfolio!<br/>
    Type <span class=\'text-purple\'>\'HELP\'</span> - list all commands;<br/>
    Type <span class=\'text-purple\'>\'UI\'</span> - change to user-interface mode;<br/><br/>
    ${ABOUT}
    `); 

    inputRef.current!.focus();
  }, []);

  useEffect(() => { inputRef.current!.scrollIntoView(false) }, [text]);

  return (
  <>
  <p class='leading-3' ref={pRef} dangerouslySetInnerHTML={{ __html: text }} />
  <label class='text-green'>{'>'}</label>
  <input 
    class='w-90 ml-2 input bg-transparent border-none text-white font-pixel text-3xl outline-none'
    placeholder='Type a command'
    spellcheck={false}
    type='text' 
    ref={inputRef} 
    onKeyDown={(ev: KeyboardEvent) => inputHandler(inputRef.current!.value, ev)}
  />
  </>
  );
}

export default Terminal;
