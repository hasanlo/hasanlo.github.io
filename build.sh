#!/bin/sh

java -jar yuicompressor-2.4.8.jar  --type css -o '.css$:-min.css' stylesheets/*.css
mv stylesheets/*-min.css stylesheets/min/
