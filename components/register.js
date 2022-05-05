import classes from './styles/register.module.css'

function Register() {
  return (
    <div className={classes.con}>
        <div className={classes.reg}>
            <h2>Register on Xplore today to get access to over 1million books</h2>
            <div className={classes.btncon}>
                <div className={classes.btn}>Sign in with google</div>
            </div>
        </div>        
    </div>

  )
}

export default Register