import { FC } from 'react';

type BlockchainCouncilCertificate = {
  url: string;
  badgeUrl: string;
  imageUrl: string;
};

const blockchainCouncilCertificates: BlockchainCouncilCertificate[] = [
  {
    url: 'https://www.credential.net/b6e25b46-b91c-4905-abb8-b6d60f591a73#gs.0ktw2e',
    badgeUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/75455426',
    imageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/75455426',
  },
];

const BlockchainExpertFrame: FC = () => {
  return (
    <iframe
      src="https://www.credential.net/embed/b6e25b46-b91c-4905-abb8-b6d60f591a73"
      width="800"
      height="600"
      allowFullScreen></iframe>
  );
};
