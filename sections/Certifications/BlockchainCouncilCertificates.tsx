import { Card } from 'flowbite-react';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BlockchainCouncilCertificate = {
  title: string;
  url: string;
  badgeUrl: string;
  imageUrl: string;
};

const blockchainCouncilCertificates: BlockchainCouncilCertificate[] = [
  {
    title: 'Certified Blockchain Developer',
    url: 'https://www.credential.net/af804fdc-b4a1-4d4d-923c-6e01c38845c1#gs.0ivgys',
    badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/86180577',
    imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/86180577',
  },
  {
    title: 'Certified Blockchain Architect',
    url: 'https://www.credential.net/cc3e35ac-43cd-47e0-90a5-33431fe0e80f#gs.037c7o',
    badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/86368568',
    imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/86368568',
  },
  {
    title: 'Certified Blockchain Expert',
    url: 'https://www.credential.net/b6e25b46-b91c-4905-abb8-b6d60f591a73#gs.0ktw2e',
    badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/75455426',
    imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/75455426',
  },
];

const BlockchainCouncilCertificates: FC = () => {
  return (
    <>
      {blockchainCouncilCertificates.map((c) => (
        <Link key={c.title} href={c.url} target="_blank" rel="noreferrer">
          <Card
            className="flex items-center max-w-xs pt-3"
            renderImage={() => <Image key={c.title} src={c.badgeUrl} alt={c.title} height={100} width={100} />}>
            <div className="flex justify-center space-x-3">
              <div className="btn flex items-center text-sm">Verify</div>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default BlockchainCouncilCertificates;
