/** @type {import('next').NextConfig} */
 
import withPWA from 'next-pwa';
 
const config = {
  cacheOnFrontEndNav: true,
  reloadOnOnline:true,
  swcMinify: true,
  disable:false,
  workboxOptions:{
    disableDevLogs:true
  }
};
 
const nextConfig = withPWA({
  dest: 'public',
})(
  config
);
 
export default nextConfig;
