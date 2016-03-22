FROM     node:4.2

# Enable EPEL for Node.js

# Install Node.js and npm

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install


CMD ["node", "/src/runner.js"]