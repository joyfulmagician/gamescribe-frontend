<script>
import { URLCONST } from '@/const/url.js';
import { ValidateUtil } from '@/library/validate.js';
import axios from 'axios'
import { LOCALSTORAGE_USERSESSION } from '@/const/value.js';
import { removeLocalStorage } from '@/library/auth.js';


import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'register',
    created: function () {
    },
    mounted() {
    },
    unmounted() {
    },
    data() {
        return {
            termsState: false,
            formValue: {
                name: '',
                email: '',
                password: '',
                type: 1
            },

            validateState: {
                name: {
                    state: true,
                    message: ''
                },
                email: {
                    state: true,
                    message: ''
                },
                password: {
                    state: true,
                    message: ''
                },
                termsState: {
                    state: true,
                    message: ''
                }
            },
        }
    },
    methods: {
        registerUserByEmail() {
            if (!this.termsState) {
                this.validateState.termsState.state = false;
                return;
            }

            if (this.validateForm()) {
                axios
                    .post(URLCONST.registerAPI, this.formValue)
                    .then((response) => {
                        console.log(response)
                        if (response.status == 200 && response?.data) {
                            const result = response.data;
                            if (result.status) {
                                // register success
                                window.location.assign('/login')
                            } else {
                                // register fail
                                toast(result.result, {
                                    autoClose: 1000,
                                }); // ToastOptions
                                removeLocalStorage(LOCALSTORAGE_USERSESSION)
                            }
                        } else {
                            removeLocalStorage(LOCALSTORAGE_USERSESSION)
                        }
                    })
            }
        },

        validateForm() {
            this.validateState.name = ValidateUtil.validateName(this.formValue.name);
            this.validateState.email = ValidateUtil.validateEmail(this.formValue.email);
            this.validateState.password = ValidateUtil.validatePassword(this.formValue.password);

            return this.validateState.name.state && this.validateState.email.state && this.validateState.password.state;
        },
    },
}
</script >

<template>
    <div class="container mx-auto mt-[40px] px-[69px] w-screen h-screen">
        <a class="login-logo md:absolute top-[40px] left-[91px]" href="/">
            <img class="w-[217px] h-[26px]" src="@/assets/images/title-logo.png" />
        </a>
        <div class="g-6 login-section flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div class="side-form-login md:w-6/12 flex-row items-center w-full">
                <div class="text-[52px] login-title mt-[20px]">Join us today! 🥳</div>
                <div class="mt-[19px] login-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    empor incididunt
                    ut labore et
                    dolore magna aliqua.</div>

                <div class="btn-google flex pointer">
                    <img class="ico-24" src="@/assets/images/ico/google.png" />
                    <span>Sign up with Google</span>
                </div>

                <div class="input-group-login mt-[36px]">
                    <span>First & Last Name</span>
                    <input type="text" :class="!validateState.name.state && 'validate-error'" v-model="formValue.name"
                        @input="validateState.name.state = true" />
                </div>
                <div class="input-group-login mt-[18px]">
                    <span>Email Address</span>
                    <input type="text" :class="!validateState.email.state && 'validate-error'" v-model="formValue.email"
                        @input="validateState.email.state = true" />
                </div>
                <div class="input-group-login mt-[18px]">
                    <span>Create Password</span>
                    <input type="password" :class="!validateState.password.state && 'validate-error'"
                        @input="validateState.password.state = true" v-model="formValue.password" />
                </div>
                <div class="flex justify-between w-full mt-[14px]">
                    <div class="flex items-center">
                        <input v-model="termsState"
                            class="h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox" value="" id="exampleCheck2" @click="validateState.termsState.state = true" />
                        <label for="default-checkbox" class="ml-2 text-sm font-medium pointer"
                            @click="termsState = !termsState, validateState.termsState.state = true">I
                            agree with <a class="blue-a" href="/terms">Terms
                                $ Conditions</a> of GameScribe</label>
                    </div>
                </div>
                <span class="ml-6 text-sm font-medium text-red-400 pointer" v-if="!validateState.termsState.state">Need to
                    agree terms and
                    conditions</span>

                <div class="btn-login mt-[24px]" @click="registerUserByEmail">Create account</div>
                <div class="mt-[16px] title-signup mb-3">Already have an account? <a class="blue-a" href="/login">Sign
                        in</a>
                </div>
            </div>
            <div class="side-login-img md:w-5/12 relative flex justify-center">
                <img class="max-h-[90vh]" src="@/assets/images/register_side.png" />
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
    margin-top: 36px;
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

.input-group-login input.validate-error {
    border: 1px solid rgb(255, 60, 0);
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

.validate-error-title {}
</style>