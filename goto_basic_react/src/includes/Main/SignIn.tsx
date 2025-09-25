export default function SignIn() {

    return (
        <>
            <div className={"signin_form"}>
                <form action={"http://127.0.0.1:8080/auth/signin"} method={"post"}>
                    <label>id</label>
                    <input type="text" name="id"/>
                    <label>password</label>
                    <input type="password" name="password"/>
                    <input type="email" name="email"/>

                    <button type="submit"> 제출</button>
                    <button type="button"> 취소</button>
                </form>
            </div>
        </>
    );
}