import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        menu: fileURLToPath(new URL('./menu.html', import.meta.url)),
        order: fileURLToPath(new URL('./order.html', import.meta.url)),
        reservation: fileURLToPath(new URL('./reservation.html', import.meta.url)),
        story: fileURLToPath(new URL('./story.html', import.meta.url)),
        gallery: fileURLToPath(new URL('./gallery.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
      },
    },
  },
});





// import { defineConfig } from 'vite';
// import { resolve } from 'node:path';


// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         menu: resolve(__dirname, 'menu.html'),
//         order: resolve(__dirname, 'order.html'),
//         reservation: resolve(__dirname, 'reservation.html'),
//         story: resolve(__dirname, 'story.html'),
//         gallery: resolve(__dirname, 'gallery.html'),
//         contact: resolve(__dirname, 'contact.html'),
//       },
//     },
//   },
// });