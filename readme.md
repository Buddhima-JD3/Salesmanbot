# To Run From Root Directory

### Frontend:
```terminal
cd frontend; npm start
```
### Backend
```terminal
./env/scripts/activate; cd Backend; npm start
```
```terminal
./env/scripts/activate; cd Backend;
flask run
```
### Chatbot
```terminal
cd chatbot; ./venv/scripts/activate; rasa run -m models --enable-api --cors “*” --debug
```
### Admin-Frontend:
```terminal
cd admin-frontend; npm start
```
### Admin-Backend:
```terminal
cd admin-backend; npm start
```

# To Install dependencies from Root Directory
### Frontend:
```terminal
cd frontend; npm install
```
### Backend
```terminal
python -m venv env; 
./env/scripts/activate; 
pip install -r backend/requirements.txt;
cd backend; pip install Flask
```
### Chatbot
```terminal
cd chatbot; python -m venv venv; 
pip install 
pip install rasa
```
### Admin-Frontend:
```terminal
cd admin-frontend; npm install
```
### Admin-Backend:
```terminal
cd admin-backend; npm install
```
# References
**⚠ Error: Cannot Run Scripts in Terminal.**

```terminal
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
### To install Pip
```terminal
python -m ensurepip
```
### To update Requirements File
```terminal
pip freeze > requirements.txt
```
### To remove node modules
```terminal
rm -r node_modules
```
### To remove git cache files
```terminal
git rm -r --cached .
```
### To remove git python cache files
```terminal
git rm --cached *.pyc
```