const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

//===============================AUTH

let Credential = uuidv4();

it('/auth/login post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/auth/login',
    headers: { apisecret: process.env.API_SECRET },
    data: { email: 'admin@admin.hu', password: 'Admin_123' },
  });
  expect(res.data.success).toEqual(true);
});

it('/auth/login post RETURNS ERRORS', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/auth/login',
    headers: { apisecret: process.env.API_SECRET },
    data: { email: 'admin@admin.com', password: 'sadgasawg' },
  });
  expect(res.data.success).toEqual(false);
  expect(res.data.errors).not.toBeNull();
});

it('/auth/register post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/auth/register',
    headers: { apisecret: process.env.API_SECRET },
    data: { email: `${Credential}@teszt.com`, username: Credential, password1: 'tesztJelszó123', password2: 'tesztJelszó123' },
  });
  expect(res.data.success).toEqual(true);
});

it('/auth/register post RETURNS ERRORS', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/auth/register',
    headers: { apisecret: process.env.API_SECRET },
    data: { email: 'teszt@teszt.com', username: 'tesztFelhasználó123', password1: 'tesztjelszó', password2: 'tesztJelszó123' },
  });
  expect(res.data.success).toEqual(false);
  expect(res.data.errors).not.toBeNull();
});

//===============================USER

//MODIFY USERNAME
it('/user/postModifyUsername post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postModifyUsername',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, username: 'Teszt1Ujnev' },
  });
  expect(res.data.success).toEqual(true);
});

it('/user/postModifyUsername post RETURNS ERRORS', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postModifyUsername',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, username: '' },
  });
  expect(res.data.success).toEqual(false);
  expect(res.data.error).not.toBeNull();
});

//MODIFY PASSWORD
it('/user/postModifyPassword post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postModifyPassword',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, oldpassword: 'tesztFelhasználó123', password1: 'Teszt1_1234', password2: 'Teszt1_1234' },
  });
  expect(res.data.success).toEqual(true);
});

it('/user/postModifyPassword post RETURNS ERRORS', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postModifyPassword',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, oldpassword: 'Teszt1_123', password1: 'teszt1_123', password2: 'eszt1_123' },
  });
  expect(res.data.success).toEqual(false);
  expect(res.data.error).not.toBeNull();
});

//WEIGHT
it('/user/postSetHeight post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postSetHeight',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, userHeight: 182 },
  });
  expect(res.data.success).toEqual(true);
});

it('/user/postSetHeight post RETURNS ERRORS', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postSetHeight',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, userHeight: '' },
  });
  expect(res.data.success).toEqual(false);
  expect(res.data.error).not.toBeNull();
});

//GENDER
it('/user/postSetGender post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postSetGender',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, userGender: '1' },
  });
  expect(res.data.success).toEqual(true);
});

it('/user/postSetGender post RETURNS ERRORS', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/user/postSetGender',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, userGender: '' },
  });
  expect(res.data.success).toEqual(false);
  expect(res.data.error).not.toBeNull();
});

//===============================ADMIN

//USERS
it('/admin/getAllUserData post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/admin/getAllUserData',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 1 },
  });
  expect(res.data.success).toEqual(true);
});

it('/admin/setUserData post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/admin/setUserData',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 11, username: 'Teszt3', email: 'teszt3@teszt.hu', nem: 1, status: 0, magassag: 180, cel: 90 },
  });
  expect(res.data.success).toEqual(true);
});

it('/admin/deleteUser post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/admin/deleteUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 12 },
  });
  expect(res.data.success);
});

//INGREDIENTS
it('/admin/newIngredient post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/admin/newIngredient',
    headers: { apisecret: process.env.API_SECRET },
    data: { nev: 'Ribizli', kcal: 20, feherje: 15, szenhidrat: 21, zsir: 22, ehetoe_magaban: 0 },
  });
  expect(res.data.success).toEqual(true);
});

