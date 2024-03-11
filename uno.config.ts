import { defineConfig, presetUno, presetMini } from "unocss";
import { presetExtra } from "unocss-preset-extra";

export default defineConfig({
  presets: [
    presetUno(),
    presetExtra(),
    presetMini()
  ], 
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${parseInt(num) * 2}px` })],
    [/^ml-([\.\d]+)$/, ([_, num]) => ({ 'margin-left': `${parseInt(num) * 2}px` })],
    [/^mr-([\.\d]+)$/, ([_, num]) => ({ 'margin-right': `${parseInt(num) * 2}px` })],
    [/^mb-([\.\d]+)$/, ([_, num]) => ({ 'margin-bottom': `${parseInt(num) * 2}px` })],
    [/^mt-([\.\d]+)$/, ([_, num]) => ({ 'margin-top': `${parseInt(num) * 2}px` })],
    ['leading-3', {'line-height': '12.5px'}],

    ['border-top', {'border-top': '2px white dotted;', 'border-bottom': 'hidden;'}],
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${parseInt(num) * 2}px` })],
    [/^pt-([\.\d]+)$/, ([_, num]) => ({ 'padding-top': `${parseInt(num) * 2}px` })],
    [/^pb-([\.\d]+)$/, ([_, num]) => ({ 'padding-bottom': `${parseInt(num) * 2}px` })],
    
    [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${parseInt(num)}%` })],
    [/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${parseInt(num)}%` })],
    
  ],
  safelist: [
    'flex',
    'items-center',
    'text-blue',
    'text-cyan',
    'text-red',
    'text-left',
    'text-yellow',
    'mt-3',
    'mt-1',
    'ml-8'
  ]
})
