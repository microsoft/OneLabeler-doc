import{_ as d,r,o as h,c,a as e,b as o,w as i,F as u,e as t,d as s}from"./app.df2b219c.js";const g={},p=e("h1",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),t(" Introduction")],-1),f=e("h2",{id:"what-is-onelabeler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-onelabeler","aria-hidden":"true"},"#"),t(" What is OneLabeler?")],-1),m=t("OneLabeler is a "),_=e("strong",null,"framework for building data labeling tools",-1),b=t(". OneLabeler is targeted at developers who want to build custom "),w=t("data labeling tools"),v=t(" for their data-driven applications. It features a "),k=e("a",{href:"#visual-programming"},"visual programming interface",-1),y=t(" where the developer can compose high-level interface modules and algorithm modules into a data labeling tool."),x=t("OneLabeler builds in a collection of "),L=t("implementations"),T=t(" of interface modules and algorithm modules with which the developer can compose data labeling tools without textual programming. Meanwhile, it is also possible to create customized interface modules and algorithm modules following the "),O=t("module API design"),B=t(" of OneLabeler."),E=t("If you want to use OneLabeler to develop your own data labeling tool, please follow this introduction that walks through major functionalities of OneLabeler. You may look up customization "),I=t("instructions"),j=t(" when you want to build customize modules."),$=t("If you are looking for readily built data labeling tools that meet your needs, have a look at the "),z=t("builtin labeling tool templates"),S=t(" of OneLabeler and our "),F=t("gallery"),M=t(" of created data labeling tools."),A=e("p",null,"Below shows the visual programming interface of OneLabeler for creating data labeling tools.",-1),W=["src"],C=e("p",null,"Below shows the preview interface of OneLabeler showing a preview of a created data labeling tool.",-1),V=["src"],D=e("p",null,"We will explain the usages of the visual programming interface and the preview interface in the following.",-1),N=["href"],R=s(`<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>OneLabeler can be launched with docker with the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>link-removed-for-anonymity<span class="token operator">&gt;</span> OneLabeler
<span class="token builtin class-name">cd</span> OneLabeler
<span class="token function">docker</span> compose up
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),P=t("OneLabeler should then be accessible at "),q=e("code",null,"localhost:8080",-1),G=t(" as a web application."),H=e("br",null,null,-1),J=t(" More details on installation can be found at the installation "),Q=t("instructions"),Y=t("."),K=s('<h2 id="basic-concepts" tabindex="-1"><a class="header-anchor" href="#basic-concepts" aria-hidden="true">#</a> Basic Concepts</h2><h3 id="data-labeling-workflow" tabindex="-1"><a class="header-anchor" href="#data-labeling-workflow" aria-hidden="true">#</a> Data Labeling Workflow</h3><p>In OneLabeler, a data labeling tool is modeled as a <strong>flowchart</strong> depicting a workflow. A node in the flowchart represents an <strong>interface/algorithm module</strong>, which corresponds to a <strong>human/machine/mixed computation procedure</strong>. An edge in the flowchart represents the <strong>execution order</strong>.</p>',3),U=t("In OneLabeler, the data labeling tool follows a "),X={href:"https://en.wikipedia.org/wiki/Blackboard_(design_pattern)",target:"_blank",rel:"noopener noreferrer"},Z=t("blackboard"),ee=t(' storage model. Each module fetches input from the "blackboard" (i.e., a global storage) and writes its output onto the "blackboard".'),te=s('<div class="custom-container danger"><p class="custom-container-title">Edge Semantics</p><p>The edges in OneLabeler&#39;s flowchart model <strong>only represent execution order</strong>. As OneLabeler adopts the blackboard model, the edges <strong>DO NOT transmit data</strong>. Instead, the module inputs are fetched from the global storage. The module outputs are stored to the global storage.</p></div><h3 id="states-and-modules" tabindex="-1"><a class="header-anchor" href="#states-and-modules" aria-hidden="true">#</a> States and Modules</h3><p>In the following, we refer to variables stored in the global storage as <strong>states</strong> and the interface and algorithm modules as <strong>modules</strong>. OneLabeler assumes a fixed set of states and types of modules to be used in data labeling tools.</p><p>Specifically, it assumes seven states:</p><ul><li><strong>Data Objects</strong>: the list of entities to be labeled. <ul><li>Examples: images, videos, audios, text documents.</li></ul></li><li><strong>Labels</strong>: the list of annotations assigned to entities. <ul><li>Examples: classification labels, segmentation masks, named entities.</li></ul></li><li><strong>Features</strong>: the list of feature representations of entities.</li><li><strong>Model</strong>: a machine-learned predictive model. <ul><li>Examples: decision tree, SVM.</li></ul></li><li><strong>Samples</strong>: an entity subset annotators work with a time.</li><li><strong>Categories</strong>: the list of valid label categories. <ul><li>Examples: [&#39;dog&#39;, &#39;cat&#39;], [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;].</li></ul></li><li><strong>Stop</strong>: whether the data labeling process is finished and should stop.</li></ul>',5),oe=t("OneLabeler's blackboard storage model stores these seven states. The seven states are visible in the OneLabeler system's "),ne=e("a",{href:"#variable-inspector"},"variable inspector",-1),ae=t(". The data structure of the states can be found "),ie=t("here"),se=t("."),le=e("p",null,"OneLabeler assumes eight type of modules:",-1),re=e("li",null,[e("strong",null,"Interactive Labeling"),t(": the core type of modules where annotators carry out labeling tasks in an interface. "),e("ul",null,[e("li",null,"Examples: an interface that shows data objects in a grid layout for the annotators to assign labels")])],-1),de=e("strong",null,"Data Object Selection",-1),he=t(": the type of modules that determines the order for data objects to be selected and labeled by annotators. "),ce=t("Examples: "),ue={href:"https://en.wikipedia.org/wiki/Active_learning",target:"_blank",rel:"noopener noreferrer"},ge=t("active learning algorithms"),pe=t(" and any other algorithm that can be used to sort the data objects such as random shuffle."),fe=e("li",null,[e("strong",null,"Model Training"),t(": the type of modules that trains/updates a learning model (that may serve as input to other modules) with newly gathered labels. "),e("ul",null,[e("li",null,"Examples: calling the .fit method to retrain a scikit-learn model, incrementally update a neural network with a certain optimizer.")])],-1),me=e("strong",null,"Feature Extraction",-1),_e=t(": the type of modules that turns data objects into feature representations, typically vectors, facilitating other modules that cannot work with raw data objects (e.g., model training). "),be=t("Examples: "),we={href:"https://en.wikipedia.org/wiki/Singular_value_decomposition",target:"_blank",rel:"noopener noreferrer"},ve=t("singular value decomposition"),ke=t(", "),ye={href:"https://en.wikipedia.org/wiki/Feature_engineering",target:"_blank",rel:"noopener noreferrer"},xe=t("handcrafted feature engineering method"),Le=t("."),Te=e("li",null,[e("strong",null,"Default Labeling"),t(": the type of modules that assigns tentative labels to data objects, simplifying annotators\u2019 work from creating labels to verification and correction. "),e("ul",null,[e("li",null,"Examples: using a machine-learned model to predict labels to data objects as default, using handcrafted domain specific heuristics to assign labels to data objects by rules.")])],-1),Oe=e("li",null,[e("strong",null,"Quality Assurance"),t(": the type of modules that reviews label quality and corrects erroneous labels. "),e("ul",null,[e("li",null,"Examples: going through all the data objects one by one and correct the mislabeled data objects.")])],-1),Be=e("strong",null,"Stoppage Analysis",-1),Ee=t(": the type of modules that decides whether to keep assigning tasks to annotators or stop. "),Ie=t("Examples: checking all the data objects are labeled, "),je={href:"https://scholar.google.co.uk/scholar?q=active+learning+stopping+criterion",target:"_blank",rel:"noopener noreferrer"},$e=t("stopping criterion in active learning"),ze=t("."),Se=e("li",null,[e("strong",null,"Label Ideation"),t(": the type of modules that develops the label categories used for labeling.")],-1),Fe=t("OneLabeler builds in various implementations of the modules as described "),Me=t("here"),Ae=t("."),We=e("p",null,[t("If you wonder why we assume these states and types of modules, you may refer to our "),e("a",{href:"link-removed-for-anonymity"},"writing"),t(" for detailed explanation.")],-1),Ce=e("h2",{id:"visual-programming",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#visual-programming","aria-hidden":"true"},"#"),t(" Visual Programming")],-1),Ve=t("OneLabeler provides a "),De={href:"https://en.wikipedia.org/wiki/Visual_programming_language",target:"_blank",rel:"noopener noreferrer"},Ne=t("visual programming"),Re=t(" interface where the user can visually configure the data labeling workflow without textual programming."),Pe=e("h3",{id:"interface-overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-overview","aria-hidden":"true"},"#"),t(" Interface Overview")],-1),qe=["src"],Ge=e("p",null,"The above shows the OneLabeler interface. The expected procedure of using it to build a labeling tool is as follows:",-1),He=t("The developer first opens the "),Je=e("em",null,"template menu",-1),Qe=t(" and chooses a "),Ye=t("builtin template"),Ke=t(" closest to the required data labeling workflow."),Ue=e("li",null,[t("Then, the developer "),e("a",{href:"#editing-a-workflow"},"edits"),t(" nodes and edges of the template workflow in the "),e("em",null,"workflow canvas"),t(" according to the application requirements.")],-1),Xe=t("During the editing process, the developer checks the "),Ze=t("linting messages"),et=t(" in the "),tt=e("em",null,"console panel",-1),ot=t(" and fix the errors."),nt=e("li",null,[t("After finishing a first draft of the workflow, the developer can use the created prototype labeling tool and conduct "),e("a",{href:"#runtime-debugging"},"runtime debugging"),t(" of the prototype to determine if the workflow needs further revision.")],-1),at=e("li",null,[t("When the developer confirms that the prototype works as expected, the created labeling tool can be "),e("a",{href:"#exporting-a-labeling-tool"},"exported"),t(".")],-1),it=s('<h3 id="editing-a-workflow" tabindex="-1"><a class="header-anchor" href="#editing-a-workflow" aria-hidden="true">#</a> Editing a Workflow</h3><p>To visually configure the data labeling workflow, the developer can carry out the following operations to edit the workflow.</p><p>Notes:</p><ul><li><strong>The keyboard operations in the following are enabled only when the canvas is active</strong>, i.e., when the border of the canvas is in black.</li><li>After editing workflow, interface will be immediately updated, but the workflow will not run automatically.</li></ul><h4 id="create-a-node" tabindex="-1"><a class="header-anchor" href="#create-a-node" aria-hidden="true">#</a> Create a node</h4><p>Right click the workflow canvas to open the create note menu and then click the needed node type.</p>',6),st=["src"],lt=s('<p>There are 10 types of nodes that currently can be created:</p><ul><li>6 types of <strong>nodes representing computation modules</strong> corresponding to 6 of the 8 types of modules described <a href="#states-and-modules">above</a>, including: feature extraction, data object selection, default labeling, interactive labeling, stoppage analysis, and modeling training</li><li>an additional type of custom node to accommodate potential modules that does not fit into the 8 types of modules</li><li>3 types of <strong>control nodes</strong>, including initialization, conditional branching, and exit <ul><li><strong>initialization node</strong> denotes the entry of the workflow and setups the variables shared by the workflow, including data type and label task</li><li><strong>conditional branching node</strong> determines which of the two branches to go according to a boolean condition</li><li><strong>exit node</strong> denotes the end of the workflow</li></ul></li></ul><h4 id="configure-a-node" tabindex="-1"><a class="header-anchor" href="#configure-a-node" aria-hidden="true">#</a> Configure a node</h4><p>Click the node to select it and configure the node parameters in the module settings panel.</p>',4),rt=["src"],dt=e("p",null,"The configurable node parameters includes:",-1),ht=e("li",null,"the name of the node that appears in the workflow",-1),ct=t("the module implementation (e.g., whether to use SVD or handcrafted features as the implementation for a feature extraction node) "),ut=t("the list of module implementations available to each type of node is documented "),gt=t("here"),pt=e("li",null,"the hyperparameter of the module implementation",-1),ft=e("li",null,"(for custom modules) the module inputs and outputs have to be manually configured",-1),mt=e("h4",{id:"move-a-node",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#move-a-node","aria-hidden":"true"},"#"),t(" Move a node")],-1),_t=e("ul",null,[e("li",null,"method 1: mouse drag the node"),e("li",null,"method 2: click the node to select it, and then press the four direction keys (arrow left, arrow right, arrow up, arrow down) on keyboard")],-1),bt=["src"],wt=e("h4",{id:"remove-a-node",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remove-a-node","aria-hidden":"true"},"#"),t(" Remove a node")],-1),vt=e("ul",null,[e("li",null,'method 1: right click the node to open the menu, and then click "remove"'),e("li",null,[t("method 2: click the node to select it, and then press "),e("code",null,"delete"),t(" key")])],-1),kt=["src"],yt=e("h4",{id:"create-an-edge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-an-edge","aria-hidden":"true"},"#"),t(" Create an edge")],-1),xt=e("p",null,"Hover a node to show the node ports, drag the port of one node, and release mouse when hovering on another port of a node.",-1),Lt=["src"],Tt=e("h4",{id:"remove-an-edge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remove-an-edge","aria-hidden":"true"},"#"),t(" Remove an edge")],-1),Ot=e("ul",null,[e("li",null,'method 1: right click the edge to open the menu, and then click "remove"'),e("li",null,[t("method 2: click the edge to select it, and then press "),e("code",null,"delete"),t(" key")])],-1),Bt=["src"],Et=e("h4",{id:"multi-select-nodes-and-edges",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#multi-select-nodes-and-edges","aria-hidden":"true"},"#"),t(" Multi-select nodes and edges")],-1),It=e("p",null,"Brush the canvas to create a selection box.",-1),jt=["src"],$t=e("h4",{id:"select-all-nodes-and-edges",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#select-all-nodes-and-edges","aria-hidden":"true"},"#"),t(" Select all nodes and edges")],-1),zt=e("p",null,[t("Press "),e("code",null,"ctrl"),t("+"),e("code",null,"a"),t(".")],-1),St=["src"],Ft=s('<h3 id="linting-a-workflow" tabindex="-1"><a class="header-anchor" href="#linting-a-workflow" aria-hidden="true">#</a> Linting a Workflow</h3><p>To assist the developer to create data labeling tools that functions, the created data labeling tool&#39;s workflow is validated against several linting rules. Linting is triggered each time the developer edits the workflow to provide real-time feedback.</p><p>The violated linting rules are displayed in the console panel of the interface. The <strong>errors</strong> that <strong>must be fixed</strong> are colored in <strong>red</strong>. The <strong>warnings</strong> that denote suspected errors are colored in <strong>yellow</strong>. The warnings are for the developer to judge if they are true errors or false positives.</p><p>For example, below shows the console panel that shows two linting error messages.</p>',4),Mt=["src"],At=e("p",null,[t("Mouse hovering the error message highlights the node(s) and edge(s) involved in the error."),e("br"),t(" The developer can click the unwrap button to view the details of the message, including which "),e("strong",null,"linting rule"),t(" is violated, and "),e("strong",null,"recommended fixes"),t(".")],-1),Wt=e("p",null,[t("When all the linting rules are satisfied, the console panel shows "),e("code",null,"\u{1F680} The workflow is valid"),t(" as below.")],-1),Ct=["src"],Vt=t("If you want to understand our rationale of integrating each of the rules, you may refer to our "),Dt=t("documentation of linting rules"),Nt=t(". Meanwhile, it should usually be sufficient that you take the linting rules for granted and fix them according to the instructions in the recommended fixes."),Rt=s('<p>Note that the <strong>no-uninitialized-inputs</strong> rule can be hard for beginners to debug:</p><p>In OneLabeler, the states by default are regarded uninitialized. The uninitialized states cannot be used as inputs to modules. To initialize a state, it should either be the <strong>return value of a module</strong>, or it is <strong>declared in the initialization module</strong>.</p><h3 id="runtime-debugging" tabindex="-1"><a class="header-anchor" href="#runtime-debugging" aria-hidden="true">#</a> Runtime Debugging</h3><p>After creating a workflow, the developer may debug the created data labeling tool at runtime and verify if it functions as expected, and then decide if the workflow needs further editing.</p><h4 id="labeling-tool-preview" tabindex="-1"><a class="header-anchor" href="#labeling-tool-preview" aria-hidden="true">#</a> Labeling Tool Preview</h4><p>The developer can preview and play with the created labeling tool in OneLabeler. The preview is updated real-time as the developer edits the workflow.</p><p>Below shows a preview of an image classification tool:</p>',7),Pt=["src"],qt=e("h4",{id:"juxtaposing-workflow-and-prototype",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#juxtaposing-workflow-and-prototype","aria-hidden":"true"},"#"),t(" Juxtaposing Workflow and Prototype")],-1),Gt=e("p",null,"The developer's editing in the workflow panel is immediately updated to the prototype preview. For example, adding an interface module will immediately create a new window in the prototype preview. Tunning the hyperparameter of an interface module will also immediately update the corresponding window of the interface module.",-1),Ht=e("p",null,"To take the advantage of the real-time update, the developer can choose to juxtapose the workflow and the prototype preview as below. In this way, the developer can efficiently iterate the workflow design.",-1),Jt=["src"],Qt=e("h4",{id:"variable-inspector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variable-inspector","aria-hidden":"true"},"#"),t(" Variable Inspector")],-1),Yt=e("p",null,"When using the prototype preview, the developer can inspect the internal states of the labeling tool in the variable inspector panel as below. The developer can examine whether the internal states are as expected to assist the debugging of the created workflow.",-1),Kt=["src"],Ut=s('<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The states in the variable inspector can only be changed by executing the workflow. In other words, before a dataset is uploaded to the preview interface and the labeling workflow starts, the content in the variable inspector will stay unchanged.</p></div><h4 id="control-flow-manipulation" tabindex="-1"><a class="header-anchor" href="#control-flow-manipulation" aria-hidden="true">#</a> Control Flow Manipulation</h4><p>The developer can manipulate the control flow to debug the workflow. In the right-click menu of each node, the developer may conduct the following control flow manipulations:</p><ul><li><strong>Goto &amp; Execute</strong>: Force the control flow to start executing from the right-clicked node.</li><li><strong>Goto &amp; Execute 1 Step</strong>: Force the control flow to execute the right-clicked node and halt after the execution, which is essentially <em>single step debugging</em>.</li><li><strong>Goto</strong>: Force the control flow to set the right-clicked node to be the current node and halt without execution.</li></ul>',4),Xt=["src"],Zt=e("h3",{id:"exporting-a-labeling-tool",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exporting-a-labeling-tool","aria-hidden":"true"},"#"),t(" Exporting a Labeling Tool")],-1),eo=e("p",null,[t("The created data labeling tool can be exported in three formats by clicking the compilation options in the interface (as shown in "),e("a",{href:"#interface-overview"},"interface overview"),t("):")],-1),to=e("ul",null,[e("li",null,"as an installer"),e("li",null,"as a zip file of bundled code"),e("li",null,"as a zip file of the source code")],-1);function oo(n,no){const a=r("RouterLink"),l=r("ExternalLinkIcon");return h(),c(u,null,[p,f,e("p",null,[m,_,b,o(a,{to:"/background/#what-is-a-data-labeling-tool"},{default:i(()=>[w]),_:1}),v,k,y]),e("p",null,[x,o(a,{to:"/builtins/#computation-modules"},{default:i(()=>[L]),_:1}),T,o(a,{to:"/api/#module"},{default:i(()=>[O]),_:1}),B]),e("ul",null,[e("li",null,[E,o(a,{to:"/customization/#customization"},{default:i(()=>[I]),_:1}),j]),e("li",null,[$,o(a,{to:"/builtins/#labeling-tool-templates"},{default:i(()=>[z]),_:1}),S,o(a,{to:"/gallery.html"},{default:i(()=>[F]),_:1}),M])]),A,e("img",{src:n.$withBase("/dev-interface/screenshot.png")},null,8,W),C,e("img",{src:n.$withBase("/preview-interface/screenshot.png")},null,8,V),D,e("p",null,[e("a",{href:n.$withBase("/video.mp4")},"\u{1F4FA} Watch a demo video",8,N)]),R,e("p",null,[P,q,G,H,J,o(a,{to:"/installation.html"},{default:i(()=>[Q]),_:1}),Y]),K,e("p",null,[U,e("a",X,[Z,o(l)]),ee]),te,e("p",null,[oe,ne,ae,o(a,{to:"/advanced/#state-data-structure"},{default:i(()=>[ie]),_:1}),se]),le,e("ul",null,[re,e("li",null,[de,he,e("ul",null,[e("li",null,[ce,e("a",ue,[ge,o(l)]),pe])])]),fe,e("li",null,[me,_e,e("ul",null,[e("li",null,[be,e("a",we,[ve,o(l)]),ke,e("a",ye,[xe,o(l)]),Le])])]),Te,Oe,e("li",null,[Be,Ee,e("ul",null,[e("li",null,[Ie,e("a",je,[$e,o(l)]),ze])])]),Se]),e("p",null,[Fe,o(a,{to:"/builtins/#computation-modules"},{default:i(()=>[Me]),_:1}),Ae]),We,Ce,e("p",null,[Ve,e("a",De,[Ne,o(l)]),Re]),Pe,e("img",{src:n.$withBase("/dev-interface/overview.svg")},null,8,qe),Ge,e("ul",null,[e("li",null,[He,Je,Qe,o(a,{to:"/builtins/#labeling-tool-templates"},{default:i(()=>[Ye]),_:1}),Ke]),Ue,e("li",null,[Xe,o(a,{to:"/linting/#linting-rules"},{default:i(()=>[Ze]),_:1}),et,tt,ot]),nt,at]),it,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/create-node.gif")},null,8,st),lt,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/config-node.gif")},null,8,rt),dt,e("ul",null,[ht,e("li",null,[ct,e("ul",null,[e("li",null,[ut,o(a,{to:"/builtins/#computation-modules"},{default:i(()=>[gt]),_:1})])])]),pt,ft]),mt,_t,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/move-node.gif")},null,8,bt),wt,vt,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/remove-node.gif")},null,8,kt),yt,xt,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/create-edge.gif")},null,8,Lt),Tt,Ot,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/remove-edge.gif")},null,8,Bt),Et,It,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/multi-select.gif")},null,8,jt),$t,zt,e("img",{style:{"max-height":"40vh"},src:n.$withBase("/editing/select-all.gif")},null,8,St),Ft,e("img",{src:n.$withBase("/linting/overview.gif")},null,8,Mt),At,Wt,e("img",{src:n.$withBase("/linting/pass.png")},null,8,Ct),e("p",null,[Vt,o(a,{to:"/linting/#linting-rules"},{default:i(()=>[Dt]),_:1}),Nt]),Rt,e("img",{src:n.$withBase("/preview-interface/overview.svg")},null,8,Pt),qt,Gt,Ht,e("img",{src:n.$withBase("/docking.png")},null,8,Jt),Qt,Yt,e("img",{style:{"max-height":"50vh"},src:n.$withBase("/variable-inspector/variable-inspector.gif")},null,8,Kt),Ut,e("img",{style:{"max-height":"20vh"},src:n.$withBase("/control-flow-manipulation.png")},null,8,Xt),Zt,eo,to],64)}var io=d(g,[["render",oo]]);export{io as default};
