import path from 'path'

export default {
  root: path.resolve(__dirname), // Carpeta donde alojamos el archivo main.js
  base: './',
  build: {
    rollupOptions: {
        input: {
            main: path.resolve(__dirname, 'index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    port: 8080,
    hot: true
  }
}