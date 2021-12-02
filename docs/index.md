# Introduction

## What is OneLabeler?

OneLabeler is a **framework for building data labeling tools**.
OneLabeler is targeted at developers who want to build custom [data labeling tools](background/#what-is-a-data-labeling-tool) for their data-driven applications.
It features a [visual programming interface](#visual-programming-in-onelabeler) where the developer can compose interface modules and algorithm modules into a data labeling tool.

OneLabeler builds in a [collection of implementations](#built-in-modules) of interface modules and algorithm modules with such the developer can compose data labeling tools without textual programming.
Meanwhile, it is also possible to create customized interface modules and algorithm modules following the [module API design](#module-api-design) of OneLabeler.

If you want to use OneLabeler to develop your own data labeling tool, please check our documentation that [walks through](#getting-started) major processes of building a data labeling tool with OneLabeler and illustrates [advanced usages](./advanced.md).

If you want to see if someone has already used OneLabeler to build a data labeling tool that meets your needs, have a look at the [built-in templates](#built-in-templates) of OneLabeler and our [gallery of created data labeling tools](./gallery.md).

::: details Watch a demo video walking through the usages of OneLabeler
<iframe src="/video.mp4" style="width: 100%; max-height: 60vh;" alt="demo"></iframe>
:::

## Getting Started

OneLabeler can be installed with docker:

```bash
git clone <link-removed-for-anonymity> OneLabeler
cd OneLabeler
docker compose up
```

OneLabeler should then be accessible at `localhost:8080` as a web application.

More details can be found at the [installation Instructions](./Installation.md).

## Basic Concepts

### Data Labeling Workflow

In OneLabeler, a data labeling tool is modeled as a flowchart depicting a workflow.
A node in the flowchart represents an interface module or an algorithm module, which corresponds to a human/machine/mixed computation procedure.
An edge in the flowchart represents the execution order between two nodes.
The nodes in share a global storage from which the nodes can fetch inputs.

:::danger Edge Semantics
The edges in OneLabeler's flowchart model **only represent execution order**.
The edges **DO NOT transmit data**.
Instead, the module inputs are fetched from the global storage.
The module outputs are stored to the global storage.
:::

### States and Modules

In the following, we refer to variables stored in the global storage as **states** and the interface and algorithm modules as **modules**.

OneLabeler assumes a fixed set of states and types of modules to be used in data labeling tools.
Specifically, it assumes seven states:

- **Data Objects**: the list of entities to be labeled.
- **Labels**: the list of annotations assigned to entities.
- **Features**: the list of feature representations of entities.
- **Model**: a machine-learned predictive model.
- **Samples**: an entity subset annotators work with a time.
- **Categories**: the list of valid label categories.
- **Stop**: whether the data labeling process is finished and should stop.

and eight type of modules:

- **Interactive Labeling**: the core type of modules where annotators carry out labeling tasks in an interface.
- **Data Object Selection**: the type of modules that determines the order for data objects to be selected and labeled by annotators.
- **Model Training**: the type of modules that trains/updates a learning model (that may serve as input to other modules) with newly gathered labels.
- **Feature Extraction**: the type of modules that turns data objects into feature representations, typically vectors, facilitating other modules that cannot work with raw data objects (e.g., model training).
- **Default Labeling**: the type of modules that assigns tentative labels to data objects, simplifying annotators’ work from creating labels to verification and correction.
- **Quality Assurance**: the type of modules that reviews label quality and corrects erroneous labels.
- **Stoppage Analysis**: the type of modules that decides whether to keep assigning tasks to annotators or stop.
- **Label Ideation**: the type of modules that develops the label categories used for labeling.

You may refer to our [writing](link-removed-for-anonymity) for detailed explanation why we assume these states and types of modules.

## Visual Programming

### Interface Overview

Within the OneLabeler interface as shown below, the user can visually configure the data labeling workflow.

<img src="/interface-overview.png">

The expected usage of OneLabeler interface is that the developer first choose a [built-in template](#built-in-templates) closest to the required data labeling workflow.
Then, the developer [edit](#editing) nodes and edges of the template.
During the editing process, the developer can check the [linting messages](#linting) and fix the errors.
After finishing a first draft of the workflow, the developer can use the created prototype labeling tool and conduct [runtime debugging](#runtime-debugging) of the prototype.
When the developer verify that the prototype works as expected, the created labeling tool can be [exported](#exporting).

### Editing

To visually configure the data labeling workflow, the developer has to carry out the following operations:

- Create a Node

<img style="max-height: 40vh" src="/create-node.gif">

- Configure a Node

<img style="max-height: 40vh" src="/config-node.gif">

- Remove a Node

<img style="max-height: 40vh" src="/remove-node.gif">

- Create an Edge

<img style="max-height: 40vh" src="/create-edge.gif">

- Remove an Edge

<img style="max-height: 40vh" src="/remove-edge.gif">

### Linting

To assist the developer to create data labeling tools that functions, the created data labeling tool's workflow is validated against several linting rules.

::: details See the full list of linting rules
- Basic data structure checking
    - Each node has a unique id
    - The source and target of each edge are existing nodes
- Ensuring the graph is a valid flowchart
    - Contains one initialization node
    - Contains one exit node
    - Each node meets indegree and outdegree requirements
        - An initialization node has indegree 0 and outdegree 1
        - A decision node has indegree >= 1 and outdegree 2
        - An exit node has indegree >= 1 and outdegree 0
        - A process node has indegree >= 1 and outdegree 1
    - Each node is reachable from the initialization node
    - Each node can reach the exit node
    - No self loops for each node
- Module inputs are initialized before used
- Module computations are not redundant
    - After a state is modified, it should not be modified again until it is used as input to a module
    - After a module is visited, the same module should not be visited again until at least one of its inputs has been modified
- All traversals visit an interactive labeling node
- All the module implementations are specified
:::

In the OneLabeler interface, the violated linting rules will be displayed in the console panel.

For example, below shows the console panel that says the node indegree and outdegree requirements are violated:

<img src="/linting-errors.png">

Below shows the console panel when all the linting rules are passed:

<img src="/linting-pass.png">

### Runtime Debugging

In OneLabeler, the developer can debug the created data labeling tool at runtime.

#### Prototype Preview

The developer can preview and play with the created prototype in OneLabeler.
The prototype preview is updated realtime as the developer edits the workflow.

Below shows a preview of an image classification tool:

<img src="/prototype-preview.png">

#### Juxtaposing Workflow and Prototype

The developer can choose to juxtapose the workflow and the prototype preview as below:

<img src="/docking.png">

#### Variable Inspector

When using the prototype preview, the developer can inspect the internal states of the labeling tool in the variable inspector panel as below:

<img style="max-height: 50vh" src="/variable-inspector.png">

### Exporting

The created data labeling tool can be exported in three formats:

- as an installer
- as a zip file of bundled code
- as a zip file of the source code.

::: tip The export buttons in the interface
<img src="/export.png">
:::

## Built-in Modules

OneLabeler builds in the implementation of a variety of interface and algorithm modules at developers' disposal.
These modules can be composed into data labeling tools without requiring textual programming.

::: details See the full list of built-in modules
| Module                                                                                                                        | Type                              | interface/algorithm |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------- |
| bitmap image                                                                                                                  | interactive labeling - data type  | interface           |
| text                                                                                                                          | interactive labeling - data type  | interface           |
| video                                                                                                                         | interactive labeling - data type  | interface           |
| audio                                                                                                                         | interactive labeling - data type  | interface           |
| point cloud                                                                                                                   | interactive labeling - data type  | interface           |
| vector image                                                                                                                  | interactive labeling - data type  | interface           |
| pdf                                                                                                                           | interactive labeling - data type  | interface           |
| website                                                                                                                       | interactive labeling - data type  | interface           |
| classification                                                                                                                | interactive labeling - label task | interface           |
| multi-label classification                                                                                                    | interactive labeling - label task | interface           |
| freeform text annotation                                                                                                      | interactive labeling - label task | interface           |
| object detection                                                                                                              | interactive labeling - label task | interface           |
| 2D segmentation                                                                                                               | interactive labeling - label task | interface           |
| 3D segmentation                                                                                                               | interactive labeling - label task | interface           |
| span tagging                                                                                                                  | interactive labeling - label task | interface           |
| span relation                                                                                                                 | interactive labeling - label task | interface           |
| temporal segmentation                                                                                                         | interactive labeling - label task | interface           |
| single object display                                                                                                         | interactive labeling              | interface           |
| grid matrix                                                                                                                   | interactive labeling              | interface           |
| cluster centroids                                                                                                             | data object selection             | algorithm           |
| cluster index                                                                                                                 | data object selection             | algorithm           |
| dense areas                                                                                                                   | data object selection             | algorithm           |
| entropy                                                                                                                       | data object selection             | algorithm           |
| entropy diversity                                                                                                             | data object selection             | algorithm           |
| entropy diversity density                                                                                                     | data object selection             | algorithm           |
| least confident                                                                                                               | data object selection             | algorithm           |
| smallest margin                                                                                                               | data object selection             | algorithm           |
| interactive projection                                                                                                        | data object selection             | interface           |
| [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)                                                    | default labeling                  | algorithm           |
| [DeepLab](https://github.com/tensorflow/tfjs-models/tree/master/deeplab)                                                      | default labeling                  | algorithm           |
| [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)                                                  | default labeling                  | algorithm           |
| [POS tagging](https://www.nltk.org/api/nltk.tag.html)                                                                         | default labeling                  | algorithm           |
| general purpose model prediction                                                                                              | default labeling                  | algorithm           |
| image bag of words                                                                                                            | feature extraction                | algorithm           |
| image linear discriminant analysis                                                                                            | feature extraction                | algorithm           |
| image singular value decomposition                                                                                            | feature extraction                | algorithm           |
| text non-negative matrix factorization                                                                                        | feature extraction                | algorithm           |
| [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) extractor                                        | feature extraction                | algorithm           |
| retrain [decision tree](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier)                | model training                    | algorithm           |
| retrain [SVM](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC)                           | model training                    | algorithm           |
| retrain [logistic regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression)      | model training                    | algorithm           |
| retrain [RBN](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM) | model training                    | algorithm           |
| online graph-based label propagation                                                                                          | model training                    | algorithm           |
| one by one checking                                                                                                           | quality assurance                 | interface           |
| labeled rate                                                                                                                  | stoppage analysis                 | algorithm           |
| editable label category table                                                                                                 | label ideation                    | interface           |
:::

## Built-in Templates

OneLabeler builds in a collection of template data labeling tools.
These templates can be used directly, or used as boilerplate for creating new data labeling tools.

The list of built-in templates:

- audio classification
- audio temporal segmentation
- image classification
- mixed-initiative image classification
- image segmentation
- point cloud classification
- point cloud segmentation
- text classification
- text named entity recognition
- video classification
- video temporal segmentation
- webpage classification
