# Linting Rules

To assist the developer in debugging the data labeling workflow, we develop a collection of linting rules that are integrated in the OneLabeler system to dynamically validate the workflow.
The console panel in the workflow displays the error messages corresponding to violations of the linting rules.

In the following, we describe the linting rules in details, and rank them by priority.
The linting rules covers various aspects as summarized in the table below ranked by priority.

In the OneLabeler system, when high priority errors exist, **low priority errors are suppressed** to avoid overwhelming the developer with a large number of error messages.

| rule                                                                        | aspect                                          |
| --------------------------------------------------------------------------- | ----------------------------------------------- |
| [no-repeated-node-id](#no-repeated-node-id)                                 | graph data structure validity                   |
| [no-invalid-edge](#no-invalid-edge)                                         | graph data structure validity                   |
| [should-involve-labeling](#should-involve-labeling)                         | program is a labeling system                    |
| [should-have-one-initialization-node](#should-have-one-initialization-node) | flowchart definition                            |
| [should-have-one-exit-node](#should-have-one-exit-node)                     | flowchart definition                            |
| [should-choose-implementation](#should-choose-implementation)               | program implements all the declarations         |
| [flowchart-node-indegree-range](#flowchart-node-indegree-range)             | flowchart definition                            |
| [flowchart-node-outdegree-range](#flowchart-node-outdegree-range)           | flowchart definition                            |
| [should-choose-branching-condition](#should-choose-branching-condition)     | flowchart definition                            |
| [no-repeated-branching-condition](#no-repeated-branching-condition)         | flowchart definition                            |
| [no-isolated-node](#no-isolated-node)                                       | program has no dead code                        |
| [no-dead-end-node](#no-dead-end-node)                                       | program stops                                   |
| [no-self-loops](#no-self-loops)                                             | program has no infinite loops                   |
| [no-uninitialized-inputs](#no-uninitialized-inputs)                         | program use variables after declaration         |
| [no-repetitive-function-call](#no-repetitive-function-call)                 | program has no redundant computation            |
| [no-unused-function-return](#no-unused-function-return)                     | program has no redundant computation            |
| [prefer-selection-in-the-loop](#prefer-selection-in-the-loop)               | labeling tool utilizes iterative selection      |
| [prefer-model-update-in-the-loop](#prefer-model-update-in-the-loop)         | labeling tool utilizes iterative model training |

## no-repeated-node-id

**Definition**:
Each node in the workflow should have a unique id.
Repeated node id is not allowed.

**Details**:
This rule checks the validity of the graph data structure.

**When is it violated**:
When the workflow is created in the visual programming interface, this rule is automatically obeyed.
For all the nodes created in the visual programming interface, OneLabeler by default use [uuid version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier) to automatically generate the node id.
This rule may be violated when the workflow is uploaded to OneLabeler from a JSON file.

**How to fix violations**:
Revise node id to avoid repetition.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## no-invalid-edge

**Definition**:
For each edge in the workflow, its source/target should store the id of a node in the workflow.
It is not allowed to have invalid source/target that does not correspond to any node in the workflow.

**Details**:
This rule checks the validity of the graph data structure.

**When is it violated**:
When the workflow is created in the visual programming interface, this rule is automatically obeyed.
This rule may be violated when the workflow is uploaded to OneLabeler from a JSON file.

**How to fix violations**:
Remove invalid edges.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## should-involve-labeling

**Definition**:
For all the traversals from the initialization node to the exit node, interactive labeling node should be visited.

**Details**:
This rule validates the workflow involves data labeling.

**When is it violated**:
- When there is no interactive labeling node in the workflow, or
- When the workflow contains branching structure and the interactive labeling node is not visited in some branches.

**How to fix violations**:
- If there is no interactive labeling node in the workflow, add one.
- If there exist one or multiple interactive labeling nodes in the workflow, find the branch(es) of the workflow that does not involve interactive labeling, and then decide how to revise the branch (e.g., decide whether to add an interactive labeling node to the branch, remove the branch, or revise the edge connections).

**When may violations be left unfixed**:
When the developer intend to build a workflow that is not an interactive labeling workflow.
While it is possible to build such workflows in OneLabeler, it is not the intended use of OneLabeler.

## should-have-one-initialization-node

**Definition**:
The workflow should contain one initialization node.

**Details**:
This rule validates the workflow is a valid flowchart, as a valid flowchart should have one and only one start node.

**When is it violated**:
When there is no initialization node in the workflow.

**How to fix violations**:
Add an initialization node.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## should-have-one-exit-node

**Definition**:
The workflow should contain one exit node.

**Details**:
This rule validates the workflow is a valid flowchart, as a valid flowchart should have one and only one exit node.

**When is it violated**:
When there is no exit node in the workflow.

**How to fix violations**:
Add an exit node.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## should-choose-implementation

**Definition**:
For each node in the workflow, an implementation should be chosen to determine what interface to show and what algorithm to to execute.
For each implementation, its hyperparameters should also be fixed.

**Details**:
This rule validates the workflow can be executed, as the nodes without concrete implementations cannot be executed.

**When is it violated**:
- When the implementation is not chosen for some node(s) in the workflow, or
- When the hyperparameters is not chosen for some implementation(s).

**How to fix violations**:
Choose the implementation and implementation hyperparameter in the module settings panel.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## flowchart-node-indegree-range

**Definition**:
The indegree of nodes in the workflow should satisfy indegree constraints for flowchart nodes.

**Details**:
This rule validates the workflow is a valid flowchart, specifically:
- initialization node should have indegree zero
- other nodes should have indegree nonzero

**When is it violated**:
When the indegree of nodes are not within the valid ranges.

**How to fix violations**:
Add or remove the inward edges to the nodes to make the indegrees fall into the valid ranges.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## flowchart-node-outdegree-range

**Definition**:
The outdegree of nodes in the workflow should satisfy outdegree constraints for flowchart nodes.

**Details**:
This rule validates the workflow is a valid flowchart, specifically:
- initialization node and computation node should have outdegree one
- conditional branching node should have outdegree two
- exit node should have outdegree zero

**When is it violated**:
When the outdegree of nodes are not within the valid ranges.

**How to fix violations**:
Add or remove the outward edges from the nodes to make the outdegree fall into the valid ranges.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## should-choose-branching-condition

**Definition**:
A branching condition should be bound to each outward edge of conditional branching nodes.

**Details**:
This rule validates the workflow is a valid flowchart, as the outward edges of conditional branching nodes in flowchart are always bound with true or false.

**When is it violated**:
When the branching condition is not chosen for an outward edge of a conditional branching node.

**How to fix violations**:
Choose a branching condition for the outward edge.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## no-repeated-branching-condition

**Definition**:
The branching conditions bound to each outward edge of a conditional branching node should be different.

**Details**:
This rule validates the workflow is a valid flowchart, as the two outward edges of a conditional branching node in flowchart should have different branching conditions, with one edge bound with true and the other edge bound with false.

**When is it violated**:
When the branching condition of the two outward edges of a conditional branching node is repeated (e.g., both being true or both being false).

**How to fix violations**:
Change the branching condition for one of the two outward edges.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## no-isolated-node

**Definition**:
All the nodes in the workflow should be reachable from the initialization node.

**Details**:
This rule validates the workflow is a valid flowchart.
A flowchart should not have redundant nodes that cannot be reached.
These unreachable nodes corresponds to dead code in programs that are never executed.

**When is it violated**:
Usually when there exist more than one connected components in the graph.

**How to fix violations**:
Revise the edge connections to make sure all the nodes can be visited from the initialization node.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.
While the workflow typically would still function when there exist unreachable nodes, there is no reason to keep the unreachable nodes.

## no-dead-end-node

**Definition**:
The exit node should be reachable from all the nodes in the workflow.

**Details**:
This rule validates the workflow is a valid flowchart.
A flowchart should not have dead end nodes that cannot reach the exit node.
The nodes that cannot reach the exit node correspond to programs that cannot terminate.

**When is it violated**:
Usually when there exist more than one connected components in the graph.

**How to fix violations**:
Revise the edge connections to make sure the exit node can be reached by all the nodes.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## no-self-loops

**Definition**:
For each node in the workflow, there should be no self-loops on the node.

**Details**:
This rule validates the workflow is a valid flowchart.
If there exists a self-loop, a traversal of the flowchart can never end when the node with a self-loop is visited. 
The nodes with self-loops correspond to infinite loops in programs.

**When is it violated**:
When there exist at least one self-loop in the graph.

**How to fix violations**:
Remove all the self-loops.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.

## no-uninitialized-inputs

**Definition**:
For each node in the workflow and for each input state to the node, the input state should be initialized.
The input state may be initialized by the initialization node, or be initialized by serving as the output state of another node visited before currently concerned node.

**Details**:
This rule validates the workflow corresponds to a valid program.
For a valid program, all the variables should be declared and given a value before its value is used.
The workflow that has uninitialized inputs corresponds to programs that use a variable before it's value is set.

**When is it violated**:
When there exist at least a node that has at least one input uninitialized.

**How to fix violations**:

- Add or move nodes that can initialize the uninitialized inputs before the nodes with this error message, or
- Initialize the the uninitialized inputs in the initialization node.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.
Note that the workflow typically may still function when there exist uninitialized inputs, if the implementation of the modules with uninitialized inputs implement edge case handling for handling uninitialized inputs.

## no-repetitive-function-call

**Definition**:
After a node is visited, it should not be visited again until at least one of its input(s) has changed.

**Details**:
This rule validates the workflow has no redundant computation.
A node that violates this rule corresponds to a program in which a function is called repeatedly in a for loop with parameters not edited in the for loop.
In this case, the function should have been moved outside of the for loop to avoid redundant computation.

**When is it violated**:
When the node is in a loop, and that the other nodes in the loop do not change the inputs to the node.

**How to fix violations**:

- Move the node outside of the loop, or
- Add node(s) to the loop to modify the input(s) of the node.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.
Note that the workflow will still function even if this error is not fixed, but the redundant computation will unnecessarily slow down the program when executing the workflow.

## no-unused-function-return

**Definition**:
After a node is visited, at least one of its outputs should be consumed.
Specifically, for each path from A to the exit node, there exist at least one node B in the path and at least one state O that satisfy the following conditions.

1. O is an output of A
2. O is an input of B
3. A and B, there exist no other node that outputs O

**Details**:
This rule validates the workflow has no redundant computation.
A node that violates this rule corresponds to a program in which a function is called but its output is not used.

**When is it violated**:

- When the none of the output states of a node is used as input states to its following nodes in the workflow.
- When the all the output states of a node is overwritten by other nodes that output the same states before they are used.
- When the node A's implementation incorrectly declared that state O is its output.

**How to fix violations**:

- Add another node after the node concerned in the error is visited to consume at least one output of the node before the output is overwritten.
- Remove state O from the output of node A's implementation.

**When may violations be left unfixed**:
Violations of this rule should always be fixed.
Note that the workflow will still function even if this error is not fixed, but the redundant computation will unnecessarily slow down the program when executing the workflow.

## prefer-selection-in-the-loop

**Definition**:
It is recommended to have a data object selection node in the workflow and put the node inside a loop.

**Details**:
This rule validates the workflow used data object selection in a loop to iteratively update the sampled data objects.
If there is no data object selection in a loop, the sampled data objects will never be updated, meaning that the annotators will always see the same set of data objects.

**When is it violated**:

- When there is no data object selection node in the workflow, or
- When there is no data object selection node in a loop in the workflow.

**How to fix violations**:

- Add a data object selection node to the workflow if there is no data object selection node.
- Revise the edge connections to make sure there exist at least one data object selection inside a loop.

**When may violations be left unfixed**:
This rule is a recommended but **not compulsory**.
In the case where the developer has already initialized the samples in the initialization node, it is okay to break this rule.

## prefer-model-update-in-the-loop

**Definition**:
When there exist a node in the workflow that takes model as input and that the node is inside a loop, it is recommended to have a model training node inside the same loop to incrementally update he model.

**Details**:
This rule validates the workflow used model training in a loop to iteratively update the model.

**When is it violated**: When there exist a node take takes model as input inside a loop, and that the loop does not contain a model training node.

**How to fix violations**: Add a model training node into the loop.

**When may violations be left unfixed**:
This rule is a recommended but **not compulsory**.
In the cases where the model update is time consuming, the developer can well ignore this rule.
