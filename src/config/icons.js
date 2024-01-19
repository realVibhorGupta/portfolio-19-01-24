import React from 'react';

// ICONS
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MapIcon from '@material-ui/icons/Map';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import StorageIcon from '@material-ui/icons/Storage';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Twitter from '@material-ui/icons/Twitter';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as CppIcon } from '../assets/icons/cplusplus-plain.svg';
import { ReactComponent as JavaIcon } from '../assets/icons/java-plain-wordmark.svg';
import { ReactComponent as AngularIcon } from '../assets/icons/angularjs-plain-wordmark.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript-plain.svg';
import { ReactComponent as MongoDBIcon } from '../assets/icons/mongodb-plain-wordmark.svg';
import { ReactComponent as MySQLIcon } from '../assets/icons/mysql-plain-wordmark.svg';
import { ReactComponent as NodejsIcon } from '../assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from '../assets/icons/php-plain.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-original-wordmark.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/icons/typescript-plain.svg';
import { ReactComponent as GraphQLIcon } from '../assets/icons/graphql.svg';
import { ReactComponent as DockerIcon } from '../assets/icons/docker.svg';
import { ReactComponent as CIcon } from '../assets/icons/c.svg';
import { ReactComponent as RedisIcon } from '../assets/icons/redis.svg';
import { ReactComponent as PythonIcon } from '../assets/icons/python.svg';
import { ReactComponent as NextJSIcon } from '../assets/icons/nextjs.svg';
import { ReactComponent as GitIcon } from '../assets/icons/git.svg';
import { ReactComponent as ReduxIcon } from '../assets/icons/redux.svg';
import { ReactComponent as ExpressIcon } from '../assets/icons/express.svg';
import { ReactComponent as JestIcon } from '../assets/icons/jest.svg';
import { ReactComponent as SocketIOIcon } from '../assets/icons/socketIO.svg';
import { ReactComponent as AnsibleIcon } from '../assets/icons/ansible.svg';
import { ReactComponent as RustIcon } from '../assets/icons/rust.svg';
import { ReactComponent as CypressIcon } from '../assets/icons/cypress.svg';
import { ReactComponent as MongooseIcon } from '../assets/icons/mongoose.svg';
import { ReactComponent as HTMLIcon } from '../assets/icons/html5.svg';
import { ReactComponent as CSSIcon } from '../assets/icons/css3.svg';
import { ReactComponent as TailwindIcon } from '../assets/icons/tailwind.svg';
import { ReactComponent as gRPCIcon } from '../assets/icons/gRPC.svg';
import { ReactComponent as MochaIcon } from '../assets/icons/mocha.svg';
import { CheckBoxOutlined, DataUsage, DeveloperModeSharp } from '@material-ui/icons';
// ICONS END

/** Default icons */
const Icons = {
    email: <MailIcon />,
    facebook: <SvgIcon component={FacebookIcon} />,
    twitter: <Twitter />,
    github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ fill: 'none' }} />,
    linkedin: <SvgIcon component={LinkedInIcon} />,
    projects: <ComputerIcon />,
    about: <InfoIcon />,
    cpp: <SvgIcon component={CppIcon} viewBox="0 0 128 128" fontSize="large" title="C++" />,
    java: <SvgIcon component={JavaIcon} viewBox="0 0 128 128" fontSize="large" title="Java" />,
    typescript: <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" title="TypeScript" />,
    javascript: <SvgIcon component={JavaScriptIcon} viewBox="0 0 128 128" fontSize="large" title="JavaScript" />,
    mysql: <SvgIcon component={MySQLIcon} viewBox="0 0 128 128" fontSize="large" title="MySQL" />,
    php: <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" title="PHP" />,
    mongodb: <SvgIcon component={MongoDBIcon} viewBox="0 0 128 128" fontSize="large" title="MongoDB" />,
    nodejs: <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" title="Node.js" />,
    react: <SvgIcon component={ReactIcon} viewBox="0 0 128 128" fontSize="large" title="React" />,
    angular: <SvgIcon component={AngularIcon} viewBox="0 0 128 128" fontSize="large" title="Angular" />,
    graphql: <SvgIcon component={GraphQLIcon} viewBox="0 0 400 400" fontSize="large" title="GraphQL" />,
    docker: <SvgIcon component={DockerIcon} viewBox="0 0 400 400" fontSize="large" title="Docker" />,
    c: <SvgIcon component={CIcon} viewBox="0 0 128 128" fontSize="large" title="C" />,
    redis: <SvgIcon component={RedisIcon} viewBox="0 0 128 128" fontSize="large" title="Redis" />,
    git: <SvgIcon component={GitIcon} viewBox="0 0 128 128" fontSize="large" title="Git" />,
    nextjs: <SvgIcon component={NextJSIcon} viewBox="0 0 128 128" fontSize="large" title="NextJS" />,
    redux: <SvgIcon component={ReduxIcon} viewBox="0 0 128 128" fontSize="large" title="Redux" />,
    express: <SvgIcon component={ExpressIcon} viewBox="0 0 128 128" fontSize="large" title="Express" />,
    python: <SvgIcon component={PythonIcon} viewBox="0 0 128 128" fontSize="large" title="Python" />,
    jest: <SvgIcon component={JestIcon} viewBox="0 0 128 128" fontSize="large" title="Jest" />,
    socketIO: <SvgIcon component={SocketIOIcon} viewBox="0 0 128 128" fontSize="large" title="SocketIO" />,
    ansible: <SvgIcon component={AnsibleIcon} viewBox="0 0 128 128" fontSize="large" title="Ansible" />,
    rust: <SvgIcon component={RustIcon} viewBox="0 0 128 128" fontSize="large" title="Rust" />,
    cypress: <SvgIcon component={CypressIcon} viewBox="0 0 128 128" fontSize="large" title="Cypress" />,
    mongoose: <SvgIcon component={MongooseIcon} viewBox="0 0 128 128" fontSize="large" title="Mongoose" />,
    html5: <SvgIcon component={HTMLIcon} viewBox="0 0 128 128" fontSize="large" title="HTML" />,
    css3: <SvgIcon component={CSSIcon} viewBox="0 0 128 128" fontSize="large" title="CSS3" />,
    tailwind: <SvgIcon component={TailwindIcon} viewBox="0 0 128 128" fontSize="large" title="Talwind" />,
    gRPC: <SvgIcon component={gRPCIcon} viewBox="0 0 128 128" fontSize="large" title="gRPC" />,
    mocha: <SvgIcon component={MochaIcon} viewBox="0 0 128 128" fontSize="large" title="Mocha" />,
    helpoutline: <HelpOutlineIcon />,
    map: <MapIcon />,
    code: <CodeIcon />,
    link: <LinkIcon />,
    data:<StorageIcon/>,
    web: <WebIcon />,
    test: <CheckBoxOutlined />,
    devOps: <CloudUpload   />
};


export { Icons };