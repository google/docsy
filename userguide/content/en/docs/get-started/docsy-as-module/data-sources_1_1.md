<h1>Data sources</h1>

Out of the box, the [data starter](https://github.com/open-sdg/open-sdg-data-starter) includes the data and metadata as [CSV](data-format.md) and [YAML](metadata-format.md) files, respectively.

## SDG Build

This data and metadata is processed by a Python library called [sdg-build](https://github.com/open-sdg/sdg-build). This library can input data/metadata from a variety of sources, and then outputs them in the format expected by Open SDG.

## Data repository config file

If you are using the out-of-the-box CSV/YAML approach mentioned above, you can take advantage of using a [configuration file](https://github.com/open-sdg/sdg-build/blob/master/docs/examples/open_sdg_config.yml) in your data repository. For an example of using this approach, see [this example in the sdg-build documentation](https://github.com/open-sdg/sdg-build/blob/master/docs/examples/open_sdg_simple.py).

## Alternative data sources

You may want to maintain your data and/or metadata in some other way. With the help of the [sdg-build](https://github.com/open-sdg/sdg-build) library, there are additional options available for Open SDG.

NOTE: If using any of these alternative data sources, the "config file" approach mentioned above will not work.

### SDMX

Your data repository can contain SDMX files, either of the SDMX-ML or the SDMX-JSON format. Alternatively, your data repository can "point" to a remote SDMX API endpoint. Examples can be found in the [sdg-build documentation](https://github.com/open-sdg/sdg-build/tree/master/docs/examples).

### .Stat Suite, SDMX & Open SDG

**What is the .Stat Suite?**

The .Stat Suite, is an SDMX native standard-based, componentised, open source platform for the efficient production and dissemination of high-quality statistical data.

**.Stat Suite Tools**

* ***.Stat Data Explorer*** - A front-office application for easy finding, understanding and using of data through an efficient well-tuned navigation and search approach, appropriate data previews and contextual  metadata, and download in standard formats, APIs or share features.

* ***.Stat Data Lifecycle Manager*** - A set of adaptive back-office modules to efficiently and timely produce and (re-)use high quality statistical data by defining, running, automating, controlling and evaluating the    underlying data processes.

* ***.Stat Core*** - A highly performing, secure SDMX Data Store based on standard protocols, to store and retrieve statistical data, structural and referential metadata, data process information and security settings.

**How to use the .Stat Suite SDMX data output with Open SDG**

For this data to appear on your platform, you need to add some code to the `config_data.yml` file in your data repository. We'd recommend using the **InputSdmxMl_Structure** class. An example is shown below from Cambodia's data repository. If you've uploaded your data to .Stat you will have a url that points to the SDMX data file & your DSD (Data Structure Definition).

```
- class: InputSdmxMl_Structure
    source: https://nsiws-stable-camstat-live.officialstatistics.org/rest/data/KH_NIS,DF_SDG_KH,1.2/A..............
    dsd: https://nsiws-stable-camstat-live.officialstatistics.org/rest/dataflow/KH_NIS/DF_SDG_KH/1.2?references=all&detail=referencepartial
```

To view their entire data configuration file for a full example of this method [click here](https://github.com/sdg-cambodia/data/blob/develop/config_data.yml)

**Source** - Place the remote URL of your SDMX source here, this points to your SDMX data file for all your indicator data.

**DSD** - Place the remote URL of your SDMX DSD (Data Structure Definition), this will point towards your DSD remotely.

### UN SDG API

**What is the UN SDG API?**

An API stands for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. 

With Open SDG, you can choose to use the UN SDG API to pull data onto your site from the United Nations (UN) Global SDG Database in the SDMX standard (Statistical Data and Metadata eXchange).  

**When to use the UN SDG API** 

* The UN SDG API is a useful tool for those organisations that want to display their SDG data, but do not have much or any of their own data files to upload. As such, they could use the API to put the data already on the UN Global SDG Database onto their platform. 

* You can use a combination of inputting your own data files, and inputting data using the API if you need to fill some gaps, but the data will need to be structured in the same way to do so.  

* You should not use the API for data that you already have. 

**How to use the UN SDG API**

For a basic overview of how to implement the UN SDG API on your platform, see below in conjunction with the [UN SDG API manual](https://unstats.un.org/sdgs/files/SDMX_SDG_API_MANUAL.pdf): 

You will need to build a query by following the steps in the [UN SDG API manual](https://unstats.un.org/sdgs/files/SDMX_SDG_API_MANUAL.pdf) to source the data that you want to be on your platform.  

For this data to appear on your platform, you need to add some code to the `config_data.yml` file in your data repository. There are two ways of doing this, one using the `InputSdmxMl_UnitedNationsApi` class and one using the `InputSdmxMl_Structure` class.  

See two examples below: 

***InputSdmxMl_UnitedNationsApi*** 

```
inputs: 
  - class: InputSdmxMl_UnitedNationsApi 
    reference_area: 231 
    dimension_query: 
      REPORTING_TYPE: N 
```

This class handles the URL generated as the query for you, so you don’t need to obtain it using the UN data website as per the UN SDG API manual instructions. This method is simple which means you may not be able to add all the details that you want.  

Note that in the example above, the `REPORTING_TYPE` has been specified to be ‘N’ which means it is specified to pull national data from the Database. 

***InputSdmxMl_Structure*** 

```
inputs: 
  - class: InputSdmxMl_Structure 
    source: https://data.un.org/ws/rest/data/IAEG-SDGs,DF_SDG_GLH/...231...........?startPeriod=2000&endPeriod=2022 
```

If you have used this method, then you will need the URL, which you can generate as a query from the UN data website as per the manual instructions, or construct/adjust yourself using the structure detailed below. You can make more modifications with this method, such as changing the time period etc., as you will be using the API directly by building a key.  

The first part of the URL should be: 

```
https://data.un.org/ws/rest/data/IAEG-SDGs,DF_SDG_GLH/  
```

This is then followed by the second part, which is the key. The key needs to follow the below structure and needs to be composed of 15 parts. The 15 parts should be separated by a dot (.): 

```
[FREQ].[REPORTING_TYPE].[SERIES].[REF_AREA].[SEX].[AGE].[URBANISATION].[INCOME_WEALTH_QUANTILE].[EDUCATION_LEV].[OCCUPATION].[CUST_BREAKDOWN].[COMPOSITE_BREAKDOWN].[DISABILITY_STATUS].[ACTIVITY].[PRODUCT]  
```

However, you do not need to include details for all 15 parts as shown in the code example above where 231 has been entered as the `[REF_AREA]` part of the key (in the fourth part between the dots (.)), but no other parts are specified. To mirror the first example using the `InputSdmxMl_UnitedNationsApi` to specify national data, you would need to add ‘N’ to the second part between the dots (.) where `[REPORTING_TYPE]` is in the key. E.g. https://data.un.org/ws/rest/data/IAEG-SDGs,DF_SDG_GLH/.N..231...........?startPeriod=2000&endPeriod=2022 

This example also demonstrates adding a custom time period of 2000-2022, which is achieved by adding the following details after the key: 

```
?startPeriod=yyyy&endPeriod=yyyy 
```

To know what to populate the 15 parts of the key with, refer to the SDG Data Structure Definition (DSD) [here](https://unstats.un.org/sdgs/files/SDG_DSD_MATRIX.1.11.xlsm). 

### CKAN

Your data repository can point to a CKAN instance containing data in a compatible format. Examples can be found in the [sdg-build documentation](https://github.com/open-sdg/sdg-build/tree/master/docs/examples).

