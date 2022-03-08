# Installation

OneLabeler can be installed through [Docker](#docker) or [building from source](#build-from-source).

- When module customization is not needed, it is recommended to install OneLabeler through [Docker](#docker) as it is easier.
- When module customization is needed, the developer has to build OneLabeler from source, as the customization would involving editing the source code.

## Docker

::: warning Important
Before started, make sure you have installed [Docker](https://www.docker.com/get-started).
:::

OneLabeler can be launched in a Docker container as follows:

```bash
git clone <link-removed-for-anonymity> OneLabeler
cd OneLabeler
docker compose up
```

**Notice**: building the docker image for the first time may take around 30 minutes depending on the machine you use.

## Build from Source

OneLabeler contains four separate components, including the **front end**, **algorithm server**, **database proxy server**, and **Jupyter API server**.

When building OneLabeler from source, the four components will need to be built.
Depending on the needed functionalities of OneLabeler, not all the four components need to be built.

- The **front end** component is **required** to be built, as it is needed to get the user interface part of OneLabeler function.
- The **algorithm server** component is **recommended** to be built, as it is needed to enable executing most of the algorithm modules and support compilation.
- The **database proxy** server component can be **optionally** built, to support storing the data objects and labels in a database.
- The **Jupyter API server** component can be **optionally** built, to support embedding OneLabeler in Jupyter Notebook.


Before building the components, please first clone the OneLabeler source code and enter the directory containing the source code:

```bash
git clone <link-removed-for-anonymity> OneLabeler
cd OneLabeler
```

The following lists the steps for building the four components:

### Front End

::: warning Important
Before started, make sure you have installed [Node.js](https://nodejs.org/).
:::

Building the front end into a web application:

```bash
cd client
npm run build
```

Building the front end into a desktop application:

```bash
cd client
npm run electron:build
```

### Algorithm Server

::: warning Important
Before started, make sure you have installed [python 3.9](https://www.python.org/downloads/) (python >= 3.10 is not supported!) and [pipenv](https://github.com/pypa/pipenv#installation).
:::

```bash
cd server
pipenv install
```

### Database Proxy Server

::: warning Important
Before started, make sure you have installed [Node.js](https://nodejs.org/).
:::

```bash
cd db
npm run build:prod
```

### Jupyter API Server

::: warning Important
Before started, make sure you have installed [python 3.9](https://www.python.org/downloads/) (python >= 3.10 is not supported!) and [pipenv](https://github.com/pypa/pipenv#installation).
:::

```bash
cd jupyter
pipenv install
```
