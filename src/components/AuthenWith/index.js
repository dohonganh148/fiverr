import React from 'react';
import s from "./AuthenWith.module.scss";
import {MdFacebook} from "react-icons/md";
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";

const AuthenWith = () => {
  return (
    <div className={s.content}>
        <ul>
            <li className={s.facebook}>
                <a href='#home'>
                    <MdFacebook />
                    <p>Continue with Facebook</p>
                </a>
            </li>
            <li className={s.google}>
                <a href='#home'>
                    <FcGoogle />
                    <p>Continue with Google</p>
                </a>
            </li>
            <li className={s.apple}>
                <a href='#home'>
                    <FaApple />
                    <p>Continue with Apple</p>
                </a>
            </li>
        </ul>
        <div className={s.separate}>
            <span>OR</span>
        </div>
    </div>
  )
}

export default AuthenWith