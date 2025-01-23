from sqlalchemy import create_engine #to allow the database to interact with app
from sqlalchemy.orm import sessionmaker 
from sqlalchemy.ext.declarative import declarative_base 
from dotenv import load_dotenv
import os
load_dotenv()

user = os.getenv('user')
password = os.getenv('pass')
host = os.getenv('host')
port = os.getenv('port')

URL_DATABASE = (f"mysql+pymysql://{user}:{password}@{host}:{port}/aichatbot")

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()