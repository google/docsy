eoAPI combines several state-of-the-art projects to create an entire Earth Observation API. Each service can be used and deployed independently, but eoAPI creates the interconnections between each service:

- pgSTAC database https://github.com/stac-utils/pgstac
- STAC API built on top of https://github.com/stac-utils/stac-fastapi
- STAC Items And Mosaic Raster Tiles API built on top of https://github.com/stac-utils/titiler-pgstac
- OGC Features and Vector Tiles API built on top of https://github.com/developmentseed/tipg

## Database

The STAC database is at the heart of eoAPI and is the only **mandatory** service. We use [`PgSTAC`](https://github.com/stac-utils/pgstac) Postgres schema and functions, which provides functionality for STAC Filters, CQL2 search, and utilities to help manage the indexing and partitioning of STAC Collections and Items.

> PgSTAC is used in production to scale to hundreds of millions of STAC items. PgSTAC implements core data models and functions to provide a STAC API from a PostgreSQL database. PgSTAC is entirely within the database and does not provide an HTTP-facing API. The Stac FastAPI PgSTAC backend and Franklin can be used to expose a PgSTAC catalog. Integrating PgSTAC with any other language with PostgreSQL drivers is also possible.
>
> PgSTAC Documentation: https://stac-utils.github.io/pgstac/pgstac
>
> pyPgSTAC Documentation: https://stac-utils.github.io/pgstac/pypgstac

## Metadata

The Metadata service deployed in eoAPI is built on [stac-fastapi.pgstac](https://github.com/stac-utils/stac-fastapi) application.

By default, the STAC metadata service will have a set of endpoints to *search* and list STAC collections and items.


<p align="center">
<img alt="stac-fastapi" src="https://github.com/developmentseed/eoAPI/assets/10407788/d0963386-1c8f-4607-98b8-3b0edb341a5e"/>
</p>

!!! example

    - https://stac.eoapi.dev landing page

    - https://stac.eoapi.dev/collections list available **Collection**

    - https://stac.eoapi.dev/collections/MAXAR_southafrica_flooding22/items list available **Items** for the `MAXAR_southafrica_flooding22` collection

    - https://stac.eoapi.dev/collections/MAXAR_southafrica_flooding22/items/36_213131033000_1040010076566100 get `36_213131033000_1040010076566100` **Item** in the `MAXAR_southafrica_flooding22` collection

    - https://stac.eoapi.dev/search list of **Items** in the catalog

    - https://stac.eoapi.dev/search?collections=MAXAR_Kahramanmaras_turkey_earthquake_23&limit=5&datetime=2023-02-06T00:00:00Z/2023-02-10T00:00:00Z list of **Items** in the catalog for the `MAXAR_Kahramanmaras_turkey_earthquake_23` collection between February 6th and 10th

---

## Raster

The Raster service deployed in `eoAPI` is built on top of [titiler-pgstac](https://stac-utils.github.io/titiler-pgstac/).

It enables Raster visualization for a single STAC **Item** and large-scale (multi collections/items) mosaic based on STAC search queries.

<p align="center">
<img alt="titiler-pgstac"  src="https://github.com/developmentseed/eoAPI/assets/10407788/096de97d-21d5-48e1-b61a-d1595ed9816d">
</p>

!!! example

    - https://raster.eoapi.dev landing page

    **Items endpoints**

    - https://raster.eoapi.dev/collections/MAXAR_southafrica_flooding22/items/36_213131033000_1040010076566100/info get Raster metadata information about **Assets** found in `36_213131033000_1040010076566100` **Item** in the `MAXAR_southafrica_flooding22` collection

    - https://raster.eoapi.dev/collections/MAXAR_southafrica_flooding22/items/36_213131033000_1040010076566100/info?assets=visual get Raster metadata information only for the `visual` **Asset**

    - https://raster.eoapi.dev/collections/MAXAR_southafrica_flooding22/items/36_213131033000_1040010076566100/map?assets=visual&minzoom=12&maxzoom=19 show the `visual` **Asset** on a Map client

    - https://raster.eoapi.dev/collections/MAXAR_southafrica_flooding22/items/36_213131033000_1040010076566100/tilejson.json?assets=ms_analytic&minzoom=13&maxzoom=17&asset_bidx=ms_analytic|8,2,1&rescale=0,4000 get a TileJSON document for the  `ms_analytic` **Asset** with band combination 8,2,1 with values rescaling from 0,4000 to 0,255


    **Mosaic endpoints**

    - https://raster.eoapi.dev/searches/list list pre-registered Virtual Mosaics

    - https://raster.eoapi.dev/searches/2f3073257a5b6530aedbb0e4b4f726fa/info get information about the `2f3073257a5b6530aedbb0e4b4f726fa` mosaic

    - https://raster.eoapi.dev/searches/2f3073257a5b6530aedbb0e4b4f726fa/map?assets=visual&minzoom=12&maxzoom=19 show the `2f3073257a5b6530aedbb0e4b4f726fa` mosaic and using the `visual` **Asset** on a Map client

    - https://raster.eoapi.dev/searches/2f3073257a5b6530aedbb0e4b4f726fa/tilejson.json?assets=visual&minzoom=12&maxzoom=19 get a TileJSON document for the `2f3073257a5b6530aedbb0e4b4f726fa` mosaic and using the `visual` **Asset**

---

## Vector

The OGC Features and (Mapbox Vector) Tiles API service deployed in `eoAPI` is built on top of [tipg](https://github.com/developmentseed/tipg)).

It enables vector Features/Features Collection exploration and visualization for Tables stored in the Postgres database (in the `public` schema).

<p align="center">
<img alt="tipg"  src="https://github.com/developmentseed/eoAPI/assets/10407788/a35dbf04-be8a-4cf5-b528-8960b18cef45">
</p>

!!! example

    - https://vector.eoapi.dev landing page

    **OGC Features**

    - https://vector.eoapi.dev/collections list available **Tables** or **Function Layers**

    - https://vector.eoapi.dev/collections/public.countries get information about the `countries` Table

    - https://vector.eoapi.dev/collections/public.countries/items list items for the `countries` Table

    **OGC Tiles**

    - https://vector.eoapi.dev/collections/public.countries/tiles list all TileSet available for the `countries` Table

    - https://vector.eoapi.dev/collections/public.countries/tiles/WebMercatorQuad get `WebMercatorQuad` TileSet information for the `countries` Table

    - https://vector.eoapi.dev/collections/public.countries/viewer shows the `countries` Table on a Map client using vector tiles

    - https://vector.eoapi.dev/tileMatrixSets/WebMercatorQuad `WebMercatorQuad` TileMatrixSet information


## Browsing UI

The browsing UI deployed in eoAPI is built on [the radiant earth STAC browser](https://github.com/radiantearth/stac-browser), and provides a configurable, user-friendly interface to search across and within collections and quickly visualize single items assets.


<p align="center">
<img alt="stac-fastapi" src="https://github.com/developmentseed/eoAPI/assets/45140658/fae75d99-44c5-4899-8185-d003cd3c2c6a"/>
</p>

!!! example

    - http://eoapi-dev-stac-browser.s3-website-us-east-1.amazonaws.com landing page
