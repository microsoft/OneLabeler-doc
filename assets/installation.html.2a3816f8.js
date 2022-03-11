import{_ as o,r,o as i,c as l,a as e,b as a,F as c,d as t,e as n}from"./app.df2b219c.js";const d={},p=t('<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><p>OneLabeler can be installed through <a href="#docker">Docker</a> or <a href="#build-from-source">building from source</a>.</p><ul><li>When module customization is not needed, it is recommended to install OneLabeler through <a href="#docker">Docker</a> as it is easier.</li><li>When module customization is needed, the developer has to build OneLabeler from source, as the customization would involving editing the source code.</li></ul><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2>',4),h={class:"custom-container warning"},u=e("p",{class:"custom-container-title"},"Important",-1),b=n("Before started, make sure you have installed "),m={href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"},g=n("Docker"),_=n("."),f=t(`<p>OneLabeler can be launched in a Docker container as follows:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>link-removed-for-anonymity<span class="token operator">&gt;</span> OneLabeler
<span class="token builtin class-name">cd</span> OneLabeler
<span class="token function">docker</span> compose up
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Notice</strong>: building the docker image for the first time may take around 30 minutes depending on the machine you use.</p><h2 id="build-from-source" tabindex="-1"><a class="header-anchor" href="#build-from-source" aria-hidden="true">#</a> Build from Source</h2><p>OneLabeler contains four separate components, including the <strong>front end</strong>, <strong>algorithm server</strong>, <strong>database proxy server</strong>, and <strong>Jupyter API server</strong>.</p><p>When building OneLabeler from source, the four components will need to be built. Depending on the needed functionalities of OneLabeler, not all the four components need to be built.</p><ul><li>The <strong>front end</strong> component is <strong>required</strong> to be built, as it is needed to get the user interface part of OneLabeler function.</li><li>The <strong>algorithm server</strong> component is <strong>recommended</strong> to be built, as it is needed to enable executing most of the algorithm modules and support compilation.</li><li>The <strong>database proxy</strong> server component can be <strong>optionally</strong> built, to support storing the data objects and labels in a database.</li><li>The <strong>Jupyter API server</strong> component can be <strong>optionally</strong> built, to support embedding OneLabeler in Jupyter Notebook.</li></ul><p>Before building the components, please first clone the OneLabeler source code and enter the directory containing the source code:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>link-removed-for-anonymity<span class="token operator">&gt;</span> OneLabeler
<span class="token builtin class-name">cd</span> OneLabeler
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The following lists the steps for building the four components:</p><h3 id="front-end" tabindex="-1"><a class="header-anchor" href="#front-end" aria-hidden="true">#</a> Front End</h3>`,11),v={class:"custom-container warning"},k=e("p",{class:"custom-container-title"},"Important",-1),y=n("Before started, make sure you have installed "),x={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},w=n("Node.js"),L=n("."),O=t(`<p>Building the front end into a web application:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> client
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Building the front end into a desktop application:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> client
<span class="token function">npm</span> run electron:build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="algorithm-server" tabindex="-1"><a class="header-anchor" href="#algorithm-server" aria-hidden="true">#</a> Algorithm Server</h3>`,5),B={class:"custom-container warning"},I=e("p",{class:"custom-container-title"},"Important",-1),j=n("Before started, make sure you have installed "),N={href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"},D=n("python 3.9"),T=n(" (python >= 3.10 is not supported!) and "),S={href:"https://github.com/pypa/pipenv#installation",target:"_blank",rel:"noopener noreferrer"},A=n("pipenv"),E=n("."),J=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> server
pipenv <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="database-proxy-server" tabindex="-1"><a class="header-anchor" href="#database-proxy-server" aria-hidden="true">#</a> Database Proxy Server</h3>`,2),P={class:"custom-container warning"},V=e("p",{class:"custom-container-title"},"Important",-1),z=n("Before started, make sure you have installed "),F={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},W=n("Node.js"),q=n("."),C=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> db
<span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="jupyter-api-server" tabindex="-1"><a class="header-anchor" href="#jupyter-api-server" aria-hidden="true">#</a> Jupyter API Server</h3>`,2),G={class:"custom-container warning"},H=e("p",{class:"custom-container-title"},"Important",-1),K=n("Before started, make sure you have installed "),M={href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"},Q=n("python 3.9"),R=n(" (python >= 3.10 is not supported!) and "),U={href:"https://github.com/pypa/pipenv#installation",target:"_blank",rel:"noopener noreferrer"},X=n("pipenv"),Y=n("."),Z=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> jupyter
pipenv <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1);function $(ee,ne){const s=r("ExternalLinkIcon");return i(),l(c,null,[p,e("div",h,[u,e("p",null,[b,e("a",m,[g,a(s)]),_])]),f,e("div",v,[k,e("p",null,[y,e("a",x,[w,a(s)]),L])]),O,e("div",B,[I,e("p",null,[j,e("a",N,[D,a(s)]),T,e("a",S,[A,a(s)]),E])]),J,e("div",P,[V,e("p",null,[z,e("a",F,[W,a(s)]),q])]),C,e("div",G,[H,e("p",null,[K,e("a",M,[Q,a(s)]),R,e("a",U,[X,a(s)]),Y])]),Z],64)}var ae=o(d,[["render",$]]);export{ae as default};