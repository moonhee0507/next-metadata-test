import { Metadata } from "next";

type Props = {
  params: Promise<{ invitecode: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const invitecode = (await params).invitecode;

  return {
    title: `[Spacecoin] Airdrop - Come and Play!`,
    description: `Please enter the invitation code ${invitecode}.`,
    applicationName: 'Application Name',
    authors: [{ name: 'Spacecoin', url: 'https://spacecoin.org' }],
    openGraph: {
      title: `[Spacecoin] Airdrop - Come and Play!`,
      description: `Please enter the invitation code ${invitecode}.`,
      url: `https://port-next-next-metadata-test-7xwyjq992lliq95b1a.sel4.cloudtype.app/spacecoin/${invitecode}`,
      siteName: '[Spacecoin] Airdrop - Come and Play!',
      images: [{ url: 'https://files.gluwa.com/media/meta/spacecoin-org/20241030/meta-image.png' }]
    },
    twitter: {
      card: "summary_large_image",
      site: "@_spacecoin",
      creator: "@_spacecoin",
      images: "https://files.gluwa.com/media/meta/spacecoin-org/20241030/meta-image.png"
    },
    category: 'technology',
    robots: "index, follow",
  }
}

export default async function SpacecoinInvite({
  params,
}: {
  params: Promise<{ invitecode: string }>;
}) {
  const { invitecode } = await params;
  
  return <div>SpacecoinInvite {invitecode}</div>;
}