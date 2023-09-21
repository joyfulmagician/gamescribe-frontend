<template>
    <div class="container mx-auto mt-[40px] px-[69px] w-screen h-screen">
        <a class="login-logo  md:absolute top-[40px] left-[91px]" href="/">
            <img class="w-[217px] h-[26px]" src="@/assets/images/title-logo.png" />
        </a>
        <div class="g-6 login-section flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div class="side-login-img md:w-6/12 relative flex justify-center pr-[30px]">

                <img class="max-h-[90vh]" src="@/assets/images/login_side.png" />
            </div>
            <div class="side-form-login md:w-6/12 flex-row items-center pl-[30px] w-full">
                <div class="text-[52px] login-title">Welcome back! 👋</div>
                <div class="mt-4 login-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    empor incididunt
                    ut labore et
                    dolore magna aliqua.</div>

                <div class="btn-google flex pointer">
                    <img class="ico-24" src="@/assets/images/ico/google.png" />
                    <span>Continue with Google</span>
                </div>

                <div class="input-group-login mt-[48px]">
                    <span>Email Address</span>
                    <input placeholder="chrisvaccaro@gmail.com" />
                </div>
                <div class="input-group-login mt-[24px]">
                    <span>Password</span>
                    <input type="password" />
                </div>
                <div class="flex justify-between w-full mt-[14px]">
                    <div class="flex items-center mb-4">
                        <input
                            class="h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox" value="" id="exampleCheck2" />
                        <label for="default-checkbox" class="ml-2 text-sm font-medium">Remember me</label>
                    </div>

                    <div>Forgot password?</div>
                </div>

                <div class="btn-login mt-[44px]">Login</div>
                <div class="mt-[16px] title-signup">Don't have an account? <a class="blue-a" href="/register">Create free
                        account</a></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/style/common.css';

.login-title {
    color: #FFF;
    font-family: Open San;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 119.231% */
    letter-spacing: -2px;
}

.login-content {
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.2px;
    /* 120% */
}

.btn-google {
    display: flex;
    gap: 12px;
    padding: 10px 16px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 32px;
    border: 1px solid #FFF;
    justify-content: center;
    margin-top: 61px;
}

.btn-google span {
    color: #FFF;
    font-family: Open San;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.2px;
}

.input-group-login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.input-group-login span {
    color: #E4E4E7;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
}

.input-group-login input {
    border-radius: 32px;
    border: 1px solid #FFF;
    color: #94A3B8;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    padding: 9px 22px;
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    outline: none;
}

.btn-login {
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: #7173FA;
    color: #FFF;
    font-family: Open San;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
}

.title-signup {
    color: #64748B;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
}
</style>