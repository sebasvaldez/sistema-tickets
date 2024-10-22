import  {Router} from "express"; 
import { pool } from "../db.js";

const router=Router();

router.get("/users", (req, res)=>{
    res.send("Obteniendo los usuarios");
})

router.get("/users/:id", (req, res)=>{
    const {id}=req.params
    res.send(`Obteniendo el usuario con id ${id}`);
})
router.post("/users", (req,res)=>{
    
    res.send("Creando un usuario");
})
router.delete("/users/:id", (req, res)=>{
    //const {id}=req.params;
    res.send(`Eliminando el usuario con id`);
})
router.put("/users/:id", (req,res)=>{

    
    res.send("Actualizando un usuario");
})


export default router;