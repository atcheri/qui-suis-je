import React, { ComponentType, FC } from 'react';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

import * as Icons from './Icons';
import { IconProps } from './Icons/types';
import { TechLang, TechTool } from './Timeliner';

type TechStackIconProps = {
  lang: TechLang | TechTool;
};

const icons: Record<string, ComponentType<IconProps>> = {
  'c++': Icons.CppIcon,
  elm: Icons.ElmIcon,
  go: Icons.GolangIcon,
  nodejs: Icons.NodeJSIcon,
  php: Icons.PhpIcon,
  python: Icons.PythonIcon,
  solidity: Icons.SolidityIcon,
  typescript: Icons.TypescriptIcon,
  //
  aws: Icons.AwsIcon,
  apollo: Icons.ApolloGraphqlIcon,
  cypress: Icons.CypressIcon,
  docker: Icons.DockerIcon,
  elastic: Icons.ElasticSearchIcon,
  flowbite: Icons.FlowbiteIcon,
  github: Icons.GithubIcon,
  gitlab: Icons.GitlabIcon,
  'google-analytics': Icons.GoogleAnalyticsIcon,
  graphql: Icons.GraphqlIcon,
  heroku: Icons.HerokuIcon,
  jest: Icons.JestIcon,
  jquery: Icons.JqueryIcon,
  kubernetes: Icons.KubernetesIcon,
  laravel: Icons.LaravelIcon,
  metamask: Icons.MetamaskIcon,
  mongo: Icons.MongoIcon,
  mysql: Icons.MysqlIcon,
  netlify: Icons.NetlifyIcon,
  nextjs: Icons.NextjsIcon,
  openapi: Icons.OpenApiIcon,
  postgres: Icons.PostgresIcon,
  react: Icons.TypescriptReactIcon,
  'react-native': Icons.ReactNativeIcon,
  rest: Icons.RestAPIIcon,
  symfony: Icons.SymfonyIcon,
  tailwind: Icons.TailwindIcon,
  vuejs: Icons.VuejsIcon,
};

const TechStackIcon: FC<TechStackIconProps> = ({ lang }) => {
  const Icon: ComponentType<IconProps> = icons[lang];
  if (!Icon) {
    return <HiOutlineQuestionMarkCircle />;
  }

  return <Icon className="h-10 w-10" />;
};

export default TechStackIcon;
