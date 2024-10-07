import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'containers': path.resolve(__dirname, './src/containers'),
      'routers': path.resolve(__dirname, './src/routers'),
      'images': path.resolve(__dirname, './src/images'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'shared': path.resolve(__dirname, './src/shared'),
      'utils': path.resolve(__dirname, './src/utils'),
      'data': path.resolve(__dirname, './src/data'),
      'contains': path.resolve(__dirname, './src/contains'),
    }
  }
})
