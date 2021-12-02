# Advanced

::: danger Notice
The expediency to integrate customized modules into OneLabeler requires cloning and editing the source code of OneLabeler.
We plan to integrate unit testing frameworks to allow developing custom modules separately and command line interfaces to enable integrating the custom modules into OneLabeler without manually editing the source code of OneLabeler.
:::

## Module API design

The interface modules and algorithm modules in OneLabeler share the same API `IModule`:

```typescript
/** The valid states. */
enum State {
  DataObjects,
  Labels,
  Features,
  Model,
  Samples,
  Categories,
  Stop,
}

/** The valid module types. */
enum ModuleType {
  InteractiveLabeling,
  DataObjectSelection,
  ModelTraining,
  FeatureExtraction,
  DefaultLabeling,
  QualityAssurance,
  StoppageAnalysis,
  LabelIdeation,
}

/** The module API. */
interface IModule<I extends State, O extends State> {
  /** Inputs to the module.  */
  inputs: I[];
  /** Outputs of the module (typically one). */
  outputs: O[];
  /** The type of the module for indexing it in OneLabeler interface. */
  type: ModelType;
  /** The name of the module displayed in OneLabeler interface. */
  label: string;
  /** Whether the execution of the module is blocking or not. */
  blocking: boolean;
  /** The interface module implementation. */
  render?: Vue.VueConstructor;
  /** The algorithm module implementation. */
  run?: (inputs: Record<I, unknown>) => Record<O, unknown>;
}
```

## Customize Modules

::: warning Skill Requirements
To customize interface modules requires familiarity with [Vue](https://vuejs.org/).
To customize algorithm modules requires familiarity with JavaScript and ideally familiarity with Python and at least one machine learning library in JavaScript or Python.
:::

Technically, as long as the customized module follows the module API design, it should be a valid plugin for OneLabeler.

Asides, OneLabeler supports more fine grid customization for the interactive labeling module.
The customization can be conducted for the data type and the label task.

For data type customization, the `IDataTypeSetup` data structure should be filled:

```typescript
interface IDataObject {
  /** The uuid of the data object. */
  uuid: string;
}

interface ILabel {
  /** The uuid of the label. */
  uuid: string;
}

interface IDataTypeSetup<D extends IDataObject> {
  /** The name of the data type displayed in OneLabeler interface. */
  label: string;
  /** The tasks that can be composed with the data type. */
  tasks?: string[];
  /** The interface component for displaying a single instance of the data type. */
  display: Vue.VueConstructor;
  /** The handler for parsing import file into data objects. */
  handleImport: (input: File | FileList) => D[] | Promise<D[]>;
  /** The handler for label export. */
  handleExport: (dataObjects: D[], labels: ILabel[]) => void;
}
```

For label task customization, the `ILabelTaskTypeSetup` data structure should be filled:

```typescript
interface ILabelTaskTypeSetup {
  /** The name of the label task displayed in OneLabeler interface. */
  label: string;
  /** The toolbar UI widget for single object labeling. */
  singleTool?: Vue.VueConstructor;
  /** The toolbar UI widget for batch labeling. */
  batchTool?: Vue.VueConstructor;
  /** The UI widget for displaying single object label in a dedicated panel. */
  panel?: Vue.VueConstructor;
  /** The UI widget for overlaying single object label and interaction trigger. */
  overlay?: Vue.VueConstructor;
}
```

## Customize Templates

For template customization, the `WorkflowGraph` data structure should be filled:

```typescript
enum ControlType {
  Initialization,
  Decision,
  Exit,
}

type WorkflowNode = {
  id: string;
  label?: string;
  type?: ModuleType | ControlType;
  value: IModule;
  layout?: {
    x: number;
    y: number;
    width?: number;
    height?: number;
  };
}

enum PortDirection {
  Top = 'Top',
  Left = 'Left',
  Bottom = 'Bottom',
  Right = 'Right',
}

type WorkflowEdge = {
  /** The id of the source node. */
  source: string;
  /** The id of the target node. */
  target: string;
  id: string;
  condition?: boolean;
  layout?: {
    source: {
      direction: PortDirection,
      dx?: number;
      dy?: number;
    },
    target: {
      direction: PortDirection,
      dx?: number;
      dy?: number;
    }
  };
}

type WorkflowGraph = {
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  /** The name of the workflow as appear in the menu. */
  label?: string;
}
```
