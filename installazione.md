# Installazione di Nautobot su Ubuntu

Questa guida descrive passo per passo come installare **Nautobot** su **Ubuntu** all'interno di una macchina virtuale.

---

## 1. Creazione della macchina virtuale

1. **Scarica l’ISO di Ubuntu Server**: [Ubuntu Server Download](https://ubuntu.com/download/server)
2. **Crea una nuova VM** in VirtualBox o altro hypervisor:
   - **RAM**: almeno 2 GB
   - **Disco**: almeno 20 GB
   - **Collega l’ISO** di Ubuntu
3. **Installa Ubuntu** seguendo la guida:
   - **Lingua**: Italiano
   - **Tastiera**: Italiano
   - **Configurazione rete**: automatica (DHCP)
   - **Utente e password**: scegli un nome utente e una password
   - **Opzione disco**: "Cancella il disco e installa Ubuntu"
4. Completa l'installazione e riavvia la VM.

---

## 2. Aggiornamento del sistema

Esegui i seguenti comandi per aggiornare Ubuntu:
```bash
sudo apt update && sudo apt upgrade -y
```

---

## 3. Installazione dei pacchetti necessari

Installa i pacchetti richiesti da Nautobot:
```bash
sudo apt install -y curl git python3 python3-venv python3-pip postgresql postgresql-contrib redis build-essential
```

---

## 4. Configurazione di PostgreSQL

1. **Avvia PostgreSQL**:
   ```bash
   sudo systemctl start postgresql
   sudo systemctl enable postgresql
   ```
2. **Crea database e utente per Nautobot**:
   ```bash
   sudo -u postgres psql
   ```
   ```sql
   CREATE DATABASE nautobot;
   CREATE USER nautobot WITH PASSWORD 'password_sicura';
   ALTER ROLE nautobot SET client_encoding TO 'utf8';
   ALTER ROLE nautobot SET default_transaction_isolation TO 'read committed';
   ALTER ROLE nautobot SET timezone TO 'UTC';
   GRANT ALL PRIVILEGES ON DATABASE nautobot TO nautobot;
   \q
   ```

---

## 5. Configurazione di Redis

Assicurati che Redis sia attivo:
```bash
sudo systemctl start redis
sudo systemctl enable redis
```

---

## 6. Creazione di un ambiente virtuale Python

1. **Crea e attiva l'ambiente virtuale**:
   ```bash
   python3 -m venv nautobot-env
   source nautobot-env/bin/activate
   ```

---

## 7. Installazione di Nautobot

Installa Nautobot all'interno dell'ambiente virtuale:
```bash
pip install nautobot
```

---

## 8. Inizializzazione di Nautobot

```bash
nautobot-server init nautobot_config
```

---

## 9. Configurazione del database e di Redis

Apri il file di configurazione:
```bash
nano nautobot_config/nautobot_config.py
```

Modifica i seguenti parametri:

- **Database PostgreSQL**:
  ```python
  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': 'nautobot',
          'USER': 'nautobot',
          'PASSWORD': 'password_sicura',
          'HOST': 'localhost',
          'PORT': '',
      }
  }
  ```
- **Redis**:
  ```python
  CACHES = {
      'default': {
          'BACKEND': 'django_redis.cache.RedisCache',
          'LOCATION': 'redis://127.0.0.1:6379/0',
          'OPTIONS': {
              'CLIENT_CLASS': 'django_redis.client.DefaultClient',
          }
      }
  }
  ```

Salva e chiudi il file (`CTRL+O`, `ENTER`, `CTRL+X`).

---

## 10. Esecuzione delle migrazioni del database

```bash
nautobot-server migrate
```

---

## 11. Creazione di un superuser

```bash
nautobot-server createsuperuser
```

Inserisci nome utente, password e email.

---

## 12. Avvio di Nautobot

Avvia il server di sviluppo:
```bash
nautobot-server runserver 0.0.0.0:8000
```

---

## 13. Accesso a Nautobot

Apri il browser e vai su:
```
http://[IP della tua VM]:8000
```

Accedi con le credenziali del superuser.

---

## 14. (Facoltativo) Avvio automatico di Nautobot

Se vuoi che Nautobot si avvii automaticamente all'accensione del server, possiamo configurare un servizio `systemd`. Fammi sapere se desideri farlo!

---

**Guida completata!** 🎉
