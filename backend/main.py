from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import uvicorn
import os

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Read DATABASE_URL from environment variable
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL environment variable is not set. Check your .env file.")

# SQLAlchemy engine — no connect_args needed for PostgreSQL
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Contact(Base):
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    message = Column(Text)


# Create tables if they don't exist
Base.metadata.create_all(bind=engine)


class ContactForm(BaseModel):
    name: str
    email: str
    message: str


@app.post("/api/contact")
async def create_contact(contact_form: ContactForm):
    db = SessionLocal()
    contact = Contact(
        name=contact_form.name,
        email=contact_form.email,
        message=contact_form.message,
    )
    db.add(contact)
    db.commit()
    db.refresh(contact)
    db.close()
    return {"message": "Contact received successfully", "id": contact.id}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
