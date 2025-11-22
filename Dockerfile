FROM klakegg/hugo:0.111.3-ext-alpine as docsy-user-guide

RUN apk update
RUN apk add git
COPY package.json /app/docsy/docsy.dev/
WORKDIR /app/docsy/docsy.dev/
RUN npm install --production=false
RUN git config --global --add safe.directory /app/docsy

CMD ["serve", "--cleanDestinationDir", "--themesDir", "../..", "--baseURL",  "http://localhost:1313/", "--buildDrafts", "--buildFuture", "--disableFastRender", "--ignoreCache", "--watch"]
