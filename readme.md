## To Start Frontend

```terminal
npm install; npm start
```
## To Start Chatbot

```terminal
./env/scripts/activate; rasa run -m models --enable-api --cors “*” --debug
```
## To Start Backend

```terminal
python -m venv env; ./env/scripts/activate; pip install -r backend/requirements.txt; cd Backend; npm start
```
## To Execute Backend from Root Dir
```terminal
./env/scripts/activate; cd backend; npm start
```

## References
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