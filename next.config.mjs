/**
 * @type {import('next').NextConfig}
 */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  disable:false,
  skipWaiting: true,
  aggressiveFrontEndNavCaching: true,
  swcMinify:true,
  workboxOptions:{
    disableDevLogs: true,
  }

});

export default withPWA({
  // Your Next.js config

});