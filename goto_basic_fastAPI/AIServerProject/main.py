from fastapi import FastAPI, WebSocket, WebSocketDisconnect, websockets
from starlette.websockets import WebSocketState
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 혹은 정확한 도메인
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.websocket("/ws")
async def websocket_endpoint(websocket: websockets.WebSocket):
    await websocket.accept()
    try :
        while True:
            data = await websocket.receive_text()
            print(data)
    except WebSocketDisconnect:
        print("good bye")
    except Exception as e:
        # 기타 예외 (예: 네트워크 오류)
        print(f"⚠️ Unexpected error: {e}")

    finally:
        # 서버 측에서 아직 연결이 남아있다면 닫기
        if websocket.application_state != WebSocketState.CONNECTED:
            await websocket.close(code=1000)
        print("good bye2")