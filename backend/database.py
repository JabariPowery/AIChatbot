from sqlalchemy import create_engine #to allow the database to interact with app
from sqlalchemy.orm import sessionmaker 
from sqlalchemy.ext.declarative import declarative_base 

URL_DATABASE = '' #make a global variable then put in .gitignore?

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()