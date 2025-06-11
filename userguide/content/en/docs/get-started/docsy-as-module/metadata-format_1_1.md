<h1>Metadata format</h1>

In your [data repository](glossary.md#data-repository) the metadata is maintained on an indicator-by-indicator basis. 

By default the metadata fields are based on SDG SDMX detailed metadata concepts e.g. **0.c. Indicator:** and the template metadata file in the data starter is based on these fields. It is recommended that you use the default fields as they follow the format that is requested by the UN and allow metadata to compared. However, the metadata can include any number of custom fields, as defined in a [schema file](https://github.com/open-sdg/open-sdg-data-starter/blob/develop/metadata_schema.yml) (see the "Schema" section below) in your data repository.

Whilst it is possible to use the SDG SDMX main metadata concepts (which are a level above the detailed concepts) e.g. **0. Indicator information**, the UNSD strongly recommends that the detailed concepts are used.

Note: If you do choose to use the main metadata concepts, they should not be used in combination with the detailed metadata concepts.

## Note about metadata file formats

By default, Open SDG platforms expect the individual indicator metadata files to be uploaded in YML format to the "meta" folder. See this [example in the data starter repo](https://github.com/open-sdg/open-sdg-data-starter/blob/develop/meta/1-1-1.yml)

### Indicator metadata forms

To help with specifying indicator metadata, you can optionally enable user-friendly indicator metadata forms, which will allow you to fill in a form and then download a YML file which will be ready to upload to your platform.

For more details on how to enable these forms, see the [indicator_metadata_form site configuration setting](configuration.md#indicator_metadata_form).

## Note about empty metadata fields

Due to the large number of metadata fields with some maybe not being applicable, empty metadata fields are hidden by default using `hide_empty_metadata: true` in the site configuration file.

If you want metdata fields to show regardless, you should change this option to false. Alternatively, if you want some fields to hide by default but want to purposely not provide any information for other fields, you could populate the fields with some standard text e.g. "Not available"

For more information about this configuration setting see the [hide_empty_metadata configuration option documentation](configuration.md#hide_empty_metadata).

## Note about translation keys

Metadata values can either be filled in with normal text ("My field value") or with [translation keys](glossary.md#translation-keys) (my_translations.my_translation). In the examples below, we will try to demonstrate both possibilities.

The default fields are listed below along with the UN-defined definition:

## 0. Indicator information

### 0.a. Goal: 

SDG Goal number and name.

`SDG_GOAL`

### 0.b. Target:

SDG Target number and name.

`SDG_TARGET`

### 0.c. Indicator:

SDG Indicator number and name.

`SDG_INDICATOR`

### 0.d. Series:

Description of SDG data series.

`SDG_SERIES_DESCR`

### 0.e. Metadata update:

The date when this metadata report was last updated.

`META_LAST_UPDATE`

### 0.f. Related indicators:

Linkages with any other Goals and Targets.

`SDG_RELATED_INDICATORS`

## 1. Data reporter

### 1.a. Organisation:

Organisation which is responsible for the indicator (i.e. who can be contacted about the data or metadata).

`CONTACT_ORGANISATION`

### 1.b. Contact person(s):

Name of the contact points for the data or metadata.

`CONTACT_NAME`

### 1.c. Contact organisation unit

Department/division/unit of contact person within the organisation mentioned in 1.a.

`ORGANISATION_UNIT`

### 1.d. Contact person function:

Functional title(s) of the contact points for the data or metadata.

`CONTACT_FUNCT`

### 1.e. Contact phone:

Phone number(s) of the contact points for the data or metadata.

`CONTACT_PHONE`

### 1.f. Contact mail:

Mailing address(es) of the contact points for the data or metadata.

`CONTACT_MAIL`

### 1.g. Contact emails:

E-mail address(es) of the contact points for the data or metadata.

`CONTACT_EMAIL`

## 2. Definition, concepts and classifications

### 2.a. Definition and concepts:

Precise definition of the indicator preferably relying on internationally agreed definitions. The indicator definition should be unambiguous and be expressed in universally applicable terms. Precise definition of all different concepts and terms associated with the indicator, also including reference to any associated classifications.

`STAT_CONC_DEF`

### 2.b. Unit of measure:

Description of the unit of measurement (proportion, dollars, number of people, etc.)

`UNIT_MEASURE`

### 2.c. Classifications:

Describe references to both national and international standards and classification being used.

`CLASS_SYSTEM`

## 3. Data source type and data collection method

### 3.a. Data sources:

Description of all actual and recommended sources of data. This description should include, when applicable, any changes of the data source over time, details of denominator (if from a different source) and any other relevant information related to the origin of the source or indicator. Similar details should be given for administrative sources.

`SOURCE_TYPE`

### 3.b. Data collection method:

Description of all methods used for data collection. This description should include, when applicable, the sample frame used, the questions used to collect the data, the type of interview, the dates/duration of fieldwork, the sample size and the response rate. Some additional information on questionnaire design and testing, interviewer training, methods used to monitor non-response etc. should be provided here. Questionnaires used should be annexed (if very long: via hyperlink). 	

`COLL_METHOD:`

### 3.c. Data collection calendar:

Dates when source collection is next planned.

`FREQ_COLL`

### 3.d. Data release calendar:

Expected dates of release of new data for this indicator, including the year (or, ideally, the quarter/month when the next data point associated with the indicator will become available).

`REL_CAL_POLICY`

### 3.e. Data providers:

Identification of national and/or international data provider(s), specifying the organization(s) responsible for producing the source data.

`DATA_SOURCE`

### 3.f. Data compilers:

Organization(s) responsible for compilation of this indicator either at national level, which is often the same as 1.a.

`COMPILING_ORG`

### 3.g. Institutional mandate:

Description of the set of rules or other formal set of instructions assigning responsibility as well as the authority to an organisation for the collection, processing, and dissemination of statistics for this indicator.

`INST_MANDATE`

## 4. Other methodological considerations

### 4.a. Rationale:

Description of the purpose and rationale behind the indicator, as well as examples and guidance on its correct interpretation and meaning.

`RATIONALE`

### 4.b. Comment and limitations:

Comments on the feasibility, suitability, relevance and limitations of the indicator. Also includes data comparability issues, presence of wide confidence intervals (such as for maternal mortality ratios); provides further details on additional non-official indicators commonly used together with the indicator.

`REC_USE_LIM`

### 4.c. Method of computation:

Explanation of how the indicator is calculated, including mathematical formulas and descriptive information of computations made on the source data to produce the indicator (including adjustments and weighting). This explanation should also highlight cases in which mixed sources are used or where the calculation has changed over time (i.e., discontinuities in the series).

`DATA_COMP`

### 4.d. Validation:

Description of process of monitoring the results of data compilation and ensuring the quality of the statistical results, including consultation process with countries on the national data submitted to the SDGs Indicators Database. Descriptions and links to all relevant reference materials should be provided.

`DATA_VALIDATION`

### 4.h. Methods and guidance available to countries for the compilation of the data at the national level:
Reference the globally available metadata and explain how it is being used.

`DOC_METHOD`

### 4.i. Quality management:

Description of systems and frameworks in place within an organisation to manage the quality of statistical products and processes.

`QUALITY_MGMNT`

### 4.j Quality assurance:

Description of practices and guidelines focusing on quality in general and dealing with quality of statistical programmes at your agency, including measures for ensuring the efficient use of resources.

`QUALITY_ASSURE`

### 4.k Quality assessment:

Description of overall evaluation of fulfilling quality requirements, based on standard quality criteria.

`QUALITY_ASSMNT`


Note: There are only main concepts for 5, 6 and 7 so they should be used even if you are using the detailed concepts elsewhere

## 5. Data availability and disaggregation

Data availability by sub-national breakdowns and time periods can be descibed here. Describe the specification of the dimensions and levels used for disaggregation of the indicator (e.g., income, sex, age group, geographic location, disability status, etc.).

`COVERAGE`

## 6. Comparability/deviation from international standards

Explanation on the differences between country produced and internationally estimated data on this indicator, highlighting and summarising the main sources of differences.

`COMPARABILITY`

## 7. References and documentation

Descriptions and links to all relevant reference materials related to this indicator.

`OTHER_DOC`h1>Metadata format</h1>


## Schema

The actual fields available on each indicator is fully configurable by editing the `metadata_schema.yml` file in your data repository. For example, see the [starter repository's `metadata_schema.yml` file](https://github.com/open-sdg/open-sdg-data-starter/blob/develop/metadata_schema.yml). This file also serves to control the behavior of the indicator metadata forms, which can be used to edit the metadata.

## Renaming metadata fields

In the schema file mentioned above, each field can have a `translation_key` property. These can be changed from the defaults, as needed, to control the public-facing name for each field. For example, perhaps you want to change the public-facing label for the `SDG_INDICATOR` field. You could update the schema, changing it from this:

```
- name: "SDG_INDICATOR"
  field:
    element: text
    label: "Indicator"
    translation_key: metadata_fields.SDG_INDICATOR
    scope: national
```

To this:

```
- name: "SDG_INDICATOR"
  field:
    element: text
    label: "Indicator"
    translation_key: my_custom_translations.another_translation
    scope: national
```

### Advanced - label vs translation_key

You may think that it would make more sense for the `label` property above to control the public-facing name for the field. Indeed, if you are not using Prose.io, you are free to use `label` instead of `translation_key`. But Prose.io needs that `label` property for a special purpose: this is what data editors/managers will see when they're editing metadata. The Prose.io service is not multilingual, so its `label` property needs to already be translated. (This is why it is plain English out-of-the-box.)

## Metadata tabs

The metadata fields can be displayed on indicator pages in a tabbed format. For more information, see the ["metadata tabs" section of the site configuration guidance](configuration.md#metadata_tabs).

## Reserved metadata fields

The following keys cannot be used as metadata fields, because they are used for special purposes in Open SDG:

* goals
* goal
* targets
* target
* indicators
* indicator
* language
* name
* number
* global
* url
* goal_number
* target_number
