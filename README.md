Prerender Server for gurudigger.com 
========

Run
----------
```
export PAGE_TTL=600
export REDIS_URL="redis://localhost/1"

#you may want to reduce worker count if resource is limited 
#export PHANTOM_CLUSTER_NUM_WORKERS

npm run server
#server will run on localhost:3000
```

