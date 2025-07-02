import { Metadata } from "next";

export const metadata: Metadata = {
  title: `[Spacecoin] Airdrop - Come and Play!`,
  description: `Get started with the [Spacecoin] Airdrop.`,
  openGraph: {
    title: '[Spacecoin] Airdrop - Come and Play!',
    description: `Get started with the [Spacecoin] Airdrop.`,
    url: 'https://next-metadata-test.vercel.app/spacecoin',
    siteName: '[Spacecoin] Airdrop - Come and Play!',
    images: [{ url: 'https://files.gluwa.com/media/meta/spacecoin-org/20241030/meta-image.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Spacecoin] Airdrop - Come and Play!',
    description: `Get started with the [Spacecoin] Airdrop.`,
    images: [{ url: 'https://files.gluwa.com/media/meta/spacecoin-org/20241030/meta-image.png' }]
  },
  category: 'technology',
  robots: "index, follow",
};

export default function Spacecoin() {
  return <div>Spacecoin</div>;
}