import { defineConfig, presetUno } from "unocss";
import { presetExtra } from "unocss-preset-extra";

export default defineConfig({
  presets: [
    presetUno(),
    presetExtra()
  ], 
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${parseInt(num) * 2}px` })],
    [/^ml-([\.\d]+)$/, ([_, num]) => ({ 'margin-left': `${parseInt(num) * 2}px` })],
    [/^mr-([\.\d]+)$/, ([_, num]) => ({ 'margin-right': `${parseInt(num) * 2}px` })],
    [/^mb-([\.\d]+)$/, ([_, num]) => ({ 'margin-bottom': `${parseInt(num) * 2}px` })],
    [/^mt-([\.\d]+)$/, ([_, num]) => ({ 'margin-top': `${parseInt(num) * 2}px` })],

    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${parseInt(num) * 2}px` })],
    
    [/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${parseInt(num)}%` })],
    [/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${parseInt(num)}%` })],
  ],
  safelist: [
    'flex',
    'items-center',
    'text-blue',
    'text-cyan',
    'mt-5',
    'ml-8'
  ]
})
