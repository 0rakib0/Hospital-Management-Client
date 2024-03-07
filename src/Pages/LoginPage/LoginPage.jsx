const LoginPage = () => {
    return (
        <div className="flex gap-4 py-6 px-4 rounded-lg my-6 bg-white">
            <div className="w-6/12">
                <div>
                    <img src="https://www.teleklinics.com/assets/img/login-banner.png" alt="image not found" />
                </div>
            </div>
            <div className="w-6/12 mt-12">
                <form>
                    <h1 className="text-4xl text-center font-bold">PLEASE LOGIN</h1>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Enter Email</span>
                        </div>
                        <input type="text" placeholder="Enter Email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="password" placeholder="Enter Password" className="input input-bordered w-full" />
                    </label>
                    <input type="submit" value='Login'className="input input-bordered w-full mt-4 bg-primaryColor text-white hover:bg-secondaryColor duration-200" />
                </form>
            </div>
        </div>
    )
}

export default LoginPage