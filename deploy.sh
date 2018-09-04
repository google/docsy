rm -rf public/
HUGO_ENV="production" hugo --gc || exit 1
s3deploy -source=public/ -region=eu-west-1 -bucket=bep.is -distribution-id=E8OKNT7W9ZYZ2 -path temp/td