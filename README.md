# IPFS Upload

## Introduction

This repository is a library for images bulk uploading to IPFS.

## Installation

**Install required packages**

```yarn add ipfs-car```  
```yarn add carbites-cli```  

In order to generate .car file for NFT.storage, run `yarn ipfs-car --pack <input directory> --output <output>`

In order to upload .car file to IPFS using NFT.storage, run `node uploadcar.js <car file path>`

In order to split CARs, run `carbites split --size 100MB --strategy treewalk ***.car`  

In order to join CARs, run `carbites join <example-*.car> --output <example-joined.car>`  





