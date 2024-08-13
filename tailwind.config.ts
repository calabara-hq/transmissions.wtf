import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fadeIn': 'fadeIn 150ms ease-in-out',
        'bigPhoto': 'bigPhoto 2s ease-in-out',
        'nogglePhoto': 'nogglePhoto 2.8s ease-in-out',
      }
    },
    keyframes: {
      fadeIn: {
        '0%': {
          opacity: '0'
        },
        '100%': {
          opacity: '1'
        }
      },
      bigPhoto: {
        '0%': {
          opacity: '0'
        },
        '50%': {
          opacity: '1'
        },
        '100%': {
          opacity: '0'
        }
      },
      nogglePhoto: {
        '0%': {
          opacity: '0'
        },
        '50%': {
          opacity: '0'
        },
        '100%': {
          opacity: '1'
        }
      },
    }
  },
  plugins: [],
};
export default config;
