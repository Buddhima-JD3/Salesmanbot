## Backend
**⚠ Error: Cannot Run Scripts in Terminal.**

```terminal
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
### Delete Root Env and Install Dependencies and Run from Root Dir

```terminal
python -m venv env; ./env/scripts/activate; pip install -r backend/requirements.txt; npm install
```
### How to Start Backend

### To execute all at once
```terminal
./env/scripts/activate; cd backend; npm start
```
### Break Down
#### 1. Activate virtual environment
```terminal
./env/scripts/activate
```

#### 2.Move to backend Dir and Start
```terminal
cd backend; npm start
```
### To install Pip
```terminal
python -m ensurepip
```
### To update Requirements File
```terminal
pip freeze > requirements.txt
```