import Image from 'next/image';
import { ComponentType, FC, useState } from 'react';
import { GolangIcon, SolidityIcon, TypescriptReactIcon } from '../../components/Icons';
import { NodeJSIcon } from '../../components/Icons/NodeJSIcon';
import { IconProps } from '../../components/Icons/types';

type Snippet = {
  lang: string;
  imgPath: string;
  logo: ComponentType<IconProps>;
};

const snippets: Snippet[] = [
  {
    lang: 'go',
    imgPath: '/snippets/golang-snapshot.png',
    logo: GolangIcon,
  },
  {
    lang: 'nodejs',
    imgPath: '/snippets/nodejs-snapshot.png',
    logo: NodeJSIcon,
  },
  {
    lang: 'typescript',
    imgPath: '/snippets/react-snapshot.png',
    logo: TypescriptReactIcon,
  },
  {
    lang: 'solidity',
    imgPath: '/snippets/solidity-snapshot.png',
    logo: SolidityIcon,
  },
];

const CodeSnippets: FC = () => {
  const [activeSnippet, setActiveSnippet] = useState(snippets[0]);

  const switchSnippet = (i: number) => {
    setActiveSnippet(snippets[i]);
  };

  return (
    <div>
      <ul id="tabs" className="inline-flex w-full">
        {snippets.map((s, i) => (
          <li
            key={`${s.lang}-icon`}
            className="mx-4 p-2 font-semibold text-gray-800 rounded-t cursor-pointer dark:bg-white rounded-sm"
            onClick={() => switchSnippet(i)}>
            <s.logo className="h-10 w-10" active={s.lang === activeSnippet.lang} />
          </li>
        ))}
      </ul>
      <Image src={activeSnippet.imgPath} width={780} height={72} alt={`${activeSnippet.lang} code snippet`} />
    </div>
  );
};

export default CodeSnippets;
