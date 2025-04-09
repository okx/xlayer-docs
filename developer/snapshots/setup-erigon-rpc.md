# Setup production erigon
cdk-erigon is a fork of Erigon, optimized for syncing with the XLayer network.

### Minimum System Requirements
- **16 GB RAM**
- **8 core CPU**
- **500 GB Storage** (This will increase over time)
- **Ubuntu 20.04+ (or use Docker)**

### Start Erigon RPC Node

#### Build
``` bash
git clone https://github.com/0xPolygonHermez/cdk-erigon.git
cd cdk-erigon
git checkout v2.61.0 #[checkout the latest release version]

make cdk-erigon
```

#### Config
``` bash
cp xlayerconfig-mainnet.yaml.example xlayerconfig-mainnet.yaml
```
Modfiy and replace params like this:
``` bash
datadir: /your/data/dir
zkevm.l1-rpc-url:  http://your-l1-rpc-url:8545

zkevm.address-sequencer: "0xAF9d27ffe4d51eD54AC8eEc78f2785D7E11E5ab1"
zkevm.address-zkevm: "0x2B0ee28D4D51bC9aDde5E58E295873F61F4a0507"
zkevm.address-admin: "0x491619874b866c3cDB7C8553877da223525ead01"
zkevm.address-rollup: "0x5132A183E9F3CB7C848b0AAC5Ae0c4f0491B7aB2"
zkevm.address-ger-manager: "0x580bda1e7A0CFAe92Fa7F6c20A3794F169CE3CFb"
```

#### Recommended method to start (Using Docker)
To avoid compatibility issues with GCC, GLIBC, and Go versions, we recommend using Docker:
```bash
docker build -t cdk-erigon:latest .
docker run -it --rm \
    -p 8545:8545 \
    -p 30303:30303 \
    -v "$PWD/xlayerconfig-mainnet.yaml:/home/erigon/xlayerconfig-mainnet.yaml" \
    cdk-erigon:latest \
    --config=/home/erigon/xlayerconfig-mainnet.yaml
```

If you prefer a manual installation, follow the steps below.

#### Start Erigon Node
```
./build/bin/cdk-erigon --config="./xlayerconfig-mainnet.yaml"
```

### Quick Start with Snapshot (Recommended)
To avoid the time-consuming process of syncing from genesis, you can download the latest snapshots from our official snapshot page:

Access the Official Snapshot Page
Visit our official snapshot repository at:
https://static.okex.org/cdn/chain/xlayer/snapshot/index.html

This page provides the latest snapshots for both X Layer mainnet and testnet. Snapshots are updated every Webnesday and Sunday, with the latest update timestamp displayed on the page.

#### Downloading and Using Snapshots
##### Downloading snapshots

```
# Create a directory for your data
mkdir -p /data/erigon 
cd /data/erigon
# Download the snapshot from the snapshot page
# Replace with the actual download link from the snapshot page
wget <snapshot-url-from-snapshot-page>
```

##### Extract the snapshot
```
# Extract the snapshot (this may take some time)
tar -xzf <downloaded-snapshot-file>
```

##### Update your configuration
Edit your xlayerconfig-mainnet.yaml file to point to the extracted data directory:
```
datadir: /data/erigon/extracted-snapshot-directory
```
##### Start Erigon with the snapshot data
```
./build/bin/cdk-erigon --config="./xlayerconfig-mainnet.yaml"
```

#### Using Snapshots with Docker
If you're using Docker, mount the extracted data directory as a volume:
```
docker run -it --rm \
    -p 8545:8545 \
    -p 30303:30303 \
    -v "/data/erigon/extracted-snapshot-directory:/home/erigon/data" \
    -v "$PWD/xlayerconfig-mainnet.yaml:/home/erigon/xlayerconfig-mainnet.yaml" \
    cdk-erigon:latest \
    --config=/home/erigon/xlayerconfig-mainnet.yaml
```
Make sure to update your config file's datadir to point to /home/erigon/data. The rest steps are same as that outlined in the instructions above.

