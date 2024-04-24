/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
};
