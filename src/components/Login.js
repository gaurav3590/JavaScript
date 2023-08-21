// babel => JS (ECMA 8) + JSX => javaScript
function Login({history}) {
    let onButtonClick = () =>{
      alert('hello button 123 ');
    }
    return (   
      <div>
        <h2>Login</h2>
        <input placeholder="Username" ></input> <br/><br/>
        <input type="password" placeholder="Password" ></input> <br/><br/>
        <input type="button" onClick={()=>{
          history.push('/customers');
        }} value="Login"></input>
      </div>
    );
  }
  export default Login;