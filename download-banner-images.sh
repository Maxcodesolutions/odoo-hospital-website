#!/bin/bash

# Create assets directory if it doesn't exist
mkdir -p assets/banners

echo "Downloading banner images..."

# Download placeholder images for Odoo dashboard screenshots
# Using placeholder images that represent Odoo dashboard layouts

# Banner 1 - Hospital Dashboard Overview
curl -L -o assets/banners/odoo-dashboard-1.jpg "https://via.placeholder.com/800x400/2563eb/ffffff?text=Hospital+Dashboard+Overview"

# Banner 2 - Patient Management Interface  
curl -L -o assets/banners/odoo-dashboard-2.jpg "https://via.placeholder.com/800x400/10b981/ffffff?text=Patient+Management+Interface"

# Banner 3 - Analytics & Reporting
curl -L -o assets/banners/odoo-dashboard-3.jpg "https://via.placeholder.com/800x400/f59e0b/ffffff?text=Analytics+%26+Reporting"

echo "Banner images downloaded to assets/banners/ folder."
echo "You can replace these placeholder images with actual Odoo dashboard screenshots." 