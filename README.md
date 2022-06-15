# node-microservice-ticketing-app

## install brew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
## Set Secret Key
```
kubectl delete secret jwt-secret 
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=mysecretkey
```
## Update host file
```
code /etc/hosts
```
### Add entry at the end and save
```
127.0.0.1 ticketapp.com
```
## Install & Apply Ingress
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
```
## Install skaffold
```
brew install skaffold
```
## Run skaffold
```
skaffold dev
```
