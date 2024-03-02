export const getSprite = (id: number) => `https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/${'0'.repeat(4 - Math.abs(Math.log10(id) + 1.001))}${id}.png`
export const getSpriteImg = (id?: number, width?: number) => `<img src='${getSprite(id ?? Math.round(Math.random() * 809))}' width=${width ?? 128} /><br/>`;

export const logOK = (log: string) => `[ <span class="text-green">OK</span> ] ${log}<br/>`;

export const BIOS = `IzolipeOS - BIOS 0x66.042PC, v010.2434;<br/>` +
                    `Copyright (c) 2004-2024, IzoTec, LTD;<br/>`;

export const HELP = `
<span class='text-purple'>'UI'</span> - change to user-interface mode;<br/>
<span class='text-purple'>'LS'</span> - list directory files;<br/>
<span class='text-purple'>'PKM'</span> - print random pokemon (gen 1-7);<br/>
<span class='text-purple'>'HELP'</span> - list all commands;<br/>
<span class='text-purple'>'CLEAR'</span> - clear screen;<br/>
<span class='text-purple'>'REBOOT'</span> - reboot the operating-system;<br/>
<span class='text-purple'>'IZOFETCH'</span> - print my system-information;<br/>
<span class='text-purple'>'SHUTDOWN'</span> - shutdown the operating-system;<br/>
<br/>
`

export const IZOFETCH = `
<pre class='font-pixel'>
<span class='text-blue'>felipeizolan</span>@<span class='text-orange'>izolipe_os</span>
---------------------
<span class='text-blue'>OS</span>: Arch Linux x86_64
<span class='text-blue'>Kernel</span>: 6.6.10-arch1-1
<span class='text-blue'>CPU</span>: AMD Ryzen 5 7520U (8) @ 6.73 GHz
<span class='text-blue'>GPU</span>: AMD Mendocino
<span class='text-blue'>RAM</span>: 8 GiB    
---------------------
</pre>
<br/>
`;

export const LS = `
<pre class='font-pixel'>
felipeizolan.github.io<span class='text-blue'>/</span>  
|-- assets<span class='text-blue'>/</span>
|   |-- index.js
|   \`-- index.css
|-- index.html
\`-- Minimal4.ttf
</pre>
<br/>
`
