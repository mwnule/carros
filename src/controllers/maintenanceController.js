import Maintenance from "../models/maintenanceModel.js";

export const store = async (req, res) => {
    try {
        const maintenance = await Maintenance.create(req.body)
        return res.status(200).json(maintenance)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro no registro da manutenção" })
    }
}

export const index = async (req, res) => {
    try {
        const maintenance = await Maintenance.find().exec()
        return res.status(200).json(maintenance)
    } catch (error) {
        return res.status(400).json({ error: "Erro no registro as manutenções" })
    }
}

export const update = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(maintenance)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar a manutenção" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao registrar a manutenção" })
    }  
}