Guidance on setting up JupyterLab

See related repository

## Features

- Full install of JupyterLab with the most useful extensions pre-installed

- Common python DS/ML libraries (pandas, scikit-learn, sci-py, etc.)

- Natively connected to Snowflake using your dbt credentials. No login required!

- Git functionality: push and pull to Git repos natively within JupyterLab (requires ssh credentials)

- Run any python file or notebook on your computer or in a GitLab repo

- Support for running Jupyter in VS Code

- Need a feature you use but don’t see? Let us know on #bt-data-science

## Getting Started

JupyterLab is configured to run in a virtual environment on your local machine. If you prefer not to setup a virtual environment, you can instead use the data science docker image with CUDA support.

When setting up JupyterLab, the following will happen:

- uv will be downloaded to your local machine and used to set up a virtual environment (venv). UV is extremely fast and a great replacement tool for many common python tools (pipenv, pip-compile, install, etc.)

- venv will be created using the python version and packages (and their dependecies) as defined in pyproject.toml

- JupyterLab will be built withint the venv

## Installation Instructions

1. Prerequisites - before installing please make sure your system is setup with the following: 

1. Clone the repo to your local machine git clone git@gitlab.com:gitlab-data/data-science.git

1. Navigate to the directory: cd data-science

1. Execute the following command: make setup-jupyter-local

1. To launch JupyterLab: make jupyter-local

1. To launch VS Code with a Juypter Server: make vscode-local

### Running from Docker

Although we recommend running JupyterLab from a virtual environment, sometimes that is not always possible. In those instances, we have created a docker image that can be used.

1. Pull the image registry.gitlab.com/gitlab-data/data-science/datascienceimage:latest into your container manager (we prefer Rancher Desktop)

1. Use the docker-compose.yml to launch JupyterLab. In your terminal, navigate to the location of the data-science repository on your local machine and type make jupyter-docker

1. You will need to manually copy and paste the URL shown in the terminal into your web browser to load JupyterLab

### Mounting a local directory

By default, the local install will use the data-science folder as the root directory for JupyterLab. This is not terribly useful when your code, data, and notebooks are in other locations on your computer. To change, this you will need to create and modify a Jupyter Notebook config file:

1. Open terminal and nagivate to the data-science repo, e.g. cd repos/data-science. The config file must be created with the pipenv we setup in the above steps: pipenv run jupyter-lab --generate-config. This creates the file /Users/{your_user_name}/.jupyter/jupyter_lab_config.py.

1. Browse to the file location and open it in a text editor

1. Search for the following line in the file: #c.ServerApp.root_dir = '' and replace with c.ServerApp.root_dir = '/the/path/to/other/folder/'. If unsure, set the value to your repo directory (i.e. c.ServerApp.root_dir = '/Users/{your_user_name}/repos'). Make sure you remove the # at the beginning of the line.

1. Make sure you use forward slashes in your path. Backslashes could be used if placed in double quotes, even if folder name contains spaces as such as \{your_user_name}\Any Folder\More Folders\

1. Rerun make jupyter-local from the data-science directory and your root directory should now be changed to what you specified above.

### Enabling Jupyter Templates

The data science team has created modeling templates that allow you to easily start building predictive models without writing python code from scratch. To enable these templates:

- In your jupyter_lab_config.py that you created as part of the Mounting a local directory, add the following lines, replacing /Users/{your_user_name}/repos/ with the path to the data-science/templates repo on your local machine:

<!-- Unsupported block type: code -->

- Launch JupyterLab and you should see a new Template icon. Click the icon and select which template you would like to use.

### Setting Up Jupyter Extensions

- The data-science repo comes with many useful JupyterLab extensions pre-installed, including git and execute time, and system monitor.

- To get the most out of these (and to avoid having to configure them every time you run the container), create the following file: /Users/{your_user_name}/.jupyter/lab/user-settings/@jupyterlab/notebook-extension/tracker.jupyterlab-settings

- Within that file, paste the following and save:

<!-- Unsupported block type: code -->

### Updating the Virtual Environment

1. From the data science repo, pull the latest changes to your local machine git pull

1. Re-run make setup-jupyter-local

1. Launch JupyterLab: make jupyter-local

## Connecting to Snowflake

1. Make sure on your local machine you have setup /Users/{your_user_name}/.dbt/profiles.yml file which does not include your password. profiles.yml must be placed in this directory in your “home” directory otherwise you will not be able to connect to Snowflake from your local machine. You can use the sample profile as a reference

1. Run through the auth_example notebook in the repo to confirm that you have configured everything successfully. You will get a browser redirect to authenticate your Snowflake credentials through Okta.

1. If you get an error then likely Snowflake is not properly configured on your machine. Please refer to the Snowflake and dbt sections of the Data Onboarding Issue. It is likely that your .dbt/profiles.yml is not setup correctly.

## Connecting to GitLab Model Experiments (MLFlow Integration)

1. In your GitLab profile, create a personal access token access token with API permissions

1. Ensure that Model experiments is toggled on under Settings -> General -> Visibility, project features, permissions for your project in GitLab

1. Locate the project id for your project under Settings -> General

1. On your local machine, you will need to create two new environment variables MLFLOW_TRACKING_TOKEN and MLFLOW_TRACKING_URI 

1. Launch JupyterLab. You should now be able to initialize the experiment tracker with the mlflow.set_tracking_uri(os.getenv('MLFLOW_TRACKING_URI'))command in JupyterLab

Note: If looking to connect to the Model Experiments when using CI, refer to Model Training Step-by-Step Instructions

## Some interesting libraries included

### Data & Model Management

- GitLabDS: Tools to quickly perform common EDA tasks

- MLFlow: Experiment tracking and model registry

- Feast: Open-source feature store

- Papermill: Parameterizing, executing, and analyzing Jupyter Notebooks

- interpret: Interpretable model development

### Visualisation tools

- Plotly

- Seaborn

- ydata-profiling: Data profiling

### ML libraries

- Scikit-Learn: Suite of commonly used algorithms

- AutoTS: Automated time series forecasting

- XGBoost + Optuna: Powerful black-box method with automated hyperparameter optimization

- Tensorflow and Keras: Deep learning and neural networks

- Lifelines: Survival analysis tools