from sampleMetadata import metadata_template
from pathlib import Path
import json

def writeMetadata (tokenId): 
    collectibleMetadata = metadata_template

    metadataFilename = ("../metadata/" + str(tokenId) + ".json")
    if Path (metadataFilename).exists(): 
        print("{} already found!".format(metadataFilename))
    else: 
        print("Creating Metadata File {}.".format(metadataFilename))
        collectibleMetadata["name"] = "Fierce Model #{}".format(tokenId)
        collectibleMetadata["description"] = "Fierce Models is the first NFT avatar collection based on real fashion models. Holders instantly become part of the Fierce community where you will receive exclusive offers, invites, free products, fashion reveals, and more."
        collectibleMetadata["image"] = "https://gateway.pinata.cloud/ipfs/QmUPCNmLhKM4e9hDEGmrJQ8Xa28S8jwxqcViv8RGNUp22k"

    with open(metadataFilename, 'w') as outfile:
        json.dump(collectibleMetadata, outfile)
        
def createMetadata (): 
    for i in range(0,10000):
        writeMetadata(i)
  
createMetadata()