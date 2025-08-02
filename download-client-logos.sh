#!/bin/bash

mkdir -p assets

# Medanta
curl -L -o assets/medanta-logo.png "https://upload.wikimedia.org/wikipedia/commons/2/2e/Medanta_logo.png"
# Fortis
curl -L -o assets/fortis-logo.png "https://upload.wikimedia.org/wikipedia/commons/2/2c/Fortis_Healthcare_logo.png"
# Artemis
curl -L -o assets/artemis-logo.png "https://www.artemishospitals.com/images/logo.png"
# Max Healthcare (SVG)
curl -L -o assets/max-logo.svg "https://www.maxhealthcare.in/themes/custom/max/logo.svg"
# Apollo
curl -L -o assets/apollo-logo.png "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/logo.png"
# Paras
curl -L -o assets/paras-logo.png "https://www.parashospitals.com/wp-content/themes/paras/images/logo.png"
# BLK-Max
curl -L -o assets/blk-logo.png "https://www.blkmaxhospital.com/images/logo.png"
# Columbia Asia
curl -L -o assets/columbia-asia-logo.png "https://www.columbiaindiahospitals.com/images/logo.png"

echo "All logos downloaded to assets/ folder."