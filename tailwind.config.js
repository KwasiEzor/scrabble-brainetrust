/** @type {import('tailwindcss').Config} */

import FlowbitePlugin from "flowbite/plugin"

export default {

  content: [
     './src/**/*.{js,jsx,ts,tsx}',
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      screens:{
        "xs":"480px"
      },
    extend: {
    
    },
  },
  plugins: [
    FlowbitePlugin
  ],
}
