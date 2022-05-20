"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[893],{5318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),k=o,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||r;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9785:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7378),o=t(9619);function r(){return a.createElement(o.Z,{text:"Required",variant:"failure",className:"ml-2"})}},9619:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7378),o=t(8944),r=t(8896),i={failure:"bg-red-100 text-red-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){var n=e.className,t=e.icon,l=e.text,p=e.variant;return a.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",p?i[p]:"bg-gray-100 text-gray-800",n)},t&&a.createElement(r.Z,{icon:t,className:"mr-1"}),l)}},8137:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a=t(5773),o=t(808),r=(t(7378),t(5318)),i=t(9785),l=["components"],p={title:".moon/workspace.yml",toc_max_heading_level:6},s=void 0,c={unversionedId:"config/workspace",id:"config/workspace",title:".moon/workspace.yml",description:"The .moon/workspace.yml file configures available projects and their locations, the toolchain, and",source:"@site/docs/config/workspace.mdx",sourceDirName:"config",slug:"/config/workspace",permalink:"/docs/config/workspace",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/workspace.mdx",tags:[],version:"current",frontMatter:{title:".moon/workspace.yml",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Config files",permalink:"/docs/config"},next:{title:".moon/project.yml",permalink:"/docs/config/global-project"}},m={},d=[{value:"<code>projects</code><RequiredLabel />",id:"projects",level:2},{value:"<code>node</code>",id:"node",level:2},{value:"<code>version</code>",id:"version",level:3},{value:"<code>packageManager</code>",id:"packagemanager",level:3},{value:"<code>npm</code>, <code>pnpm</code>, <code>yarn</code>",id:"npm-pnpm-yarn",level:3},{value:"<code>version</code>",id:"version-1",level:4},{value:"<code>addEnginesConstraint</code>",id:"addenginesconstraint",level:3},{value:"<code>dedupeOnLockfileChange</code>",id:"dedupeonlockfilechange",level:3},{value:"<code>syncProjectWorkspaceDependencies</code>",id:"syncprojectworkspacedependencies",level:3},{value:"<code>syncVersionManagerConfig</code>",id:"syncversionmanagerconfig",level:3},{value:"<code>typescript</code>",id:"typescript",level:2},{value:"<code>projectConfigFileName</code>",id:"projectconfigfilename",level:3},{value:"<code>rootConfigFileName</code>",id:"rootconfigfilename",level:3},{value:"<code>syncProjectReferences</code>",id:"syncprojectreferences",level:3},{value:"<code>vcs</code>",id:"vcs",level:2},{value:"<code>manager</code>",id:"manager",level:3},{value:"<code>defaultBranch</code>",id:"defaultbranch",level:3}],k={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/workspace.yml")," file configures available projects and their locations, the toolchain, and\nthe workspace development environment."),(0,r.kt)("h2",{id:"projects"},(0,r.kt)("inlineCode",{parentName:"h2"},"projects"),(0,r.kt)(i.Z,{mdxType:"RequiredLabel"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, string>"))),(0,r.kt)("p",null,"Defines the location of all ",(0,r.kt)("a",{parentName:"p",href:"../concepts/project"},"projects")," within the workspace. Each project\nrequires a unique ID as the map key, where this ID is used heavily on the command line and within\nthe project graph for uniquely identifying the project amongst all projects. The map value (known as\nthe project source) is a file system path to the project folder, relative from the workspace root,\nand must be contained within the workspace boundary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"projects:\n  admin: 'apps/admin'\n  apiClients: 'packages/api-clients'\n  designSystem: 'packages/design-system'\n  web: 'apps/web'\n")),(0,r.kt)("p",null,"Unlike packages in the JavaScript ecosystem, a moon project ",(0,r.kt)("em",{parentName:"p"},"does not")," require a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", and\nis not coupled to Yarn workspaces (or similar architectures)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Why doesn't moon auto-detect projects?")," moon ",(0,r.kt)("em",{parentName:"p"},"does not")," automatically detect projects using\nfile system globs for the following reasons:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Depth-first scans are expensive, especially when the workspace continues to grow."),(0,r.kt)("li",{parentName:"ul"},"CI and other machines may inadvertently detect more projects because of left over artifacts."),(0,r.kt)("li",{parentName:"ul"},"Centralizing a manifest of projects allows for an easy review and approval process."))),(0,r.kt)("h2",{id:"node"},(0,r.kt)("inlineCode",{parentName:"h2"},"node")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"NodeConfig"))),(0,r.kt)("p",null,"Defines the Node.js version and package manager to install within the toolchain, as moon ",(0,r.kt)("em",{parentName:"p"},"does not"),"\nuse a Node.js binary found on the local machine. Managing the Node.js version within the toolchain\nensures a deterministic environment across any machine (whether a developer, CI, or production\nmachine)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This setting is optional and will default Node.js to the latest\n",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"active LTS version")," when not defined.")),(0,r.kt)("h3",{id:"version"},(0,r.kt)("inlineCode",{parentName:"h3"},"version")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"string"))),(0,r.kt)("p",null,"Defines the explicit Node.js version to use. We require an explicit and semantic major, minor, and\npatch version, to ensure the same environment is used across every machine. Ranges are ",(0,r.kt)("em",{parentName:"p"},"not"),"\nsupported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"node:\n  version: '16.13.0'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Version can be overridden with the ",(0,r.kt)("inlineCode",{parentName:"p"},"MOON_NODE_VERSION")," environment variable.")),(0,r.kt)("h3",{id:"packagemanager"},(0,r.kt)("inlineCode",{parentName:"h3"},"packageManager")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"npm | pnpm | yarn"))),(0,r.kt)("p",null,"Defines which package manager to utilize within the workspace. Supports ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," (default), ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", or\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"node:\n  packageManager: 'yarn'\n")),(0,r.kt)("h3",{id:"npm-pnpm-yarn"},(0,r.kt)("inlineCode",{parentName:"h3"},"npm"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"pnpm"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"yarn")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"PackageManagerConfig"))),(0,r.kt)("p",null,"Optional fields for defining package manager specific configuration. The chosen setting is dependent\non the value of ",(0,r.kt)("a",{parentName:"p",href:"#packagemanager"},(0,r.kt)("inlineCode",{parentName:"a"},"node.packageManager")),". If these settings ",(0,r.kt)("em",{parentName:"p"},"are not defined"),", the\nlatest version of the active package manager will be used (when applicable)."),(0,r.kt)("h4",{id:"version-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"version")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"string"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," setting defines the explicit package manager version to use. We require an explicit\nmajor, minor, and patch version, to ensure the same environment is used across every machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {4}',title:'".moon/workspace.yml"',"{4}":!0},"node:\n  packageManager: 'yarn'\n  yarn:\n    version: '3.1.0'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Version can be overridden with the ",(0,r.kt)("inlineCode",{parentName:"p"},"MOON_NPM_VERSION"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MOON_PNPM_VERSION"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"MOON_YARN_VERSION"),"\nenvironment variables.")),(0,r.kt)("h3",{id:"addenginesconstraint"},(0,r.kt)("inlineCode",{parentName:"h3"},"addEnginesConstraint")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,r.kt)("p",null,"Injects the currently configured ",(0,r.kt)("a",{parentName:"p",href:"#version"},"Node.js version")," as an ",(0,r.kt)("inlineCode",{parentName:"p"},"engines")," constraint to the root\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," field. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"node:\n  addEnginesConstraint: true\n")),(0,r.kt)("p",null,'For example, say our Node.js version is "16.15.0", and when we execute a run process through the\n',(0,r.kt)("inlineCode",{parentName:"p"},"moon")," binary, it will update the root ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," with the below. We pin a fixed version to\nensure other Node.js processes outside of our toolchain are utilizing the same version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "engines": {\n        "node": "16.15.0"\n    }\n}\n')),(0,r.kt)("h3",{id:"dedupeonlockfilechange"},(0,r.kt)("inlineCode",{parentName:"h3"},"dedupeOnLockfileChange")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,r.kt)("p",null,"Will dedupe dependencies after they have been installed, added, removing, or changed in any way, in\nan effort to keep the workspace tree as clean and lean as possible. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"node:\n  dedupeOnLockfileChange: true\n")),(0,r.kt)("h3",{id:"syncprojectworkspacedependencies"},(0,r.kt)("inlineCode",{parentName:"h3"},"syncProjectWorkspaceDependencies")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,r.kt)("p",null,"Will sync a project's ",(0,r.kt)("a",{parentName:"p",href:"./project#dependson"},(0,r.kt)("inlineCode",{parentName:"a"},"dependsOn"))," setting as normal dependencies within the\nproject's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", using ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace:*")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," version ranges (depending on what the package\nmanager supports). If a dependent project does not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", or if a dependency of the\nsame name has an explicit version already defined, the sync will be skipped. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"node:\n  syncProjectWorkspaceDependencies: true\n")),(0,r.kt)("p",null,"A quick example on how this works. Given the following ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="project.yml"',title:'"project.yml"'},"dependsOn:\n  - 'designSystem'\n  - 'reactHooks'\n")),(0,r.kt)("p",null,"Would result in the following ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," within a project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "dependencies": {\n        "@company/design-system": "workspace:*",\n        "@company/react-hooks": "workspace:*"\n        // ...\n    }\n}\n')),(0,r.kt)("h3",{id:"syncversionmanagerconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"syncVersionManagerConfig")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"(none) | nodenv | nvm"))),(0,r.kt)("p",null,"Will sync the currently configured ",(0,r.kt)("a",{parentName:"p",href:"#version"},"Node.js version"),' to a 3rd-party version manager\'s\nconfig/rc file. Supports "nodenv" (syncs to ',(0,r.kt)("inlineCode",{parentName:"p"},".node-version"),'), "nvm" (syncs to ',(0,r.kt)("inlineCode",{parentName:"p"},".nvmrc"),"), or none\n(default)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"node:\n  syncVersionManagerConfig: 'nvm'\n")),(0,r.kt)("p",null,"This is a special setting that ensure other Node.js processes outside of our toolchain are utilizing\nthe same version, which is a very common practice when managing dependencies."),(0,r.kt)("h2",{id:"typescript"},(0,r.kt)("inlineCode",{parentName:"h2"},"typescript")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"TypeScriptConfig"))),(0,r.kt)("p",null,"Dictates how moon interacts with and utilizes TypeScript within the workspace."),(0,r.kt)("h3",{id:"projectconfigfilename"},(0,r.kt)("inlineCode",{parentName:"h3"},"projectConfigFileName")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"string"))),(0,r.kt)("p",null,"Defines the file name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," found in the project root. We utilize this setting when\nsyncing project references between projects. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"typescript:\n  projectConfigFileName: 'tsconfig.build.json'\n")),(0,r.kt)("h3",{id:"rootconfigfilename"},(0,r.kt)("inlineCode",{parentName:"h3"},"rootConfigFileName")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"string"))),(0,r.kt)("p",null,"Defines the file name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," found in the workspace root. We utilize this setting\nwhen syncing projects as references. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"typescript:\n  rootConfigFileName: 'tsconfig.projects.json'\n")),(0,r.kt)("h3",{id:"syncprojectreferences"},(0,r.kt)("inlineCode",{parentName:"h3"},"syncProjectReferences")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,r.kt)("p",null,"Will sync a project's ",(0,r.kt)("a",{parentName:"p",href:"./project#dependson"},(0,r.kt)("inlineCode",{parentName:"a"},"dependsOn"))," setting as project references within that\nproject's ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", and the workspace root ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"typescript:\n  syncProjectReferences: true\n")),(0,r.kt)("p",null,"A quick example on how this works. Given the following ",(0,r.kt)("inlineCode",{parentName:"p"},"dependsOn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dependsOn:\n  - 'designSystem'\n  - 'reactHooks'\n")),(0,r.kt)("p",null,"Would result in the following ",(0,r.kt)("inlineCode",{parentName:"p"},"references")," within both ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"s."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n    // ...\n    "references": [\n        // ...\n        { "path": "../../design-system" },\n        { "path": "../../react-hooks" }\n    ]\n}\n')),(0,r.kt)("h2",{id:"vcs"},(0,r.kt)("inlineCode",{parentName:"h2"},"vcs")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"VcsConfig"))),(0,r.kt)("p",null,"Configures the version control system to utilize within the workspace (and repository). A VCS is\nrequired for determining touched (added, modified, etc) files, calculating file hashes, computing\naffected files, and much more."),(0,r.kt)("h3",{id:"manager"},(0,r.kt)("inlineCode",{parentName:"h3"},"manager")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"git | svn"))),(0,r.kt)("p",null,'Defines the VCS tool/binary that is being used for managing the repository. Accepts "git" (default)\nor "svn" (experimental).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"vcs:\n  manager: 'git'\n")),(0,r.kt)("h3",{id:"defaultbranch"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultBranch")),(0,r.kt)("p",null,'Defines the default upstream branch (master/main/trunk) in the repository for comparing differences\nagainst. For git, this is typically "master" (default) or "main", and must include the remote prefix\n(before /). For svn, this should always be "trunk".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"vcs:\n  defaultBranch: 'master'\n")))}u.isMDXComponent=!0}}]);