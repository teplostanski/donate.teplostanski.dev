import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import PrettyModuleClassnames from 'vite-plugin-pretty-module-classnames';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), PrettyModuleClassnames()],
  base: './',
});