it('/admin/setIngredient post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/admin/setIngredient',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 6, nev: 'Alma', kcal: 20, feherje: 15, szenhidrat: 21, zsir: 22, ehetoe_magaban: 1 },
  });
  expect(res.data.success).toEqual(true);
});

it('/admin/deleteIngredient post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/admin/deleteIngredient',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 35 },
  });
  expect(res.data.success);
});

it('/admin/getAllIngredient get SUCCESSFUL', async () => {
  const res = await axios({
    method: 'get',
    url: 'http://localhost:3001/admin/getAllIngredient',
    headers: { apisecret: process.env.API_SECRET },
  });
  expect(res.data.success).toEqual(true);
});

//ADMIN BLOG
it('/admin/getAllBlogData get SUCCESSFUL', async () => {
  const res = await axios({
    method: 'get',
    url: 'http://localhost:3001/admin/getAllBlogData',
    headers: { apisecret: process.env.API_SECRET },
  });
  expect(res.data.success).toEqual(true);
});

it('/admin/setBlogStatus post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/admin/setBlogStatus',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 3, status: false },
  });
  expect(res.data.success).toEqual(true);
});

//===============================BLOG
it('/blog/postGetBlogByUser post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/blog/postGetBlogByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9 },
  });
  expect(res.data.success).toEqual(true);
});

it('/blog/getAllActiveBlog get SUCCESSFUL', async () => {
  const res = await axios({
    method: 'get',
    url: 'http://localhost:3001/blog/getAllActiveBlog',
    headers: { apisecret: process.env.API_SECRET },
  });
  expect(res.data.success).toEqual(true);
});

//===============================KCAL
it('/kcal/postGetFoodsByUser get SUCCESSFUL Today: true', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/getFoodsByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 7, eatenToday: true },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/postGetFoodsByUser get SUCCESSFUL Today: false', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/getFoodsByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 7, eatenToday: false },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/getSportByUser get SUCCESSFUL Today: true', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/getSportByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 7, useToday: true },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/getSportByUser get SUCCESSFUL Today: false', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/getSportByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 7, useToday: false },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/getWaterByUser get SUCCESSFUL Today: true', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/getWaterByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 7, useToday: true },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/getWaterByUser get SUCCESSFUL Today: false', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/getWaterByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 7, useToday: false },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/postWaterByUser post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/postWaterByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, mennyiseg: 5, date: new Date() },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/postSportByUser post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/postSportByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, mennyiseg: 800, date: new Date() },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/postFoodByUser post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/kcal/postFoodByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: {
      id: 9,
      food: {
        name: 'Hagymás csirkemell',
        date: '2022-04-22',
        hozzavalok: [
          {
            hozzavalo_id: 15,
            szorzo: 1,
          },
          {
            hozzavalo_id: 27,
            szorzo: 0.1,
          },
        ],
      },
    },
  });
  expect(res.data.success).toEqual(true);
});

it('/kcal/getIngredients get SUCCESSFUL', async () => {
  const res = await axios({
    method: 'get',
    url: 'http://localhost:3001/kcal/getIngredients',
    headers: { apisecret: process.env.API_SECRET },
  });
  expect(res.data.success).toEqual(true);
});

//===============================WEIGHT
it('/weight/postGetWeights post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/weight/postGetWeights',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9 },
  });
  expect(res.data.success).toEqual(true);
});

it('/weight/postGetLastWeight post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/weight/postGetLastWeight',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9 },
  });
  expect(res.data.success).toEqual(true);
});

it('/weight/postSetGoal post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/weight/postSetGoal',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, goalWeight: 80 },
  });
  expect(res.data.success).toEqual(true);
});

it('/weight/postModifyWeight post SUCCESSFUL', async () => {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3001/weight/postModifyWeight',
    headers: { apisecret: process.env.API_SECRET },
    data: { id: 9, weight: 75, date: new Date() },
  });
  expect(res.data.success).toEqual(true);
});
