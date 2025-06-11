<p align="center">
  <img width="700" src="../img/eoAPI.png"/>
  <p align="center">Create a full Earth Observation API with Metadata, Raster, and Vector services.</p>
</p>


---

## **E**arth **O**bservation **API**

`eoAPI` combines several *state-of-the-art* projects to create a full Earth Observation API. Each service can be used and deployed independently, but `eoAPI` creates the interconnections between each service:

- **pgSTAC** database [https://github.com/stac-utils/pgstac](https://github.com/stac-utils/pgstac)

- **STAC API** built on top of [https://github.com/stac-utils/stac-fastapi](https://github.com/stac-utils/stac-fastapi)

- **STAC browser** a UI that exposes, in a user friendly interface, the metadata served by the STAC API. Built on top of [https://github.com/radiantearth/stac-browser](https://github.com/radiantearth/stac-browser)

- **STAC Items And Mosaic Raster Tiles** API built on top of [https://github.com/stac-utils/titiler-pgstac](https://github.com/stac-utils/titiler-pgstac)

- **OGC Features and Vector Tiles** API built on top of [https://github.com/developmentseed/tipg](https://github.com/developmentseed/tipg)

---

## 🌍 eoAPI: An Open-Source Community Project

`eoAPI` is proudly open-source and driven by a dedicated community of contributors. We believe in the power of open collaboration and welcome anyone to contribute, discuss, and grow this tool. Join the conversations on [GitHub Discussions](https://github.com/developmentseed/eoAPI/discussions) and make a difference in the Earth Observation realm.

---

## Why should you use `eoAPI`

- **Focus on your use case:** `eoAPI` is used for large-scale data processing, building geographic information systems (GIS), creating real-time data applications, climate research and environmental monitoring, machine learning model training, and more.

- **Unified Repository:** `eoAPI` provides a single, unified repository for several state-of-the-art Earth Observation (EO) data services, including Metadata search (STAC), Raster, and Vector services. This can simplify the process of accessing and working with these services.

- **Interoperability:** `eoAPI` is designed to enable interoperability among its included services. This can make building complex applications that leverage different types of EO data easier.

- **Open Source and Community Support:** As an open-source project, `eoAPI` allows developers to inspect its code, contribute to its development, and use it as a base for custom solutions. It also benefits from the support and innovation of a community of developers and EO data users.

- **Scalability and Flexibility:** Each service in `eoAPI` can be used or deployed independently, which provides a lot of flexibility. If a developer's application only requires one or two of eoAPI's services, they don't need to deploy the entire suite.

- **Facilitate Earth Observation Tasks:** `eoAPI` includes specialized tools for working with EO data, such as dynamic tiling, metadata searching, and features/vector tiles API. These can significantly facilitate EO data processing, analysis, and visualization.

- **Ease of Deployment:** `eoAPI` supports containerized deployment using Docker, making it easier to set up, scale, and maintain applications built on it. Spin up the demo locally and start experimenting in minutes.

---

## Services Overview

- **STAC Metadata**: Built with [stac-fastapi.pgstac](https://github.com/stac-utils/stac-fastapi) to enable data discovery. See the specifications [core](https://github.com/radiantearth/stac-api-spec/blob/v1.0.0/core/README.md), [search](https://github.com/radiantearth/stac-api-spec/blob/v1.0.0/item-search/README.md) and [features](https://github.com/radiantearth/stac-api-spec/blob/v1.0.0/ogcapi-features/README.md) for API details.

- **STAC browser** : Built with the [Radiant Earth STAC browser](https://github.com/radiantearth/stac-browser) to provide a simple user-friendly interface for searching the STAC metadata.

- **Raster Tiles**: Built with [titiler-pgstac](https://github.com/stac-utils/titiler-pgstac) and [pgstac](https://github.com/stac-utils/pgstac) to enable large scale mosaic based on results of STAC searches queries. See [docs](https://stac-utils.github.io/titiler-pgstac/0.8.0/mosaic_endpoints/) for API details.

- **OGC Features & Vector Tiles**: Built with [tipg](https://github.com/developmentseed/tipg) to create a lightweight OGC Features and Tiles API with a PostGIS database. See [docs](https://developmentseed.org/tipg/user_guide/endpoints/) for API details.


See [service details](./services.md) for more information.

---

## Getting started

The easiest way to start exploring the different eoAPI services is with *Docker*. Clone this repository and start the multi-container *Docker* applications using `Compose`:

```
git clone https://github.com/developmentseed/eoAPI.git
cd eoAPI
docker compose up
```

Once the applications are *up*, you'll need to add STAC **Collections** and **Items** to the PgSTAC database. If you don't have, you can use the follow the [MAXAR open data demo](https://github.com/vincentsarago/MAXAR_opendata_to_pgstac) (or get inspired by the other [demos](https://github.com/developmentseed/eoAPI/tree/main/demo)).


Then you can start exploring your dataset with:

  - the STAC Metadata service [http://localhost:8081](http://localhost:8081)
  - the Raster service [http://localhost:8082](http://localhost:8082)

!!! info

    If you've added vector datasets to the `public` schema in the Postgres database, they will be available through the **Vector** service at [http://localhost:8083](http://localhost:8083).

Alternatively, you may install and launch applications locally:

```sh
python -m pip install --upgrade virtualenv
virtualenv .venv
source .venv/bin/activate

export DATABASE_URL=postgresql://username:password@0.0.0.0:5439/postgis  # Connect to the database of your choice

python -m pip install uvicorn

###############################################################################
# Install and launch the application
# Select one of the following

###############################################################################
# STAC
python -m pip install "psycopg[binary,pool]" stac-fastapi-pgstac
python -m uvicorn stac_fastapi.pgstac.app:app --port 8081 --reload

###############################################################################
# RASTER
python -m pip install "psycopg[binary,pool]" titiler-pgstac
python -m uvicorn titiler.pgstac.main:app --port 8082 --reload

###############################################################################
# VECTOR
python -m pip install tipg
python -m uvicorn tipg.main:app --port 8083 --reload
```

!!! danger

    Python applications might have incompatible dependencies, which you can resolve by using a virtual environment *per application*
