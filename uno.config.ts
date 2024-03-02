import { 
  defineConfig,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno()
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
    'border', 
    'border-solid',
    'border-white',
    'text-yellow',
    'text-blue'
  ]
})
