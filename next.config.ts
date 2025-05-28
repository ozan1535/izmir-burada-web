import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // Ensure to specify the protocol (http or https)
        hostname: "namazvakti.diyanet.gov.tr",
      },
      {
        protocol: "https", // Ensure to specify the protocol (http or https)
        hostname: "kultursanat.izmir.bel.tr",
      },
      {
        protocol: "https", // Ensure to specify the protocol (http or https)
        hostname: "pppfcbzfmfujxhtjiggr.supabase.co",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
