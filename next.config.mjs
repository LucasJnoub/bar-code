/** @type {import('next').NextConfig} */
import { withPWA } from 'next-pwa';

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
});
