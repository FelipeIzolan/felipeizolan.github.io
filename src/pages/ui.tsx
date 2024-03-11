import { StateUpdater } from "preact/hooks";

import ASCII from "../components/ascii";
import Project from "../components/project";

import { SKILL, logOK } from "../components/terminal";

type UIProps = {
  setPage: StateUpdater<'boot' | 'terminal' | 'ui'>;
};

const UI = (props: UIProps) => {
  return (
  <>
  <nav class='flex justify-center'>
    <ul class='list-none flex mb-1'>
      <li class='mr2 ml2'><a class='text-white hover:text-green' href="#home">Home</a></li>
      <li class='mr2 ml2'><a class='text-white hover:text-green' href="#projects">Projects</a></li>
      <li class='mr2 ml2'><a class='text-white hover:text-green' href="#skills">Skills</a></li>
    </ul>
  </nav>
  <hr class='border-top mt-1 mb-7'/>
  <main class='mt-2 flex justify-center items-center flex-col'>
    <ASCII/>
    <p class='leading-3 text-center' id='home'>
      <span class='text-5xl text-green'>Felipe Izolan</span><br/>
      <span>The pseudo-best programmer in the world.</span>
    </p>
    <p class='leading-3 text-center mt-32' id='projects'>
      <span class='text-5xl text-green'>Projects</span><br/>
      <p class='mb-4' dangerouslySetInnerHTML={{__html: logOK('My cool projects and stuff.')}}/>
      <Project name='fishtude' description="Fishing game." stack={['C', 'SDL2']} url="https://github.com/felipeizolan/fishtude"/>
      <Project name='phaser-isometric-engine' description="Grid-based engine." stack={['TypeScript', 'Phaser', 'Vite']} url="https://github.com/felipeizolan/phaser-isometric-engine"/>
      <Project name='ifetch' description="pokemon + neofetch" stack={['Bash', 'Gum']} url="https://github.com/felipeizolan/ifetch"/>
      <Project name='lipoide.nvim' description="NeoVim colorscheme" stack={['Lua']} url="https://github.com/felipeizolan/lipoide.nvim"/>
      <Project name='tiny-streamer' description="PNGTuber software" stack={['C', 'Miniaudio', 'Kit']} url="https://github.com/felipeizolan/tiny-streamer"/>
      <small class='opacity-40'>See more in <a class='underline text-white' href='https://github.com/FelipeIzolan?tab=repositories' target='_blank' rel='noopener noreferrer'>GitHub</a>...</small>
    </p>
    <p class='leading-3 text-center mt-32' id='skills'>
      <span class='text-5xl text-green'>Skills</span><br/>
      <p dangerouslySetInnerHTML={{__html: logOK('My bug-killing skills.')}}/>
      <div dangerouslySetInnerHTML={{__html: SKILL}}/>
    </p>
  </main>
  <hr class='border-top mb-1 mt-39'/>
  <footer class='leading-4 flex justify-between items-center'>
    <p>
      Discord: art9335 <br/>
      GitHub: felipeizolan <br/>
      <a class='text-white' href='mailto:contact@felipeizolan.anonaddy.com'>Email: contact@felipeizolan.anonaddy.com</a>
    </p>
    <p onClick={() => props.setPage('terminal')} class='mb-3 hover:text-green cursor-pointer'>{'>'} Terminal {'<'}</p>
  </footer>
  </>
  );
}

export default UI;
