# API Reference

## States

### Data Objects

The list of entities to be labeled.

The "data objects" state follows the `DataObjects` data structure as below.

```typescript
type DataObject = {
  /** The universal unique id of the data object. */
  uuid: string;
  /** The content of the data object. */
  content?: unknown;
}

type DataObjects = DataObject[];
```

### Labels

The list of annotations assigned to entities.

The "labels" state follows the `Labels` data structure as below.

```typescript
/** The label status types. */
enum StatusType {
  /** The data object is not viewed and not labeled. */
  New = 'New',
  /** The data object is viewed but not yet labeled. */
  Viewed = 'Viewed',
  /** The data object is viewed but skipped. */
  Skipped = 'Skipped',
  /** The data object is labeled. */
  Labeled = 'Labeled',
}

type Label = {
  /** The universal unique id of the data object that owns the label. */
  uuid: string;
  /** The label status. */
  status: StatusType;
  /** The content of the label for each label task. */
  [content: string]: unknown;
}

type Labels = Label[];
```

Note that the key of `Label` is dynamic and depends on the label tasks.
For example, for a classification task, the `Label` data structure will be:

```typescript
/** The label data structure for classification. */
type Label = {
  /** The universal unique id of the data object that owns the label. */
  uuid: string;
  /** The label status. */
  status: StatusType;
  /** The classification category. */
  category: string;
}
```

As another example, for a named entity detection task, the `Label` data structure will be:

```typescript
/** A named entity in a text data object. */
type Span = {
  /** The string of the entity. */
  text: string | null;
  /** The index of the entity's first character in the original text. */
  start: number;
  /** The index of the entity's first character after the original text. */
  end: number;
  /** The category of the entity. */
  category: Category;
  /** The uuid of the named entity. */
  uuid: string;
}

/** The label data structure for named entity detection. */
type Label = {
  /** The universal unique id of the data object that owns the label. */
  uuid: string;
  /** The label status. */
  status: StatusType;
  /** The named entities. */
  spans: Span[];
}
```

When **multiple label tasks** are enabled, the `Label` data structure will store the label for each task in a separate key.
For example, for a hybrid task of classification **and** named entity detection, the `Label` data structure will be:

```typescript
/** The label data structure for named entity detection. */
type Label = {
  /** The universal unique id of the data object that owns the label. */
  uuid: string;
  /** The label status. */
  status: StatusType;
  /** The classification category. */
  category: string;
  /** The named entities. */
  spans: Span[];
}
```

#### Built-in Label Types

Below lists the data structure of labels created with built-in label tasks.

```typescript
/** The label for classification. */
const category: Category;
```

```typescript
/** The label for multi-label classification. */
const categories: Category[];
```

```typescript
/** The label for freeform-text annotation. */
const text: { content: string };
```

```typescript
enum ShapeType {
  Polygon = 'Polygon',
  Rect = 'Rect',
  Point = 'Point',
}
type Point = [number, number];
type LabelShape = {
  category: Category;
  shape: ShapeType;
  contour: Point[] | Point;
  uuid: string;
}

/** The label for geometric object annotation. */
const shapes: LabelShape[];
```

```typescript
/** The label for pixel-level segmentation. */
const mask: {
  /** The mask content as base64 string. */
  content: string | null;
  /** The color encoding of the stored mask image. */
  label2color?: { [key: string]: number | [number, number, number] } | null;
  /** The width of the mask. */
  width?: number | null;
  /** The height of the mask. */
  height?: number | null;
}
```

```typescript
/** The interface of the named entity label of a text data object. */
type LabelTextSpan = {
  /** The string of the entity. */
  text: string | null;
  /** The index of the entity's first character in the original text. */
  start: number;
  /** The index of the entity's first character after the original text. */
  end: number;
  /** The category of the entity. */
  category: Category;
  /** The uuid for differentiating spans with the same content. */
  uuid: string;
}

/** The label for named-entity recognition. */
const textSpans: LabelTextSpan[];
```

```typescript
/** The interface of the temporal span of a video/audio data object. */
type LabelTimeSpan = {
  /** The timestamp of the first frame. */
  start: number;
  /** The timestamp of the final frame. */
  end: number;
  /** The category of the span. */
  category: Category;
  /** The uuid for differentiating spans with the same content. */
  uuid: string;
}

/** The label for temporal segmentation. */
const timeSpans: LabelTimeSpan[];
```

```typescript
/** The interface of the relation between two annotations. */
type LabelRelation = {
  /** The uuid of the source annotation. */
  sourceUuid: string;
  /** The uuid of the target annotation. */
  targetUuid: string;
  /** The uuid of the annotation itself. */
  uuid: string;
}

/** The label for text/time span relation annotation. */
const relations: LabelRelation[];
```

```typescript
/** The label for 3d segmentation. */
const pointLabels: Category[];
```

### Features

The list of feature representations of entities.

The "features" state follows the `Features` data structure as below.

```typescript
type Features = number[][];
```

### Samples

An entity subset annotators work with a time.

