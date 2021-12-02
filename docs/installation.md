# Installation

The recommended way of installing OneLabeler is to use [Docker](#docker).
Alternatively, OneLabeler can also be [built from source](#build-from-source).

## Docker

::: warning Important
Before started, make sure [Docker](https://www.docker.com/get-started) has been installed on the machine.
:::

OneLabeler can be launched in a Docker container as follows:

```bash
git clone <link-removed-for-anonymity> OneLabeler
cd OneLabeler
docker compose up
```

**Notice**: building the docker image for the first time may take around 30 minutes depending on the machine you use.

## Build from Source

OneLabeler contains four separate components, including the front end, algorithm server, database proxy server, and jupyter API server.
All the four components can be built from source.

Before building the components, please first clone the OneLabeler source code and enter the directory containing the source code:

```bash
git clone <link-removed-for-anonymity> OneLabeler
cd OneLabeler
```

The following lists the steps for building the four components:

### Front End

::: warning Important
Before started, make sure [Node.js](https://nodejs.org/) has been installed on the machine.
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
Before started, make sure [python 3.9](https://www.python.org/downloads/) (python >= 3.10 is not supported!) and [pipenv](https://github.com/pypa/pipenv#installation) have been installed on the machine.
:::

```bash
cd server
pipenv install
```

### Database Proxy Server

::: warning Important
Before started, make sure [Node.js](https://nodejs.org/) has been installed on the machine.
:::

```bash
cd db
npm run build:prod
```

### Jupyter API Server

::: warning Important
Before started, make sure [python 3.9](https://www.python.org/downloads/) (python >= 3.10 is not supported!) and [pipenv](https://github.com/pypa/pipenv#installation) have been installed on the machine.
:::

```bash
cd jupyter
pipenv install
```

### Building on Demand

Depending on the needed functionalities of OneLabeler, not all the four components need to be built to make OneLabeler function:

- The front end component is **required** to be built, as it is needed to get the user interface part of OneLabeler function.
- The algorithm server component is **recommended** to be built, as it is needed to enable executing most of the algorithm modules and support compilation.
- The database proxy server component can be **optionally** built, to support storing the data objects and labels in a database.
- The Jupyter API server component can be **optionally** built, to support embedding OneLabeler in Jupyter Notebook.
