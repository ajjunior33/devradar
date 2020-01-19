# devradar
### Semana 10 Omnistack


# Server 
No meu computador coloquei o IP fixo 192.168.15.45 é mandei o listen rodar nesse IP na porta **3344** para poder
acessar com meu telefone o app em React JS que roda na porta **3000** do mesmo IP.

# Erro de Terminal 
> Erro: ENOSPC: limite do sistema para o número de observadores de arquivos atingidos, assista '/ home / foldername / abcrypto / static' # 11406

### Resolvendo

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
