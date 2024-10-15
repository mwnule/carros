import Vehicle from "../models/vehicleModel.js";

export const store = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body)
        return res.status(200).json(vehicle)
    } catch (error) {
        return res.status(400).json({ error: "Erro no registro do veículo" })
    }
}

export const index = async (req, res) => {
    try {
        const vehicle = await Vehicle.find().exec()
        return res.status(200).json(vehicle)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao listar os veículos" })
    }
}

export const update = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(vehicle)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar a oficina" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao deletar o veículo" })
    }  
}