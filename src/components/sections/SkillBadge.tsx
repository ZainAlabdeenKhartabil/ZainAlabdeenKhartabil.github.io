import React from 'react';
import { IconType } from 'react-icons';

import {
    SiSharp, SiPhp, SiDotnet, SiLaravel, SiHtml5, SiCss,
    SiSass, SiBootstrap, SiJavascript, SiJquery, SiReact,
    SiBlazor, SiAngular, SiMysql,
    SiMongodb, SiDocker, SiGit
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa6';
import { TbGitFork } from 'react-icons/tb';
import { GoCpu } from "react-icons/go";

import { VscCode, VscSettingsGear, VscAzureDevops } from 'react-icons/vsc';

const iconMap: Record<string, IconType> = {
    "C#": SiSharp,
    "PHP": SiPhp,
    "ASP.Net Framework": SiDotnet,
    "ASP.Net Core": SiDotnet,
    "Laravel": SiLaravel,
    "HTML": SiHtml5,
    "CSS": SiCss,
    "SASS": SiSass,
    "Bootstrap": SiBootstrap,
    "JavaScript": SiJavascript,
    "JQuery": SiJquery,
    "React": SiReact,
    "Blazor": SiBlazor,
    "Angular": SiAngular,
    "MAUI": SiDotnet,
    "MSSQL Server": DiMsqlServer,
    "MySQL": SiMysql,
    "OracleDB": FaDatabase,
    "Entity Framework": SiDotnet,
    "MongoDB": SiMongodb,
    "Azure": VscAzureDevops,
    "Azure DevOps": TbGitFork,
    "Docker": SiDocker,
    "Git": SiGit,
    "Clean Architecture": GoCpu,
    "Microservices": GoCpu,
    "Domain Driven Design": GoCpu,
    "SOLID": GoCpu,
    "Agile": VscCode,
    "Scrum": VscCode,
    "SDLC": VscCode,
    "Code Reviews": VscCode,
};

interface SkillBadgeProps {
    skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
    const IconComponent = iconMap[skill] || VscCode;

    return (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-blue-300 hover:text-blue-200 font-medium text-sm hover:border-blue-500/50 hover:bg-blue-900/30 transition-all cursor-default">
            <IconComponent className="text-base" />
            {skill}
        </span>
    );
}