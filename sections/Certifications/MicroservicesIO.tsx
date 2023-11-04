import { Card } from 'flowbite-react';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MicroservicesIOCertificate: FC = () => {
  return (
    <Link
      key="Distributed Data Patterns for Microservices "
      href="https://cloud.atsuhiro.site/s/9SsVaBPe2GTkaul"
      target="_blank"
      rel="noreferrer">
      <Card
        className="flex items-center max-w-xs h-full pt-3"
        renderImage={() => (
          <Image
            key="Distributed Data Patterns for Microservices "
            src="https://ik.imagekit.io/kpk7hopgna/qui-suis-je/Distributed-Data-Patterns-for-Microservices%20-%20Chris%20Richardson%20Inc%20-%20Certiification%20issued%2020211027.jpg?updatedAt=1699115279647"
            alt="Distributed Data Patterns for Microservices"
            height={100}
            width={100}
          />
        )}>
        <div className="flex justify-center h-full space-x-3">
          <div className="btn flex items-center self-end text-sm">Verify</div>
        </div>
      </Card>
    </Link>
  );
};

export default MicroservicesIOCertificate;
