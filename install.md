# auth

sudo sysctl -w vm.max_map_count=262144 

export COMPOSER_AUTH='{"http-basic":{"repo.magento.com": {"username": "cbb842dfe5c6b13a5e82ee3736e43f22", "password": "a3cd6560594ddfb6302579621b75ff88"}}}'

echo '127.0.0.1 scandipwa.local' | sudo tee -a /etc/hosts

git checkout 3.x-stable

make cert

dcf pull

dcf up -d --remove-orphans

frontlogs

applogs

===========> disable service

sudo systemctl stop redis-server redis elasticsearch mysql nginx kibana

sudo systemctl start redis-server redis elasticsearch mysql nginx kibana

==============> fix missing rating attribute

composer update scandipwa/*

install sample data

PUT _cluster/settings
{
  "transient": {
    "cluster.routing.allocation.disk.watermark.low": "5gb",
    "cluster.routing.allocation.disk.watermark.high": "5gb",
    "cluster.routing.allocation.disk.watermark.flood_stage": "2gb",
    "cluster.info.update.interval": "1m"
  }
}