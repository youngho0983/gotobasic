from fastapi import APIRouter, Body
from sqlalchemy import Integer, Column, String, ForeignKey
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class AI_Model (Base):
    __tablename__  = "AI_MODEL"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    model_file = Column(String)

class layer (Base):
    __tablename__ = "LAYER"
    id = Column(Integer, primary_key=True)
    activate_function_id = Column(Integer, ForeignKey("ACTIVATE_FUNCTION.id"))
    size = Column(Integer)

class activation_function (Base) :
    __tablename__ = "ACTIVATE_FUNCTION"
    id = Column(Integer, primary_key=True)
    name = Column(String)


router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


class AI_learning_data(Base):
    __tablename__ = "AI_learning_data"
    id = Column(Integer, primary_key=True)
    data = Column(String)


@router.get("/{id}")
async def get_ai_model(id: str):
    return {"id": id}






@router.post("/{id}/learning_data")
async def post_learning_data(model_id :int =Body(...) , data: str = Body(...)):

    return {"model_id": model_id, "data": data}