The "samples" state follows the `QueryUuids` data structure as below.

```typescript
/** Store the samples with the uuids of the sampled data objects. */
type QueryUuids = string[];
```

### Categories

The list of valid label categories.

The "categories" state follows the `Categories` data structure as below.

```typescript
/**
 * The names of label categories that can be used by label tasks
 * that use categories in the label data structure
 * (e.g., classification task, named entity detection task).
 */
type Categories = string[];
```

### Stop

Whether the data labeling process is finished and should stop.

The "stop" state follows the `Stop` data structure as below.

```typescript
type Stop = boolean;
```

## Module

### Computation & Control

The [eight type of computation modules](./#states-and-modules) in OneLabeler, no matter they are interface modules or algorithm modules, implement the `ComputationModule` data structure as below.

Besides, behind the scene, the **logic controls** (initialization, conditional branching, and exit) of the flowchart **are also implemented as modules** following the `ControlModule` data structure as below.

```typescript
/** The types of states. */
enum StateType {
  DataObjects,
  Labels,
  Features,
  Model,
  Samples,
  Categories,
  Stop,
}

/** The valid module types. */
enum ComputationType {
  InteractiveLabeling,
  DataObjectSelection,
  ModelTraining,
  FeatureExtraction,
  DefaultLabeling,
  QualityAssurance,
  StoppageAnalysis,
  LabelIdeation,
}

/** The computation module API. */
type ComputationModule<I, O extends StateType> = {
  /** Inputs to the module. */
  inputs: I[];
  /** Outputs of the module (typically one). */
  outputs: O[];
  /** The type of the module for indexing it in OneLabeler interface. */
  type: ComputationType;
  /** The name of the module displayed in OneLabeler interface. */
  label: string;
  /** Whether the execution of the module is blocking or not. */
  blocking: boolean;
  /** The interface module implementation. */
  render?: Vue.VueConstructor;
  /** The algorithm module implementation. */
  run?: (inputs: Record<I, unknown>) => Record<O, unknown>;
}

/** The three types of control nodes in a flowchart (start, decision, exit) */
enum ControlType {
  Initialization,
  Decision,
  Exit,
}

/** The control module API. */
type ControlModule<I, O extends StateType> = {
  /** Inputs to the module. */
  inputs: I[];
  /** Outputs of the module. */
  outputs: O[];
  /** The type of the module for indexing it in OneLabeler interface. */
  type: ControlType;
  /** The name of the module displayed in OneLabeler interface. */
  label: string;
}
```

Asides, OneLabeler has a more fine grid API for the interactive labeling module.
For the interactive labeling module, OneLabeler internally uses an API for [data type declaration](#data-type) and an API for [label task type declaration](#label-task-type) as below.

### Data Type

In OneLabeler, to support the annotation of a data type (e.g., image/text/video), a declaration of the data type as the following `DataTypeSetup` data structure is needed.

The declaration specifies:

- how a single data object should be rendered in the interface
- how to parse file(s) storing the data objects
- how to export the data object labels

```typescript
type DataTypeSetup<D extends DataObject> = {
  /** The name of the data type displayed in OneLabeler interface. */
  label: string;
  /** The types of tasks that can be composed with the data type. */
  tasks?: string[];
  /** The interface component for displaying a single instance of the data type. */
  display: Vue.VueConstructor;
  /** The handler for parsing import file(s) into data objects. */
  handleImport: (input: File | FileList) => D[] | Promise<D[]>;
  /** The handler for label export. */
  handleExport: (dataObjects: D[], labels: Labels) => void;
}
```

### Label Task Type

In OneLabeler, to support the annotation of a label task (e.g., classification/segmentation), a declaration of the label task type as the following `LabelTaskTypeSetup` data structure is needed.

The declaration specifies the UI widgets for conducting the label task.

```typescript
type LabelTaskTypeSetup = {
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

## Template

Each implementation of a data labeling tool template implements the `WorkflowGraph` data structure as below.

```typescript
type WorkflowNode = {
  /** The id of the node. */
  id: string;
  /** The name of the node as appear in the interface. */
  label?: string;
  type?: ComputationType | ControlType;
  /** The chosen implementation (null when not chosen). */
  value: IModule | null;
  /**
   * The layout specifying where the node should
   * be rendered and the size of the node.
   */
  layout?: {
    /** The position of the top left corner of the node. */
    x: number;
    y: number;
    /** The size of the node. */
    width?: number;
    height?: number;
  };
}

/**
 * The type of relative position (as discrete state) of the port
 * in the node containing the port.
 */
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
  /** The id of the edge itself. */
  id: string;
  /** The condition bound to the edge for outward edges of conditional branching. */
  condition?: boolean;
  /** The layout specifying where the edge should be rendered in the interface. */
  layout?: {
    source: {
      /**
       * The relative position (as discrete state) of the port
       * in the node containing the port.
       */
      direction: PortDirection,
      /**
       * The relative position (in pixels) of the port
       * to the top left corner of the node containing the port.
       */
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
