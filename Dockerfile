# Base image is centos7
FROM openshift/base-centos7

# Maintainer of the docker
LABEL maintainer="sebastiaan.hekner@secrid.com"

# Openshift labels
LABEL io.k8s.description="NodeJS test server for persistent storage testing" \
  io.k8s.display-name="NodeJS Test v1" \
  io.openshift.expose-services="8010:http" \
  io.openshift.tags="test,nodejs,persisten,storage"

# Install nodejs version 10
RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -

# Install nodejs and clean files in this dockerlayer
RUN yum -y install nodejs && yum clean all -y

# Expose port of the dockerimage
EXPOSE 8010