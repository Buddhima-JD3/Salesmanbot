## Backend
**⚠ Error: Cannot Run Scripts in Terminal.**

```terminal
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
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
python -m ensurepip

### To update Requirements File
pip freeze > requirements.txt