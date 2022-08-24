# Music NFT Metadata

This minimalist npm package contains Typescript typings for the evolving music nft metadata standard defined in collaboration with Mint Songs and Catalog. Reference docs can be found [here](https://gist.github.com/bretth18/df8358c840fa94946ec212f753e290dd) and [here](https://www.notion.so/music-nft-20220222-96631ddf932f4fe8837dfb2e71168e0f)

# Usage

## Full Schema Type

```
import type { MusicNftMetadataSchema } from 'music-nft-metadata';

const uploadMetadata(metadata: MusicNftMetadataSchema) => {
    // upload logic
}

```

## Required Schema Type

```
import type { RequiredValues } from 'music-nft-metadata';

const uploadMetadata(requiredMetadata: RequiredValues) => {
    // upload logic
}

```

## Optional Schema Type

```
import type { OptionalValues } from 'music-nft-metadata';

const uploadMetadata(optionalMetadata: OptionalValues) => {
    // upload logic
}

```

## OpenSea Standard Schema Type

```
import type { OpenSeaStandardValues } from 'music-nft-metadata';

const uploadMetadata(openseaMetadata: OpenSeaStandardValues) => {
    // upload logic
}

```

## Other exported types 
`Attributes`
`Artwork`
`Project`
`Visualizer`
`Lyrics`
`Credit`
