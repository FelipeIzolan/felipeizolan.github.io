export const logOK = (log: string) => `[ <span class="text-green">OK</span> ] ${log}<br/>`;
export const getSprite = (id: number) => `https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/${'0'.repeat(4 - Math.abs(Math.log10(id) + 1.001))}${id}.png`
export const getSpriteImg = (id?: number, width?: number) => `<img src='${getSprite(id ?? Math.round(Math.random() * 809))}' width=${width ?? 128} /><br/>`;

const createProject = (name: string, description: string, stack: string[]) => 
`
| <span class='text-blue'>name</span>: ${name}
| <span class='text-blue'>description</span>: ${description}
| <span class='text-blue'>stack</span>: ${stack.join(', ')}
--`

export const BIOS = `IzolipeOS - BIOS 0x66.042PC, v010.2434;<br/>` +
                    `Copyright (c) 2004-2024, IzoTec, LTD;<br/>`;

export const HELP = `
<pre class='font-pixel leading-3'>
-- <span class='text-green'>MAIN</span> --
<span class='text-purple'>'ABOUT'</span> - about-me;
<span class='text-purple'>'SKILL'</span> - list my main skills;
<span class='text-purple'>'SOCIAL'</span> - list my social links;
<span class='text-purple'>'PROJECT'</span> - list my favorite projects;
<span class='text-purple'>'IZOFETCH'</span> - list my system-information;

-- <span class='text-green'>UTILS</span> --
<span class='text-purple'>'LS'</span> - list directory files;
<span class='text-purple'>'PKM'</span> - print random pokemon (gen 1-7);
<span class='text-purple'>'HELP'</span> - list all commands;
<span class='text-purple'>'CLEAR'</span> - clear screen;
<span class='text-purple'>'REBOOT'</span> - reboot the operating-system;
</pre>
<br/>
`

export const IZOFETCH = `
<div class='flex items-center'>
<img class='mt-3' src='/izo.png' width=96 />
<pre class='font-pixel ml-8'>
<span class='text-blue'>felipeizolan</span>@<span class='text-orange'>izolipe_os</span>
-------------------------
<span class='text-blue'>OS</span>: Arch Linux x86_64
<span class='text-blue'>Kernel</span>: 6.6.10-arch1-1
<span class='text-blue'>CPU</span>: AMD Ryzen 5 7520U (8) @ 6.73 GHz
<span class='text-blue'>GPU</span>: AMD Mendocino
<span class='text-blue'>RAM</span>: 8 GiB    
-------------------------
</pre>
</div>
<br/>
`;

export const LS = `
-- <span class='text-green'>LS</span> --
<pre class='font-pixel'>
<span class='text-cyan'>felipeizolan.github.io</span><span class='text-blue'>/</span>  
|-- <span class='text-cyan'>assets</span><span class='text-blue'>/</span>
|   |-- index.js
|   \`-- index.css
|-- index.html
|-- TinyUnicode.ttf
\`-- izo.png
</pre>
<br/>
`

export const ABOUT = `
<pre class='font-pixel'>
-- <span class='text-green'>ABOUT-ME</span> --
<span class='text-blue'>name</span>: Felipe Izolan;
<span class='text-blue'>years_old</span>: ${new Date(Date.now() - new Date('2004-4-9').getTime()).getFullYear() - 1970};
<span class='text-blue'>location</span>: Brazil;
<span class='text-blue'>status</span>: Open to work;

I'm a programmer.
I like build things with my keyboard.
I like Computer, Linux, Nature, Food and Games.
</pre>
<br/>
`

export const SKILL = `
<pre class='font-pixel text-left'>
<span class='text-blue'>Languages</span>
|-- C
|-- C++
|-- Lua
|-- JavaScript
|-- TypeScript
|-- HTML
|-- CSS
\`-- Bash

<span class='text-blue'>Database</span>
|-- NoSQL
|   |-- MongoDB
|   |-- Firebase
|   \`-- Redis (or KeyDB)
\`-- SQL
    \`-- MySQL

<span class='text-blue'>Operational-System</span>
|-- Linux
\`-- Windows

<span class='text-blue'>Text-Editor</span>
|-- Visual Studio Code
\`-- NeoVim
</pre>
`

export const SOCIAL = `
<pre class='font-pixel'>
-- <span class='text-green'>SOCIAL</span> --
<span class='text-blue'>Discord</span>: art9335
<span class='text-blue'>GitHub</span>: <a>felipeizolan</a>
<span class='text-blue'>Email</span>: contact@felipeizolan.anonaddy.com
</pre>
<br/>
`

export const PROJECT = `
<pre class='font-pixel'>
-- <span class='text-green'>PROJECT</span> --
${
'|' +
createProject('fishtude', 'Open-source fishing game.', ['C', 'SDL2']) +
createProject('phaser-isometric-engine', 'Grid based isometric-engine.', ['TypeScript', 'Phaser', 'Vite']) +
createProject('spaceworm', 'Casual retro-style indie game', ['Pico-8', 'Lua']) + 
createProject('lipoide.nvim', 'My neovim colorscheme.', ['Neovim', 'Lua']) 
}
</pre>
<br/>
`
