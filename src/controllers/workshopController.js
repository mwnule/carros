import Workshop from "../models/workshopModel.js";

export const store = async (req, res) => {
    try {
        const workshop = await Workshop.create(req.body)
        return res.status(200).json(workshop)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro no registro da oficina" })
    }
}

export const index = async (req, res) => {
    try {
        const workshop = await Workshop.find().exec()
        return res.status(200).json(workshop)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao listar as oficinas" })
    }
}

export const update = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(workshop)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar a oficina" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao deletar a oficina"  })
    }  
}