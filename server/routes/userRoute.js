import express from 'express';
import { create, deleteUser, getAllUsers, getUserById, update } from '../controller/userController.js';

const route = express.Router();

route.post('/users' ,create)
route.get('/userss' ,getAllUsers)
route.get('/users/:id' ,getUserById)
route.put("/update/user/:id", update);
route.delete("/delete/user/:id", deleteUser);

export default route;