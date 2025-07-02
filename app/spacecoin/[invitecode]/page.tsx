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