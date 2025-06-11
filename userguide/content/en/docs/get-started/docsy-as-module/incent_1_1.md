---

title: "Incent Technical Documentation"
---






## How to use this documentation

The Documentation below is organized to understand the flow of the data from Salesforce through Xactly Connect and into Xactly Incent.

---

### What's What

- Salesforce is one of our primary source system of data that is used to ingest information about our users, accounts, opportuities and more into Xactly in order to compensate them
- Xactly Connect is part of Xactly that Xactly Administrators and Developers can work in to organize the flow of data from Salesforce into Xactly Incent.
- Xactly Incent is where end users can monitor their compensation. The final output of Xactly Connect, alongside compensation plans and more as built out by the compensation team, is what feeds Xactly Incent

### Xactly Conenct

- Documentation for Xactly Connect is only accessible to users who are logged into Xactly and is accessible through the community portal
- Key Terms
  - Assets - This is the smallest action that can be taken in Xaclty. It can be as simple as setting a variable to querying all of our source data.
  - Pipelines - Pipeline are a series of Assets, Emails and more that run our entire ETL process from our Salesforce source data to when it's finally loaded into Incent
- Key Pieplines
  - `p_upload_process_SALES` - This pipeline handels the ETL for Opportunities and the users that are paid off of the Splits on the Opportunities with the exception of SDRs (See `p_upload_process_LGSAOM`)
  - `p_upload_process_LGSAOM` - This pipeline mainly handels the ETL for Opportunities and Events that SDRs are comensation on
  - `p_shared_upload_orders` - More info pending
- Piepline Structure
  - Pipelines may share or may not share assets. So it is important to review in oder to avoid any unneccessary consequences. Additionally it may be important to update a similar query in multiple locations so that it is reflected in all areas of incent.

### Piepline Insights & Key Components

- `p_upload_process_SALES`
  - `p_set_dynamic_variables`
  - `p_load_sourcedata_SALES` - Inserts data into the `delta.sfdc_SALES_ACC_dump` table and the `sfdc_SALES_OPP_dump` table
  - `p_transform_SALES` - Transforms and migrates data from the SFDC dump tables into `delta.SALES_orders` table, then from there into `delta.prestage_order_item` table and `delta.prestage_order_item_assignment` table
  - `p_shared_delete_staging_tables`
  - `p_order_validations_SALES` - Runs a number of validations on the infromation. Ex ensure that there isn't an opportunity with the same Id being loaded twice. And uploads the data to our staging tables where there were no validation errors encountered
  - `p_shared_upload_orders`
- `p_upload_process_LGSAOM`
  - `p_set_dynamic_variables` - Insersts data into the following tables: `delta.sfdc_LGSAOM_OPP_dump`, `delta.sfdc_LGSAOM_USR_dump`, `delta.sfdc_LGSAOM_OPPTM_dump`, `delta.sfdc_LGSAOM_EVENT_dump`
  - `p_load_sourcedata_LGSAOM` - Transforms and migrates data into the following tables: `delta.trans_gen_SAO`, `delta.prestage_order_item`, `delta.trans_gen_Meetings`, `delta.prestage_order_item_assignment` from either sfdc_dump tables or tables that are created in this pipeline
  - `p_transform_LGSAOM`
  - `p_shared_delete_staging_tables`
  - `p_order_validations_LGSAOM` - Runs a number of validations on the infromation. Ex ensure that there isn't an opportunity with the same Id being loaded twice. And uploads the data to our staging tables where there were no validation errors encountered
  - `p_shared_upload_orders`
- `p_shared_upload_orders` - More info pending
