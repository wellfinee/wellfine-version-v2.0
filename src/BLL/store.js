import { configureStore } from '@reduxjs/toolkit'
import {blogReducer} from "./blog";
import {firstReducer} from './first'
import {authRes} from "./auth";
import {createRes} from "./creatpost";

export const store = configureStore({ reducer: {firstReducer, blogReducer, authRes, createRes} })