# Go Thermostat

[![Build Status](https://travis-ci.org/marcofranssen/gothermostat.svg?branch=master)](https://travis-ci.org/marcofranssen/gothermostat)
[![Software License](https://img.shields.io/badge/License-MIT-orange.svg?style=flat-square)](https://github.com/marcofranssen/gothermostat/blob/master/LICENSE.md)
[![GoDoc](https://godoc.org/github.com/marcofranssen/gothermostat?status.svg)](https://godoc.org/github.com/marcofranssen/gothermostat)
[![Coverage Status](http://codecov.io/github/marcofranssen/gothermostat/coverage.svg?branch=master)](http://codecov.io/github/marcofranssen/gothermostat?branch=master)
[![Go Report Card](https://goreportcard.com/badge/github.com/marcofranssen/gothermostat)](https://goreportcard.com/report/github.com/marcofranssen/gothermostat)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcofranssen%2Fgothermostat.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcofranssen%2Fgothermostat?ref=badge_shield)

This project enables to interact with your nest thermostat.

## Build

```bash
go build .
```

## Install tools

```bash
go mod download
cat tools.go | grep _ | awk -F'"' '{print $2'} | xargs -tI % go install %
```

## Configure

```bash
cp .gotherm.toml.dist .gotherm.toml
```

Fill out your clientId, clientSecret, authCode.

### How to get your nest token

https://codelabs.developers.google.com/codelabs/wwn-api-quickstart/#2

## Run

```bash
./gotherm serve
```

## Demo

![web](doc/web.jpg)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmarcofranssen%2Fgothermostat.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmarcofranssen%2Fgothermostat?ref=badge_large)