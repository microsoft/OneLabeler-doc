# Customization

::: warning Notice
To utilize the full power of OneLabeler's customization functionalities, you are strongly recommended to download OneLabeler's source code and [build OneLabeler from source](installation/#build-from-source).
:::

## CLI

To integrate customized modules into OneLabeler requires editing the source code of OneLabeler.
We provide a command line interface (CLI) to assist developers to do the customization.

The developer can execute the command `npm run plop` inside the `./client` folder of the source code to activate the command line interface as follows:

```bash
cd ./client
npm run customize
```

OneLabeler's CLI will show the following options:

<img :src="$withBase('/cli/entry.png')" style="width: 70%">

The developer can then choose the desired customization type, and follows the instructions as shown in the command line.

Currently, OneLabeler's customization CLI supports the following **types of customizations**:

- create a new data type
- create a new label task type
- create a new workflow template
- create a new module
- remove an existing data type
- remove an existing label task type
- remove an existing workflow template

**When the developer choose to create new customized implementations**, including "create a new data type", "create a new label task type", and "create a new workflow template", OneLabeler's customization CLI will automatically create files from the boilerplate and handle the code imports for the corresponding customization.
In this way, the developer can start working with the files created by the CLI, instead of needing to start from scratch.

For example, when the developer choose to customize the data type, the following files are created from the boilerplate.

<img :src="$withBase('/cli/new-data-type.png')" style="width: 70%">

**When the developer choose to remove exiting implementations**, including "remove an existing data type", "remove an existing label task type", and "remove an existing workflow template", OneLabeler's customization CLI will delete all the relevant files and remove the code imports for the corresponding customization.

## Guide

::: warning Skill Requirements
To customize interface modules requires familiarity with [Vue](https://vuejs.org/).
To customize algorithm modules requires familiarity with JavaScript and ideally familiarity with Python and at least one machine learning library in JavaScript or Python.
:::

Technically, as long as a customized implementation follows OneLabeler's internal [API design](api/#api-reference) and is imported correctly, it should work as if it is a [builtin implementation](builtins/#builtins) of OneLabeler.

Readers may refer to the corresponding section of the [API reference](api/#api-reference) for the programming interface to be implemented for each type of customizations.
The correspondence between the customization and the API reference is as the table below:

| customization     | API reference                              |
| ----------------- | ------------------------------------------ |
| data type         | [DataTypeSetup](api/#data-type)            |
| label task type   | [LabelTaskTypeSetup](api/#label-task-type) |
| workflow template | [Module](api/#template)                    |
| module            | [WorkflowGraph](api/#module)               |
