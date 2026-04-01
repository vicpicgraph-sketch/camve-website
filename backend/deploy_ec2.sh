#!/bin/bash

# ==========================================
# CAMVE BACKEND - EC2 SETUP SCRIPT (UBUNTU)
# ==========================================

# 1. Update system packages
echo "Updating system..."
sudo apt update && sudo apt upgrade -y

# 2. Install Python, pip, and Venv
echo "Installing Python and dependencies..."
sudo apt install python3-pip python3-venv nginx -y

# 3. Create a virtual environment
echo "Setting up virtual environment..."
python3 -m venv venv
source venv/bin/activate

# 4. Install project requirements
echo "Installing requirements..."
pip install --upgrade pip
pip install -r requirements.txt

# 5. Create Systemd Service for FastAPI
echo "Configuring FastAPI service..."
sudo tee /etc/systemd/system/camve.service > /dev/null <<EOF
[Unit]
Description=Gunicorn instance to serve Camve FastAPI
After=network.target

[Service]
User=$USER
Group=www-data
WorkingDirectory=$(pwd)
Environment="PATH=$(pwd)/venv/bin"
EnvironmentFile=$(pwd)/.env
ExecStart=$(pwd)/venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:8000

[Install]
WantedBy=multi-user.target
EOF

# 6. Configure Nginx as Reverse Proxy
echo "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/camve > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    location / {
        include proxy_params;
        proxy_pass http://localhost:8000;
    }
}
EOF

# 7. Enable Nginx configuration and Service
echo "Finalizing deployment..."
sudo ln -s /etc/nginx/sites-available/camve /etc/nginx/sites-enabled
sudo rm /etc/nginx/sites-enabled/default
sudo systemctl restart nginx
sudo systemctl start camve
sudo systemctl enable camve

echo "=========================================="
echo "DEPLOYMENT COMPLETE!"
echo "Your API is now running on port 80."
echo "=========================================="
