const Signin = ({ onRouteChange }) => {
  return (
		<article className="br3 ba dark-gray b--green-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
			<main className="pa4 black-80">
				<div className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
							<input className="pa2 input-reset ba" type="email" name="email-address"  id="email-address"/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
							<input className="b pa2 input-reset ba" type="password" name="password"  id="password"/>
						</div>
					</fieldset>
					<div className="">
						<input 
							onClick={() => onRouteChange('home')}
							className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
							type="submit" 
							value="Sign in"/>
					</div>
					<div className="lh-copy mt3">
						<p onClick={() => onRouteChange('register')} className="f6 link dim black db white pointer">Register</p>
					</div>
				</div>
			</main>
		</article>
  );
}

export default Signin;