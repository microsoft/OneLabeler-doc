import{_ as i,r as a,o as r,c as s,a as e,b as l,F as d,d as o,e as t}from"./app.df2b219c.js";const h={},u=o('<h1 id="linting-rules" tabindex="-1"><a class="header-anchor" href="#linting-rules" aria-hidden="true">#</a> Linting Rules</h1><p>To assist the developer in debugging the data labeling workflow, we develop a collection of linting rules that are integrated in the OneLabeler system to dynamically validate the workflow. The console panel in the workflow displays the error messages corresponding to violations of the linting rules.</p><p>In the following, we describe the linting rules in details, and rank them by priority. The linting rules covers various aspects as summarized in the table below ranked by priority.</p><p>In the OneLabeler system, when high priority errors exist, <strong>low priority errors are suppressed</strong> to avoid overwhelming the developer with a large number of error messages.</p><table><thead><tr><th>rule</th><th>aspect</th></tr></thead><tbody><tr><td><a href="#no-repeated-node-id">no-repeated-node-id</a></td><td>graph data structure validity</td></tr><tr><td><a href="#no-invalid-edge">no-invalid-edge</a></td><td>graph data structure validity</td></tr><tr><td><a href="#should-involve-labeling">should-involve-labeling</a></td><td>program is a labeling system</td></tr><tr><td><a href="#should-have-one-initialization-node">should-have-one-initialization-node</a></td><td>flowchart definition</td></tr><tr><td><a href="#should-have-one-exit-node">should-have-one-exit-node</a></td><td>flowchart definition</td></tr><tr><td><a href="#should-choose-implementation">should-choose-implementation</a></td><td>program implements all the declarations</td></tr><tr><td><a href="#flowchart-node-indegree-range">flowchart-node-indegree-range</a></td><td>flowchart definition</td></tr><tr><td><a href="#flowchart-node-outdegree-range">flowchart-node-outdegree-range</a></td><td>flowchart definition</td></tr><tr><td><a href="#should-choose-branching-condition">should-choose-branching-condition</a></td><td>flowchart definition</td></tr><tr><td><a href="#no-repeated-branching-condition">no-repeated-branching-condition</a></td><td>flowchart definition</td></tr><tr><td><a href="#no-isolated-node">no-isolated-node</a></td><td>program has no dead code</td></tr><tr><td><a href="#no-dead-end-node">no-dead-end-node</a></td><td>program stops</td></tr><tr><td><a href="#no-self-loops">no-self-loops</a></td><td>program has no infinite loops</td></tr><tr><td><a href="#no-uninitialized-inputs">no-uninitialized-inputs</a></td><td>program use variables after declaration</td></tr><tr><td><a href="#no-repetitive-function-call">no-repetitive-function-call</a></td><td>program has no redundant computation</td></tr><tr><td><a href="#no-unused-function-return">no-unused-function-return</a></td><td>program has no redundant computation</td></tr><tr><td><a href="#prefer-selection-in-the-loop">prefer-selection-in-the-loop</a></td><td>labeling tool utilizes iterative selection</td></tr><tr><td><a href="#prefer-model-update-in-the-loop">prefer-model-update-in-the-loop</a></td><td>labeling tool utilizes iterative model training</td></tr></tbody></table><h2 id="no-repeated-node-id" tabindex="-1"><a class="header-anchor" href="#no-repeated-node-id" aria-hidden="true">#</a> no-repeated-node-id</h2><p><strong>Definition</strong>: Each node in the workflow should have a unique id. Repeated node id is not allowed.</p><p><strong>Details</strong>: This rule checks the validity of the graph data structure.</p>',8),p=e("strong",null,"When is it violated",-1),f=t(": When the workflow is created in the visual programming interface, this rule is automatically obeyed. For all the nodes created in the visual programming interface, OneLabeler by default use "),c={href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"},g=t("uuid version 4"),w=t(" to automatically generate the node id. This rule may be violated when the workflow is uploaded to OneLabeler from a JSON file."),v=o('<p><strong>How to fix violations</strong>: Revise node id to avoid repetition.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="no-invalid-edge" tabindex="-1"><a class="header-anchor" href="#no-invalid-edge" aria-hidden="true">#</a> no-invalid-edge</h2><p><strong>Definition</strong>: For each edge in the workflow, its source/target should store the id of a node in the workflow. It is not allowed to have invalid source/target that does not correspond to any node in the workflow.</p><p><strong>Details</strong>: This rule checks the validity of the graph data structure.</p><p><strong>When is it violated</strong>: When the workflow is created in the visual programming interface, this rule is automatically obeyed. This rule may be violated when the workflow is uploaded to OneLabeler from a JSON file.</p><p><strong>How to fix violations</strong>: Remove invalid edges.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="should-involve-labeling" tabindex="-1"><a class="header-anchor" href="#should-involve-labeling" aria-hidden="true">#</a> should-involve-labeling</h2><p><strong>Definition</strong>: For all the traversals from the initialization node to the exit node, interactive labeling node should be visited.</p><p><strong>Details</strong>: This rule validates the workflow involves data labeling.</p><p><strong>When is it violated</strong>:</p><ul><li>When there is no interactive labeling node in the workflow, or</li><li>When the workflow contains branching structure and the interactive labeling node is not visited in some branches.</li></ul><p><strong>How to fix violations</strong>:</p><ul><li>If there is no interactive labeling node in the workflow, add one.</li><li>If there exist one or multiple interactive labeling nodes in the workflow, find the branch(es) of the workflow that does not involve interactive labeling, and then decide how to revise the branch (e.g., decide whether to add an interactive labeling node to the branch, remove the branch, or revise the edge connections).</li></ul><p><strong>When may violations be left unfixed</strong>: When the developer intend to build a workflow that is not an interactive labeling workflow. While it is possible to build such workflows in OneLabeler, it is not the intended use of OneLabeler.</p><h2 id="should-have-one-initialization-node" tabindex="-1"><a class="header-anchor" href="#should-have-one-initialization-node" aria-hidden="true">#</a> should-have-one-initialization-node</h2><p><strong>Definition</strong>: The workflow should contain one initialization node.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart, as a valid flowchart should have one and only one start node.</p><p><strong>When is it violated</strong>: When there is no initialization node in the workflow.</p><p><strong>How to fix violations</strong>: Add an initialization node.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="should-have-one-exit-node" tabindex="-1"><a class="header-anchor" href="#should-have-one-exit-node" aria-hidden="true">#</a> should-have-one-exit-node</h2><p><strong>Definition</strong>: The workflow should contain one exit node.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart, as a valid flowchart should have one and only one exit node.</p><p><strong>When is it violated</strong>: When there is no exit node in the workflow.</p><p><strong>How to fix violations</strong>: Add an exit node.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="should-choose-implementation" tabindex="-1"><a class="header-anchor" href="#should-choose-implementation" aria-hidden="true">#</a> should-choose-implementation</h2><p><strong>Definition</strong>: For each node in the workflow, an implementation should be chosen to determine what interface to show and what algorithm to to execute. For each implementation, its hyperparameters should also be fixed.</p><p><strong>Details</strong>: This rule validates the workflow can be executed, as the nodes without concrete implementations cannot be executed.</p><p><strong>When is it violated</strong>:</p><ul><li>When the implementation is not chosen for some node(s) in the workflow, or</li><li>When the hyperparameters is not chosen for some implementation(s).</li></ul><p><strong>How to fix violations</strong>: Choose the implementation and implementation hyperparameter in the module settings panel.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="flowchart-node-indegree-range" tabindex="-1"><a class="header-anchor" href="#flowchart-node-indegree-range" aria-hidden="true">#</a> flowchart-node-indegree-range</h2><p><strong>Definition</strong>: The indegree of nodes in the workflow should satisfy indegree constraints for flowchart nodes.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart, specifically:</p><ul><li>initialization node should have indegree zero</li><li>other nodes should have indegree nonzero</li></ul><p><strong>When is it violated</strong>: When the indegree of nodes are not within the valid ranges.</p><p><strong>How to fix violations</strong>: Add or remove the inward edges to the nodes to make the indegrees fall into the valid ranges.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="flowchart-node-outdegree-range" tabindex="-1"><a class="header-anchor" href="#flowchart-node-outdegree-range" aria-hidden="true">#</a> flowchart-node-outdegree-range</h2><p><strong>Definition</strong>: The outdegree of nodes in the workflow should satisfy outdegree constraints for flowchart nodes.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart, specifically:</p><ul><li>initialization node and computation node should have outdegree one</li><li>conditional branching node should have outdegree two</li><li>exit node should have outdegree zero</li></ul><p><strong>When is it violated</strong>: When the outdegree of nodes are not within the valid ranges.</p><p><strong>How to fix violations</strong>: Add or remove the outward edges from the nodes to make the outdegree fall into the valid ranges.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="should-choose-branching-condition" tabindex="-1"><a class="header-anchor" href="#should-choose-branching-condition" aria-hidden="true">#</a> should-choose-branching-condition</h2><p><strong>Definition</strong>: A branching condition should be bound to each outward edge of conditional branching nodes.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart, as the outward edges of conditional branching nodes in flowchart are always bound with true or false.</p><p><strong>When is it violated</strong>: When the branching condition is not chosen for an outward edge of a conditional branching node.</p><p><strong>How to fix violations</strong>: Choose a branching condition for the outward edge.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="no-repeated-branching-condition" tabindex="-1"><a class="header-anchor" href="#no-repeated-branching-condition" aria-hidden="true">#</a> no-repeated-branching-condition</h2><p><strong>Definition</strong>: The branching conditions bound to each outward edge of a conditional branching node should be different.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart, as the two outward edges of a conditional branching node in flowchart should have different branching conditions, with one edge bound with true and the other edge bound with false.</p><p><strong>When is it violated</strong>: When the branching condition of the two outward edges of a conditional branching node is repeated (e.g., both being true or both being false).</p><p><strong>How to fix violations</strong>: Change the branching condition for one of the two outward edges.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="no-isolated-node" tabindex="-1"><a class="header-anchor" href="#no-isolated-node" aria-hidden="true">#</a> no-isolated-node</h2><p><strong>Definition</strong>: All the nodes in the workflow should be reachable from the initialization node.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart. A flowchart should not have redundant nodes that cannot be reached. These unreachable nodes corresponds to dead code in programs that are never executed.</p><p><strong>When is it violated</strong>: Usually when there exist more than one connected components in the graph.</p><p><strong>How to fix violations</strong>: Revise the edge connections to make sure all the nodes can be visited from the initialization node.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed. While the workflow typically would still function when there exist unreachable nodes, there is no reason to keep the unreachable nodes.</p><h2 id="no-dead-end-node" tabindex="-1"><a class="header-anchor" href="#no-dead-end-node" aria-hidden="true">#</a> no-dead-end-node</h2><p><strong>Definition</strong>: The exit node should be reachable from all the nodes in the workflow.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart. A flowchart should not have dead end nodes that cannot reach the exit node. The nodes that cannot reach the exit node correspond to programs that cannot terminate.</p><p><strong>When is it violated</strong>: Usually when there exist more than one connected components in the graph.</p><p><strong>How to fix violations</strong>: Revise the edge connections to make sure the exit node can be reached by all the nodes.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="no-self-loops" tabindex="-1"><a class="header-anchor" href="#no-self-loops" aria-hidden="true">#</a> no-self-loops</h2><p><strong>Definition</strong>: For each node in the workflow, there should be no self-loops on the node.</p><p><strong>Details</strong>: This rule validates the workflow is a valid flowchart. If there exists a self-loop, a traversal of the flowchart can never end when the node with a self-loop is visited. The nodes with self-loops correspond to infinite loops in programs.</p><p><strong>When is it violated</strong>: When there exist at least one self-loop in the graph.</p><p><strong>How to fix violations</strong>: Remove all the self-loops.</p><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed.</p><h2 id="no-uninitialized-inputs" tabindex="-1"><a class="header-anchor" href="#no-uninitialized-inputs" aria-hidden="true">#</a> no-uninitialized-inputs</h2><p><strong>Definition</strong>: For each node in the workflow and for each input state to the node, the input state should be initialized. The input state may be initialized by the initialization node, or be initialized by serving as the output state of another node visited before currently concerned node.</p><p><strong>Details</strong>: This rule validates the workflow corresponds to a valid program. For a valid program, all the variables should be declared and given a value before its value is used. The workflow that has uninitialized inputs corresponds to programs that use a variable before it&#39;s value is set.</p><p><strong>When is it violated</strong>: When there exist at least a node that has at least one input uninitialized.</p><p><strong>How to fix violations</strong>:</p><ul><li>Add or move nodes that can initialize the uninitialized inputs before the nodes with this error message, or</li><li>Initialize the the uninitialized inputs in the initialization node.</li></ul><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed. Note that the workflow typically may still function when there exist uninitialized inputs, if the implementation of the modules with uninitialized inputs implement edge case handling for handling uninitialized inputs.</p><h2 id="no-repetitive-function-call" tabindex="-1"><a class="header-anchor" href="#no-repetitive-function-call" aria-hidden="true">#</a> no-repetitive-function-call</h2><p><strong>Definition</strong>: After a node is visited, it should not be visited again until at least one of its input(s) has changed.</p><p><strong>Details</strong>: This rule validates the workflow has no redundant computation. A node that violates this rule corresponds to a program in which a function is called repeatedly in a for loop with parameters not edited in the for loop. In this case, the function should have been moved outside of the for loop to avoid redundant computation.</p><p><strong>When is it violated</strong>: When the node is in a loop, and that the other nodes in the loop do not change the inputs to the node.</p><p><strong>How to fix violations</strong>:</p><ul><li>Move the node outside of the loop, or</li><li>Add node(s) to the loop to modify the input(s) of the node.</li></ul><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed. Note that the workflow will still function even if this error is not fixed, but the redundant computation will unnecessarily slow down the program when executing the workflow.</p><h2 id="no-unused-function-return" tabindex="-1"><a class="header-anchor" href="#no-unused-function-return" aria-hidden="true">#</a> no-unused-function-return</h2><p><strong>Definition</strong>: After a node is visited, at least one of its outputs should be consumed. Specifically, for each path from A to the exit node, there exist at least one node B in the path and at least one state O that satisfy the following conditions.</p><ol><li>O is an output of A</li><li>O is an input of B</li><li>A and B, there exist no other node that outputs O</li></ol><p><strong>Details</strong>: This rule validates the workflow has no redundant computation. A node that violates this rule corresponds to a program in which a function is called but its output is not used.</p><p><strong>When is it violated</strong>:</p><ul><li>When the none of the output states of a node is used as input states to its following nodes in the workflow.</li><li>When the all the output states of a node is overwritten by other nodes that output the same states before they are used.</li><li>When the node A&#39;s implementation incorrectly declared that state O is its output.</li></ul><p><strong>How to fix violations</strong>:</p><ul><li>Add another node after the node concerned in the error is visited to consume at least one output of the node before the output is overwritten.</li><li>Remove state O from the output of node A&#39;s implementation.</li></ul><p><strong>When may violations be left unfixed</strong>: Violations of this rule should always be fixed. Note that the workflow will still function even if this error is not fixed, but the redundant computation will unnecessarily slow down the program when executing the workflow.</p><h2 id="prefer-selection-in-the-loop" tabindex="-1"><a class="header-anchor" href="#prefer-selection-in-the-loop" aria-hidden="true">#</a> prefer-selection-in-the-loop</h2><p><strong>Definition</strong>: It is recommended to have a data object selection node in the workflow and put the node inside a loop.</p><p><strong>Details</strong>: This rule validates the workflow used data object selection in a loop to iteratively update the sampled data objects. If there is no data object selection in a loop, the sampled data objects will never be updated, meaning that the annotators will always see the same set of data objects.</p><p><strong>When is it violated</strong>:</p><ul><li>When there is no data object selection node in the workflow, or</li><li>When there is no data object selection node in a loop in the workflow.</li></ul><p><strong>How to fix violations</strong>:</p><ul><li>Add a data object selection node to the workflow if there is no data object selection node.</li><li>Revise the edge connections to make sure there exist at least one data object selection inside a loop.</li></ul><p><strong>When may violations be left unfixed</strong>: This rule is a recommended but <strong>not compulsory</strong>. In the case where the developer has already initialized the samples in the initialization node, it is okay to break this rule.</p><h2 id="prefer-model-update-in-the-loop" tabindex="-1"><a class="header-anchor" href="#prefer-model-update-in-the-loop" aria-hidden="true">#</a> prefer-model-update-in-the-loop</h2><p><strong>Definition</strong>: When there exist a node in the workflow that takes model as input and that the node is inside a loop, it is recommended to have a model training node inside the same loop to incrementally update he model.</p><p><strong>Details</strong>: This rule validates the workflow used model training in a loop to iteratively update the model.</p><p><strong>When is it violated</strong>: When there exist a node take takes model as input inside a loop, and that the loop does not contain a model training node.</p><p><strong>How to fix violations</strong>: Add a model training node into the loop.</p><p><strong>When may violations be left unfixed</strong>: This rule is a recommended but <strong>not compulsory</strong>. In the cases where the model update is time-consuming, the developer can well ignore this rule.</p>',116);function b(m,x){const n=a("ExternalLinkIcon");return r(),s(d,null,[u,e("p",null,[p,f,e("a",c,[g,l(n)]),w]),v],64)}var k=i(h,[["render",b]]);export{k as default};
